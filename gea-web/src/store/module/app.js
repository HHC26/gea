const state = {
    sidebar: {
        opened: false
    },
    tabMenu: [],
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened
    },
    INIT_TAB_MENU(state, payload) {
        const { path, meta, name } = payload.addRoutes[0]
        if (payload.thisTab.name === name) {
            state.tabMenu = []
            state.tabMenu.push({ ...payload.thisTab })
        } else {
            // 通过跳转进入系统，把首页先添加进去
            state.tabMenu = []
            state.tabMenu.push({
                fullPath: '/' + path,
                meta,
                name: path,
            })
            state.tabMenu.push({ ...payload.thisTab })
        }
    },
    ADD_TAB(state, addTab) {
        state.tabMenu.push({ ...addTab })
    },
    REMOVE_TAB(state, name) {
        for (const [index, value] of state.tabMenu.entries()) {
            if (value.name === name) {
                state.tabMenu.splice(index, 1)
                break
            }
        }
    }
}

const actions = {
    ToggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    InitTabMenu({ commit, rootState }, route) {
        const addRoutes = rootState.router.addRoutes
        const thisTab = {
            fullPath: route.fullPath,
            meta: route.meta,
            name: route.name,
        }
        commit("INIT_TAB_MENU", { thisTab, addRoutes })
    },
    AddTab({ commit, state }, route) {
        for (const tab of state.tabMenu) {
            if (tab.name === route.name) {
                return false
            }
        }
        const addTab = {
            fullPath: route.fullPath,
            meta: route.meta,
            name: route.name,
        }
        commit("ADD_TAB", addTab)
    },
    RemoveTab({ commit }, name) {
        commit("REMOVE_TAB", name)
    }
}

const getters = {
    sidebar: state => state.sidebar,
    tabMenu: state => state.tabMenu
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
