import service from '@/utils/request'

export const login = (data) => {
    return service({
        url: "/base/login",
        method: 'post',
        data: data
    })
}

export const captcha = (data) => {
    return service({
        url: "/base/captcha",
        method: 'post',
        data: data
    })
}

export const register = (data) => {
    return service({
        url: "/user/register",
        method: 'post',
        data: data
    })
}

export const changePassword = (data) => {
    return service({
        url: "/user/changePassword",
        method: 'post',
        data: data
    })
}

export const getUserList = (data) => {
    return service({
        url: "/user/getUserList",
        method: 'post',
        data: data
    })
}

export const setUserRole = (data) => {
    return service({
        url: "/user/setUserAuthority",
        method: 'post',
        data: data
    })
}

export const deleteUser = (data) => {
    return service({
        url: "/user/deleteUser",
        method: 'delete',
        data: data
    })
}

export const setUserInfo = (data) => {
    return service({
        url: "/user/setUserInfo",
        method: 'put',
        data: data
    })
}

export const getUserinfo = (data) => {
    return service({
        url: "/user/getUserinfo",
        method: 'get',
        data
    })
}