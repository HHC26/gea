<template>
    <div class="layout-container">
        <div class="header-container">
            <header-menu />
        </div>
        <div class="main-container">
            <side-menu class="sidebar-container" />
            <page-view class="pageView-container" :class="{'pageView-collapse': sidebar.opened}" />
        </div>
    </div>
</template>

<script>
import HeaderMenu from './HeaderMenu/HeaderMenu'
import SideMenu from './SideMenu/SideMenu'
import PageView from './PageView/PageView'
import { mapGetters } from 'vuex'

export default {
    name: 'MainLayout',
    components: {
        HeaderMenu,
        SideMenu,
        PageView,
    },
    computed: {
        ...mapGetters({
            sidebar: 'app/sidebar',
        }),
    },
}
</script>
