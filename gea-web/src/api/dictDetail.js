import service from '@/utils/request'

export const createDictDetail = (data) => {
    return service({
        url: "/sysDictionaryDetail/createSysDictionaryDetail",
        method: 'post',
        data
    })
}

export const deleteDictDetail = (data) => {
    return service({
        url: "/sysDictionaryDetail/deleteSysDictionaryDetail",
        method: 'delete',
        data
    })
}

export const updateDictDetail = (data) => {
    return service({
        url: "/sysDictionaryDetail/updateSysDictionaryDetail",
        method: 'put',
        data
    })
}

export const findDictDetail = (params) => {
    return service({
        url: "/sysDictionaryDetail/findSysDictionaryDetail",
        method: 'get',
        params
    })
}

export const getDictDetailList = (params) => {
    return service({
        url: "/sysDictionaryDetail/getSysDictionaryDetailList",
        method: 'get',
        params
    })
}