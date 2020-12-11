import { asyncMenu } from '@/api/menu'
import { RouterGenerator } from '@/utils/routerGenerator'

const routerList = []
const formatRouter = (routes) => {
    routes && routes.map(item => {
        if ((!item.children || item.children.every(ch => ch.hidden)) && item.name != '404') {
            routerList.push({ label: item.meta.title, value: item.name })
        }
        item.meta.hidden = item.hidden
        if (item.children && item.children.length > 0) {
            formatRouter(item.children)
        }
    })
}

const state = {
    addRoutes: [],
    routerList: routerList,
}
const mutations = {
    SET_ADDROUTES(state, addRoutes) {
        state.addRoutes = addRoutes
    },
    SET_ROUTER_LIST(state, routerList) {
        state.routerList = routerList
    },
}
const actions = {
    async GetMenus({ commit }) {
        const addRoutes = [{
            path: '/',
            component: () => import('@/layouts/MainLayout/MainLayout.vue'),
            children: [
                { path: '', redirect: { name: 'dashboard' } }
            ]
        }]
        const res = await asyncMenu()
        const addRoutesItem = RouterGenerator(res.data.menus)
        formatRouter(addRoutesItem)
        addRoutes[0].children = addRoutes[0].children.concat(addRoutesItem)
        addRoutes.push({
            path: '*',
            component: () => import('@/views/notfound/Error404.vue')
        })
        commit('SET_ADDROUTES', addRoutesItem)
        commit('SET_ROUTER_LIST', routerList)
        return addRoutes
    }
}
const getters = {
    addRoutes: state => state.addRoutes,
    routerList: state => state.routerList
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
