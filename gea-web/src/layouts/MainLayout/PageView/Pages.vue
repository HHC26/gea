<template>
    <div>
        <transition mode="out-in" name="el-zoom-in-top">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
        </transition>
        <transition mode="out-in" name="el-zoom-in-top">
            <router-view v-if="!$route.meta.keepAlive" />
        </transition>
    </div>

</template>

<script>
export default {
    name: 'pages',
    data() {
        return {
            show: true,
        }
    },
}
</script>

<style lang="scss" scoped>
</style>