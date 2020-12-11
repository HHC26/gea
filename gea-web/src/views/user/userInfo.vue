<template>
    <el-row :gutter="18">
        <el-col :span="8">
            <el-card shadow="always">
                <div class="userinfo">
                    <gea-avatar :size="180" />
                    <div class="nickname">你好，{{userinfo.nickName}} ！</div>
                    <div class="sign">
                        这个家伙很懒，什么都没有留下，这个家伙很懒，什么都没有留下。
                    </div>
                    <div class="tags">
                        <el-tag class="tag" effect="dark" type="success">技术宅</el-tag>
                        <el-tag class="tag" effect="dark" type="info">大魔王</el-tag>
                        <el-tag class="tag" effect="dark" type="danger">篮球高手</el-tag>
                        <el-tag class="tag" effect="dark" type="warning">爱吃冷饮</el-tag>
                    </div>
                    <ul>
                        <li>
                            <i class="el-icon-user"></i>
                            神盾局资深超能力学者
                        </li>
                        <li>
                            <i class="el-icon-data-analysis"></i>
                            复仇者联盟-编外人员
                        </li>
                        <li>
                            <i class="el-icon-video-camera-solid"></i>
                            宇宙·银河系·地球
                        </li>
                        <li>
                            <i class="el-icon-medal-1"></i>
                            https://github.com/Junvary/gea
                        </li>
                    </ul>
                </div>
            </el-card>
        </el-col>
        <el-col :span="16">
            <info-detail />
        </el-col>
    </el-row>
</template>

<script>
import GeaAvatar from '@/components/GeaAvatar'
import { mapGetters } from 'vuex'
import InfoDetail from './infoDetail'

export default {
    name: 'Userinfo',
    components: {
        GeaAvatar,
        InfoDetail,
    },
    computed: {
        ...mapGetters('user', ['userinfo']),
    },
}
</script>

<style lang="scss" scoped>
.userinfo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ul {
        li {
            list-style-type: none;
            margin: 25px auto;
            i {
                margin-right: 10px;
            }
        }
    }
    .nickname {
        margin: 10px auto;
        font-size: 20px;
    }
    .sign {
        margin: 10px auto;
        font-size: 15px;
        max-height: 15vh;
        overflow: auto;
    }
    .tags {
        margin: 10px auto;
        .tag {
            margin: 0 2px;
        }
    }
}
</style>