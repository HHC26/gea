import service from '@/utils/request'

export const deleteLogOperation = (data) => {
    return service({
        url: "/sysOperationRecord/deleteSysOperationRecord",
        method: 'delete',
        data
    })
}

export const deleteLogOperationByIds = (data) => {
    return service({
        url: "/sysOperationRecord/deleteSysOperationRecordByIds",
        method: 'delete',
        data
    })
}

export const getLogOperationList = (params) => {
    return service({
        url: "/sysOperationRecord/getSysOperationRecordList",
        method: 'get',
        params
    })
}