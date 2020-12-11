import service from '@/utils/request'

export const createTemp = (data) => {
    return service({
        url: "/autoCode/createTemp",
        method: 'post',
        data,
        responseType: 'blob'
    })
}

export const getDB = () => {
    return service({
        url: "/autoCode/getDB",
        method: 'get',
    })
}

export const getTable = (params) => {
    return service({
        url: "/autoCode/getTables",
        method: 'get',
        params,
    })
}

export const getColumn = (params) => {
    return service({
        url: "/autoCode/getColumn",
        method: 'get',
        params,
    })
}