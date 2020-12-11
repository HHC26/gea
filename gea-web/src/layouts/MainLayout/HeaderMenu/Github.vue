<template>
    <el-button class="actions-button" @click="openGithub">
        <i class="gea gea-icon-github"></i>
    </el-button>
</template>

<script>
export default {
    name: 'Github',
    data() {
        return {
            url: 'https://github.com/Junvary/gea',
        }
    },
    methods: {
        openGithub() {
            window.open(this.url)
        },
    },
}
</script>