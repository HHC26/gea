<template>
    <div>
        <el-tabs v-model="activeValue" @tab-click="toTab" @tab-remove="removeTab" type="card"
            @contextmenu.prevent.native="openContextMenu($event)">
            <el-tab-pane v-for="tab in tabMenu" :key="tab.fullPath" :tab="tab" :name="tab.name"
                :closable="tab.name !== 'dashboard'">
                <span slot="label"><i :class="tab.meta.icon"></i> {{tab.meta.title}}</span>
            </el-tab-pane>
        </el-tabs>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="initTabMenu">关闭未显示</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Tabs',
    data() {
        return {
            activeValue: 'dashboard',
            visible: false,
            top: 0,
            left: 0,
        }
    },
    computed: {
        ...mapGetters({
            tabMenu: 'app/tabMenu',
        }),
    },
    watch: {
        $route() {
            this.addTab()
            this.activeValue = this.$route.name
        },
        visible(value) {
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        },
    },
    created() {
        this.activeValue = this.$route.name
        this.initTabMenu()
    },
    methods: {
        initTabMenu() {
            this.$store.dispatch('app/InitTabMenu', this.$route)
        },
        addTab() {
            this.tabMenu.map((item) => {
                if (item.name === 'dictDetail') {
                    this.$store.dispatch('app/RemoveTab', 'dictDetail')
                }
            })
            this.$store.dispatch('app/AddTab', this.$route)
        },
        toTab(params) {
            const tab = params.$attrs.tab
            this.$router.push(tab.fullPath)
        },
        removeTab(name) {
            this.$store.dispatch('app/RemoveTab', name)
            this.toBeforeTab()
        },
        toBeforeTab() {
            const beforeTab = this.tabMenu.slice(-1)[0]
            if (beforeTab) {
                this.$router.push(beforeTab.fullPath)
            } else {
                this.$router.push('/')
            }
        },
        openContextMenu(e) {
            if (this.tabMenu.length <= 1) {
                return false
            }
            const menuMinWidth = 105
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$el.offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX - offsetLeft // 15: margin right
            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }
            this.top = e.clientY - 60 // fix 位置bug
            this.visible = true
        },
        closeMenu() {
            this.visible = false
        },
    },
}
</script>

<style lang="scss" scoped>
.contextmenu {
    position: absolute;
    z-index: 3000;
    margin: 0;
    background: #fff;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    border: 1px solid black;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
            background: #eee;
        }
    }
}
</style>