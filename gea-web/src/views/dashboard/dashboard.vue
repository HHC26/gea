<template>
    <div class="dashboard">
        <el-image :src="imgApi" style="width: 100%; height: 100%" fit="fill" @click="changeImg">
            <div class="imgHolder" slot="placeholder">
                <i class="el-icon-loading" />
            </div>
            <div class="imgHolder" slot="error">
                <i class="el-icon-picture-outline"></i>
            </div>
        </el-image>
        <div class="title">
            <span>欢迎使用 Gin-Element-Admin！</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
            imgApiList: ['https://api.ixiaowai.cn/api/api.php', 'https://api.ixiaowai.cn/mcapi/mcapi.php', 'https://acg.xydwz.cn/api/api.php', 'http://api.mtyqx.cn/tapi/random.php', 'http://api.mtyqx.cn/api/random.php', 'http://www.dmoe.cc/random.php'],
            imgApi: '',
        }
    },
    created() {
        this.changeImg()
    },
    methods: {
        changeImg() {
            this.imgApi = this.imgApiList[Math.floor(Math.random() * 6)]
        },
    },
}
</script>

<style lang="scss" scoped>
.dashboard {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgHolder {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
}
.title {
    position: absolute;
    font-size: 4em;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    background-color: rgba($color: #000000, $alpha: 0.4);
    box-shadow: 0 1px 40px 40px #ffffff;
}
</style>