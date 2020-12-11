import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store'
import { getToken, removeToken } from '@/utils/cookies'
import router from '@/router'

// 创建axios实例service
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 15000
})

// 请求拦截
service.interceptors.request.use(config => {
    const token = getToken()
    if (token) {
        config.headers = {
            'x-token': token
        }
    }
    return config
}, error => {
    Message({
        showClose: true,
        message: error,
        type: 'error'
    })
    Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
    if (response.headers["new-token"]) {
        store.commit('user/setToken', response.headers["new-token"])
    }
    if (response.data.code == 0 || response.headers.success === "true") {
        return response.data
    } else {
        Message({
            showClose: true,
            message: response.data.msg || decodeURI(response.headers.msg),
            type: response.headers.msgtype || 'error',
        })
        if (response.data.data && response.data.data.reload) {
            store.dispatch('user/Logout')
        }
        return response.data.msg ? response.data : response
    }
}, error => {
    if (error + '' === 'Error: Network Error') {
        router.push({ path: '/503' })
    } else if (error.response && error.response.status === 404) {
        Message({
            type: 'error',
            message: '请求地址不存在 [' + error.response.request.responseURL + ']',
        })
    }
    removeToken()
    router.push({ path: '/login' })
    return Promise.reject(error)
})

export default service