import service from '@/utils/request'

export const updateCasbin = (data) => {
    return service({
        url: "/casbin/updateCasbin",
        method: 'post',
        data
    })
}

export const getPolicyPathByRoleId = (data) => {
    return service({
        url: "/casbin/getPolicyPathByAuthorityId",
        method: 'post',
        data
    })
}