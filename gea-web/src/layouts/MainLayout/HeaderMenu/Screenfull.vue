<template>
    <el-button class="actions-button" @click="click">
        <i class="el-icon-full-screen" />
    </el-button>
</template>

<script>
import screenfull from 'screenfull'

export default {
    name: 'Screenfull',
    data() {
        return {
            isFullscreen: false,
        }
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.destroy()
    },
    methods: {
        click() {
            if (!screenfull.isEnabled) {
                this.$message({
                    message: '你的浏览器不支持全屏功能!',
                    type: 'warning',
                })
                return false
            }
            screenfull.toggle()
        },
        change() {
            this.isFullscreen = screenfull.isFullscreen
        },
        init() {
            if (screenfull.enabled) {
                screenfull.on('change', this.change)
            }
        },
        destroy() {
            if (screenfull.enabled) {
                screenfull.off('change', this.change)
            }
        },
    },
}
</script>
