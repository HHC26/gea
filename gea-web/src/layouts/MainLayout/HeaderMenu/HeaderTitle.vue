<template>
    <div class="headerTitle">
        <i class="el-icon-menu" style="font-size: 25px" @click="toggleSideBar" />
        <el-avatar class="logo" :src="require('@/assets/logo.png')" />
        <div class="title">
            Gin-Element-Admin
        </div>
        <el-breadcrumb class="header-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :key="item.path" v-for="item in matched.slice(1,matched.length)">
                <i :class="item.meta.icon" /> {{item.meta.title}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'HeaderTitle',
    methods: {
        toggleSideBar() {
            this.$store.dispatch('app/ToggleSideBar')
        },
    },
    computed: {
        matched() {
            return this.$route.matched
        },
    },
}
</script>

<style lang="scss" scoped>
.headerTitle {
    color: #ffffff;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-avatar {
        margin-left: 10px;
        background-color: #ffffff;
        box-shadow: 0px 0px 10px 5px #ffffff;
        transition: transform 1s ease-in-out;
        &:hover {
            transform: rotate(-360deg);
        }
    }
    .title {
        margin-left: 10px;
        font-size: 30px;
        font-weight: bold;
        font-style: italic;
    }
}
</style>