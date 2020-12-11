<template>
    <div class="we">
        <span>
            Github地址：
        </span>
        <span>
            <el-link type="success" target="_blank" href="https://github.com/Junvary/gea">https://github.com/Junvary/gea
            </el-link>
        </span>
        <span>
            欢迎 Star！
        </span>
    </div>
</template>

<script>
export default {
    name: 'We',
}
</script>

<style lang="scss" scoped>
.we {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    flex-direction: column;
    a {
        font-size: 1em;
    }
}
</style>