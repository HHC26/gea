import service from '@/utils/request'

export const createDict = (data) => {
    return service({
        url: "/sysDictionary/createSysDictionary",
        method: 'post',
        data
    })
}

export const deleteDict = (data) => {
    return service({
        url: "/sysDictionary/deleteSysDictionary",
        method: 'delete',
        data
    })
}

export const updateDict = (data) => {
    return service({
        url: "/sysDictionary/updateSysDictionary",
        method: 'put',
        data
    })
}

export const findDict = (params) => {
    return service({
        url: "/sysDictionary/findSysDictionary",
        method: 'get',
        params
    })
}

export const getDictList = (params) => {
    return service({
        url: "/sysDictionary/getSysDictionaryList",
        method: 'get',
        params
    })
}