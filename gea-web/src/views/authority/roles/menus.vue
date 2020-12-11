<template>
    <div>
        <el-button @click="relation" class="fl-right" size="small" type="primary">确 定</el-button>
        <el-tree :data="menuTreeData" :default-checked-keys="menuTreeIds" :props="menuDefaultProps" @check="nodeChange"
            style="height: 80vh; overflow: auto" default-expand-all highlight-current node-key="ID" ref="menuTree"
            show-checkbox></el-tree>
    </div>
</template>
<script>
import { getMenuTree, getMenuRole, addMenuRole } from '@/api/menu'

export default {
    name: 'Menus',
    props: {
        row: {
            default: function () {
                return {}
            },
            type: Object,
        },
    },
    data() {
        return {
            menuTreeData: [],
            menuTreeIds: [],
            needConfirm: false,
            menuDefaultProps: {
                children: 'children',
                label: function (data) {
                    return data.meta.title
                },
            },
        }
    },
    methods: {
        nodeChange() {
            this.needConfirm = true
        },
        // 暴露给外层使用的切换拦截统一方法
        enterAndNext() {
            this.relation()
        },
        // 关联树 确认方法
        async relation() {
            const checkArr = this.$refs.menuTree.getCheckedNodes(false, true)
            const res = await addMenuRole({
                menus: checkArr,
                authorityId: this.row.authorityId,
            })
            if (res.code == 0) {
                this.$message({
                    type: 'success',
                    message: '菜单设置成功!',
                })
            }
        },
    },
    async created() {
        // 获取所有菜单树
        const res = await getMenuTree()
        this.menuTreeData = res.data.menus

        const res1 = await getMenuRole({ authorityId: this.row.authorityId })
        const menus = res1.data.menus
        const arr = []
        menus.map((item) => {
            // 防止直接选中父级造成全选
            if (!menus.some((same) => same.parentId === item.menuId)) {
                arr.push(Number(item.menuId))
            }
        })
        this.menuTreeIds = arr
    },
}
</script>