<template>
    <div>
        <el-tabs type="border-card" class="user-tabs-container">
            <el-tab-pane label="基础信息">
                <el-card shadow="always">
                    <div class="infoDetail">
                        <div class="detailName">
                            手机号
                        </div>
                        <div class="detailAction">
                            <span>12345678901</span>
                            <el-button type="primary" @click="test">修改</el-button>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="always">
                    <div class="infoDetail">
                        <div class="detailName">
                            邮箱
                        </div>
                        <div class="detailAction">
                            <span>email@email.com</span>
                            <el-button type="primary" @click="test">修改</el-button>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="always">
                    <div class="infoDetail">
                        <div class="detailName">
                            密保
                        </div>
                        <div class="detailAction">
                            <span>你知道 Gin-Element-Admin 吗？</span>
                            <el-button type="primary" @click="test">设置</el-button>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="always">
                    <div class="infoDetail">
                        <div class="detailName">
                            登录密码
                        </div>
                        <div class="detailAction">
                            <span>已设置登录密码</span>
                            <el-button type="primary" @click="changePassword">修改</el-button>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
        </el-tabs>
        <el-dialog :visible.sync="changgePasswordVisible" @close="clearPassword" title="修改密码" width="500px">
            <el-form :model="pwdModify" :rules="rules" label-width="80px" ref="modifyPwdForm">
                <el-form-item :minlength="6" label="原密码" prop="password">
                    <el-input show-password v-model="pwdModify.password"></el-input>
                </el-form-item>
                <el-form-item :minlength="6" label="新密码" prop="newPassword">
                    <el-input show-password v-model="pwdModify.newPassword"></el-input>
                </el-form-item>
                <el-form-item :minlength="6" label="确认密码" prop="confirmPassword">
                    <el-input show-password v-model="pwdModify.confirmPassword"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="changgePasswordVisible=false">取 消</el-button>
                <el-button @click="handleChangePassword" type="primary">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { changePassword } from '@/api/user'

export default {
    name: 'InfoDetail',
    computed: {
        ...mapGetters('user', ['userinfo']),
    },
    data() {
        return {
            changgePasswordVisible: false,
            pwdModify: {},
            rules: {
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, message: '最少6个字符', trigger: 'blur' },
                ],
                newPassword: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 6, message: '最少6个字符', trigger: 'blur' },
                ],
                confirmPassword: [
                    { required: true, message: '请输入确认密码', trigger: 'blur' },
                    { min: 6, message: '最少6个字符', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value !== this.pwdModify.newPassword) {
                                callback(new Error('两次密码不一致'))
                            } else {
                                callback()
                            }
                        },
                        trigger: 'blur',
                    },
                ],
            },
        }
    },
    methods: {
        test() {
            this.$alert('此功能正在开发中...', '提示', {
                confirmButtonText: '确定',
            })
        },
        changePassword() {
            this.changgePasswordVisible = true
        },
        handleChangePassword() {
            this.$refs.modifyPwdForm.validate((valid) => {
                if (valid) {
                    changePassword({
                        username: this.userinfo.userName,
                        password: this.pwdModify.password,
                        newPassword: this.pwdModify.newPassword,
                    }).then((res) => {
                        if (res.code == 0) {
                            this.$message.success('修改密码成功！')
                        }
                        this.changgePasswordVisible = false
                    })
                } else {
                    return false
                }
            })
        },
        clearPassword() {
            this.pwdModify = {
                password: '',
                newPassword: '',
                confirmPassword: '',
            }
            this.$refs.modifyPwdForm.clearValidate()
        },
    },
}
</script>

<style lang="scss" scoped>
.infoDetail {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .detailName {
        font-size: 20px;
        font-weight: bold;
        color: #1d1d1d;
    }
    .detailAction {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #606266;
    }
}
</style>