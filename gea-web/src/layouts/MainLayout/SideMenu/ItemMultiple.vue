<template>
    <el-submenu :popper-append-to-body="false" ref="subMenu" :index="addRoutesItem.name">
        <template slot="title">
            <i :class="addRoutesItem.meta.icon"></i>
            <span slot="title">{{addRoutesItem.meta.title}}</span>
        </template>
        <slot></slot>
    </el-submenu>
</template>

<script>
export default {
    name: 'ItemMultiple',
    props: {
        addRoutesItem: {
            default: function () {
                return null
            },
            type: Object,
        },
    },
}
</script>

<style lang="scss" scoped>
</style>