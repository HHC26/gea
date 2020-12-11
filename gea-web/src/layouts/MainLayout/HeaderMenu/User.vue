<template>
    <el-popover placement="bottom-end" width="500" trigger="click" v-model="popVisible"
        popper-class="header-user-popover">
        <el-row :gutter="20">
            <el-col :span="12">
                <user-left />
            </el-col>
            <el-col :span="12">
                <div class="user">
                    <gea-avatar :size="120" />
                    <span>你好！{{nickName}}</span>
                    <div class="buttons">
                        <el-button @click="toUserinfo" type="primary" round size="small">
                            个人信息
                        </el-button>
                        <el-button @click="logout" type="danger" round size="small">
                            退出登录
                        </el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-button slot="reference" class="actions-button">
            <gea-avatar />
            <span style="margin-left:8px; font-size: 1.2em">{{nickName}}</span>
        </el-button>
    </el-popover>
</template>

<script>
import { mapGetters } from 'vuex'
import GeaAvatar from '@/components/GeaAvatar'
import UserLeft from './UserLeft'

export default {
    name: 'User',
    data() {
        return {
            popVisible: false,
            userPop: {
                backgroundColor: 'black',
            },
        }
    },
    components: {
        GeaAvatar,
        UserLeft,
    },
    computed: {
        ...mapGetters('user', ['userinfo']),
        nickName() {
            return this.userinfo.nickName
        },
    },
    methods: {
        toUserinfo() {
            this.popVisible = false
            this.$router.push({ path: '/userInfo' })
        },
        logout() {
            this.popVisible = false
            this.$store.dispatch('user/Logout').then(() => {
                this.$router.push({ path: '/login' })
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.user {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
</style>