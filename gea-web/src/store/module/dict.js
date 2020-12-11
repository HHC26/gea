import { findDict } from '@/api/dict'

const state = {
    dictMap: {},
}

const mutations = {
    SET_DICT_MAP(state, dictMap) {
        state.dictMap = { ...state.dictMap, ...dictMap }
    },
}

const actions = {
    async GetDict({ commit, state }, type) {
        if (state.dictMap[type]) {
            return state.dictMap[type]
        } else {
            const res = await findDict({ type })
            if (res.code == 0) {
                const dictMap = {}
                const dict = []
                res.data.resysDictionary.sysDictionaryDetails && res.data.resysDictionary.sysDictionaryDetails.map(item => {
                    dict.push({
                        label: item.label,
                        value: item.value
                    })
                })
                dictMap[res.data.resysDictionary.type] = dict
                commit("SET_DICT_MAP", dictMap)
                return state.dictMap[type]
            }
        }
    }
}

const getters = {
    dict: state => state.dictMap
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
