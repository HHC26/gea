<template>
    <el-menu-item :index="addRoutesItem.name" :route="{parameters:addRoutesItem.parameters}">
        <i :class="addRoutesItem.meta.icon"></i>
        <span slot="title">{{addRoutesItem.meta.title}}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: 'ItemSingle',
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