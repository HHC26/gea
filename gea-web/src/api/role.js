import service from '@/utils/request'

export const getRoleList = (data) => {
    return service({
        url: "/authority/getAuthorityList",
        method: 'post',
        data
    })
}

export const deleteRole = (data) => {
    return service({
        url: "/authority/deleteAuthority",
        method: 'post',
        data
    })
}

export const createRole = (data) => {
    return service({
        url: "/authority/createAuthority",
        method: 'post',
        data
    })
}

export const copyRole = (data) => {
    return service({
        url: "/authority/copyAuthority",
        method: 'post',
        data
    })
}

export const setDataAuthority = (data) => {
    return service({
        url: "/authority/setDataAuthority",
        method: 'post',
        data
    })
}

export const updateRole = (data) => {
    return service({
        url: "/authority/updateAuthority",
        method: 'put',
        data
    })
}