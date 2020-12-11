<template>
    <div class="geaAvatar">
        <el-avatar :src="src?src:avatar" v-if="src?src:avatar" :size="size?size: 'large'"></el-avatar>
        <el-avatar v-else :size="size?size: 'large'">
            <span class="gea" :style="{fontSize: size / 3 + 'px'}">GEA</span>
        </el-avatar>
    </div>
</template>

<script>
export default {
    name: 'GeaAvatar',
    computed: {
        avatar() {
            return this.$store.getters['user/userinfo'].headerImg
        },
    },
    props: {
        size: {
            type: Number,
            required: false,
        },
        src: {
            type: String,
            required: false,
        },
    },
}
</script>

<style lang="scss" scoped>
.geaAvatar {
    display: flex;
    justify-content: center;
    align-items: center;
}
.gea {
    color: #1976d2;
    font-weight: bold;
}
</style>