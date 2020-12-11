import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const baseRouters = [
    {
        path: '/login',
        component: () => import('@/layouts/LoginLayout.vue'),
        children: [
            { path: '', name: 'login', component: () => import('@/views/login/login.vue') },
        ]
    },
]

const createRouter = () => new Router({
    routes: baseRouters
})

const router = createRouter()

export default router