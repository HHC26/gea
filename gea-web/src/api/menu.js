import service from '@/utils/request'

export const asyncMenu = () => {
    return service({
        url: "/menu/getMenu",
        method: 'post',
    })
}

export const getMenuList = (data) => {
    return service({
        url: "/menu/getMenuList",
        method: 'post',
        data
    })
}

export const addMenu = (data) => {
    return service({
        url: "/menu/addBaseMenu",
        method: 'post',
        data
    })
}

export const getMenuTree = () => {
    return service({
        url: "/menu/getBaseMenuTree",
        method: 'post',
    })
}

export const addMenuRole = (data) => {
    return service({
        url: "/menu/addMenuAuthority",
        method: 'post',
        data
    })
}

export const getMenuRole = (data) => {
    return service({
        url: "/menu/getMenuAuthority",
        method: 'post',
        data
    })
}

export const deleteMenu = (data) => {
    return service({
        url: "/menu/deleteBaseMenu",
        method: 'post',
        data
    })
}

export const updateMenu = (data) => {
    return service({
        url: "/menu/updateBaseMenu",
        method: 'post',
        data
    })
}

export const getMenuById = (data) => {
    return service({
        url: "/menu/getBaseMenuById",
        method: 'post',
        data
    })
}