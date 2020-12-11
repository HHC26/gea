export function RouterGenerator(menus) {
    return menus.filter(item => {
        if (item.component) {
            item.component = pageImporter(item.component)
        } else {
            delete item.component
        }
        if (item.children !== null && item.children && item.children.length) {
            item.children = RouterGenerator(item.children)
        }
        return true
    })
}

const pageImporter = (component) => {
    return (resolve) => require([`@/views/${component}`], resolve)
}