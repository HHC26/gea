import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'
import user from './module/user'
import router from './module/router'
import dict from './module/dict'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        router,
        dict
    },
})

export default store