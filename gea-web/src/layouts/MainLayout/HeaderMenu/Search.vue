<template>
    <div class="search">
        <transition>
            <div class="searchBox" v-show="show">
                <el-select ref="search-input" @blur="hiddenSearch" @change="changeRouter" filterable placeholder="请选择"
                    v-model="value">
                    <el-option :key="item.value" :label="item.label" :value="item.value" v-for="item in routerList">
                    </el-option>
                </el-select>
            </div>
        </transition>
        <el-button class="actions-button" @click="showSearch()">
            <i class="el-icon-search" />
        </el-button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Search',
    data() {
        return {
            value: '',
            show: false,
        }
    },
    computed: {
        ...mapGetters('router', ['routerList']),
    },
    methods: {
        changeRouter() {
            this.$router.push({ name: this.value })
            this.value = ''
        },
        hiddenSearch() {
            this.show = false
        },
        showSearch() {
            this.show = true
            this.$nextTick(() => {
                this.$refs['search-input'].focus()
            })
        },
    },
}
</script>

<style scoped>
.search {
    display: flex;
    align-items: center;
}
.searchBox {
    display: inline-block;
    margin-right: 10px;
}
</style>
