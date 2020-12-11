<template>
    <div class="loginLayout">
        <div class="loginForm">
            <el-card style="width: 50vw" :body-style="{ padding: '0px' }">
                <el-row>
                    <el-col :span="12" style="height: 57vh">
                        <el-image :src="imgApi" style="width: 100%; height: 100%" fit="cover" @click="changeImg">
                            <div class="imgHolder" slot="placeholder">
                                <i class="el-icon-loading" />
                            </div>
                            <div class="imgHolder" slot="error">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                    </el-col>
                    <el-col :span="12">
                        <div class="form">
                            <el-avatar :size="80" :src="require('@/assets/logo.png')"></el-avatar>
                            <h1 style="color: #1976D2; line-height: 20px">
                                Gin-Element-Admin
                            </h1>
                            <h3 style="font-size: 17px; color: #1976D2; margin:10px auto">
                                好久不见，欢迎回来！
                            </h3>
                            <router-view></router-view>
                        </div>

                    </el-col>
                </el-row>
            </el-card>

        </div>

        <div class="loginFooter">
            <div>
                <span class="q-ml-sm text-primary">
                    欢迎使用 Gin-Element-Admin ！
                </span>
            </div>
            <div class="flex q-gutter-xs q-mt-none text-primary">
                <span class="q-ml-sm">
                    <a>Junvary</a>
                    {{ currentYear }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginLayout',
    data() {
        return {
            currentYear: '',
            imgApiList: ['https://api.ixiaowai.cn/api/api.php', 'https://api.ixiaowai.cn/mcapi/mcapi.php', 'https://acg.xydwz.cn/api/api.php', 'http://api.mtyqx.cn/tapi/random.php', 'http://api.mtyqx.cn/api/random.php', 'http://www.dmoe.cc/random.php'],
            imgApi: '',
        }
    },
    created() {
        this.changeImg()
        this.currentYear = new Date().getFullYear()
    },
    methods: {
        changeImg() {
            this.imgApi = this.imgApiList[Math.floor(Math.random() * 6)]
        },
    },
}
</script>

<style lang="scss" scoped>
.loginLayout {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-image: url('~@/assets/sky.jpg');
    background-repeat: no-repeat;
    background-position: center 0px;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
.loginForm {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form {
    height: 57vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.loginFooter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 13px;
    letter-spacing: 0.3px;
    padding: 15px 25px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    color: #ffffff;
}
.imgHolder {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
}
</style>