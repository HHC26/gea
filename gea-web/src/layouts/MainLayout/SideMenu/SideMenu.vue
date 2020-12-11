<template>
    <el-scrollbar wrap-class="scrollbar-wrapper" :class="{'sidebar-collapse': sidebar.opened}">
        <el-button class="actions-button" style="width: 100%; height: 4em" @click="toGithub">
            <i class="gea gea-icon-github"
                style="font-size: 3em; display: flex; justify-content: center; align-items: center; color: black" />
        </el-button>
        <el-menu :collapse="sidebar.opened" :collapse-transition="false" :default-active="active"
            @select="selectMenuItem" active-text-color="#ffffff" unique-opened>
            <template v-for="(item, index) in addRoutes">
                <SideMenuItem :addRoutesItem="item" :key="index" />
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SideMenuItem from './SideMenuItem'
export default {
    name: 'SideMenu',
    components: {
        SideMenuItem,
    },
    computed: {
        ...mapGetters({
            addRoutes: 'router/addRoutes',
            sidebar: 'app/sidebar',
        }),
    },
    data() {
        return {
            active: '',
        }
    },
    created() {
        this.active = this.$route.name
    },
    watch: {
        $route() {
            this.active = this.$route.name
        },
    },
    methods: {
        selectMenuItem(index, _, ele) {
            const query = {}
            const params = {}
            ele.route.parameters &&
                ele.route.parameters.map((item) => {
                    if (item.type == 'query') {
                        query[item.key] = item.value
                    } else {
                        params[item.key] = item.value
                    }
                })
            if (index === this.$route.name) return
            if (index.indexOf('http://') > -1 || index.indexOf('https://') > -1) {
                window.open(index)
            } else {
                this.$router.push({ name: index, query, params })
            }
        },
        toGithub() {
            window.open('https://github.com/Junvary/gea')
        },
    },
}
</script>
