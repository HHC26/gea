<template>
    <div>
        <div class="search-term">
            <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
                <el-form-item label="展示值">
                    <el-input placeholder="搜索条件" v-model="searchInfo.label"></el-input>
                </el-form-item>
                <el-form-item label="字典值">
                    <el-input placeholder="搜索条件" v-model="searchInfo.value"></el-input>
                </el-form-item>
                <el-form-item label="启用状态" prop="status">
                    <el-select v-model="searchInfo.status" placeholder="请选择">
                        <el-option key="true" label="启用" value="true"></el-option>
                        <el-option key="false" label="停用" value="false"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="onSubmit" type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="openDialog" type="primary">新增字典项</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="tableData" border ref="multipleTable" stripe style="width: 100%" tooltip-effect="dark"
            v-loading="loading">
            <el-table-column type="selection" min-width="55"></el-table-column>
            <el-table-column label="日期" min-width="180">
                <template slot-scope="scope">{{scope.row.CreatedAt|formatDate}}</template>
            </el-table-column>

            <el-table-column label="展示值" prop="label" min-width="120"></el-table-column>

            <el-table-column label="字典值" prop="value" min-width="120"></el-table-column>

            <el-table-column label="启用状态" prop="status" min-width="120">
                <template slot-scope="scope">{{scope.row.status|formatBoolean}}</template>
            </el-table-column>

            <el-table-column label="排序标记" prop="sort" min-width="120"></el-table-column>

            <el-table-column label="按钮组" width="400">
                <template slot-scope="scope">
                    <el-button @click="updateDictDetail(scope.row)" size="small" type="primary">变更</el-button>
                    <el-button @click="deleteDictDetail(scope.row)" size="small" type="danger">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination :current-page="page" :page-size="pageSize" :page-sizes="[10, 30, 50, 100]"
            :style="{float:'right',padding:'20px'}" :total="total" @current-change="handleCurrentChange"
            @size-change="handleSizeChange" layout="total, sizes, prev, pager, next, jumper"></el-pagination>

        <el-dialog :before-close="closeDialog" :visible.sync="dialogFormVisible" title="弹窗操作">
            <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="110px">
                <el-form-item label="展示值" prop="label">
                    <el-input v-model="formData.label" placeholder="请输入展示值" clearable :style="{width: '100%'}">
                    </el-input>
                </el-form-item>
                <el-form-item label="字典值" prop="value">
                    <el-input-number v-model.number="formData.value" step-strictly :step="1" placeholder="请输入字典值"
                        clearable :style="{width: '100%'}"></el-input-number>
                </el-form-item>
                <el-form-item label="启用状态" prop="status" required>
                    <el-switch v-model="formData.status" active-text="开启" inactive-text="停用"></el-switch>
                </el-form-item>
                <el-form-item label="排序标记" prop="sort">
                    <el-input-number v-model.number="formData.sort" placeholder="排序标记"></el-input-number>
                </el-form-item>
            </el-form>
            <div class="dialog-footer" slot="footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button @click="enterDialog" type="primary">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { createDictDetail, deleteDictDetail, updateDictDetail, findDictDetail, getDictDetailList } from '@/api/dictDetail' //  此处请自行替换地址
import { formatTimeToStr } from '@/utils/date'
import infoList from '@/mixins/infoList'

export default {
    name: 'Detail',
    mixins: [infoList],
    data() {
        return {
            listApi: getDictDetailList,
            dialogFormVisible: false,
            visible: false,
            type: '',
            formData: {
                label: null,
                value: null,
                status: true,
                sort: null,
            },
            rules: {
                label: [
                    {
                        required: true,
                        message: '请输入展示值',
                        trigger: 'blur',
                    },
                ],
                value: [
                    {
                        required: true,
                        message: '请输入字典值',
                        trigger: 'blur',
                    },
                ],
                sort: [
                    {
                        required: true,
                        message: '排序标记',
                        trigger: 'blur',
                    },
                ],
            },
        }
    },
    filters: {
        formatDate: function (time) {
            if (time != null && time != '') {
                var date = new Date(time)
                return formatTimeToStr(date, 'yyyy-MM-dd hh:mm:ss')
            } else {
                return ''
            }
        },
        formatBoolean: function (bool) {
            if (bool != null) {
                return bool ? '启用' : '停用'
            } else {
                return ''
            }
        },
    },
    methods: {
        //条件搜索前端看此方法
        onSubmit() {
            this.page = 1
            this.pageSize = 10
            if (this.searchInfo.status == '') {
                this.searchInfo.status = null
            }
            this.getTableData()
        },
        async updateDictDetail(row) {
            const res = await findDictDetail({ ID: row.ID })
            this.type = 'update'
            if (res.code == 0) {
                this.formData = res.data.resysDictionaryDetail
                this.dialogFormVisible = true
            }
        },
        closeDialog() {
            this.dialogFormVisible = false
            this.formData = {
                label: null,
                value: null,
                status: true,
                sort: null,
                sysDictionaryID: '',
            }
        },
        deleteDictDetail(row) {
            this.$confirm('此操作将永久删除该字典项, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                lockScroll: false,
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
            })
                .then(async () => {
                    this.visible = false
                    const res = await deleteDictDetail({ ID: row.ID })
                    if (res.code == 0) {
                        this.$message({
                            type: 'success',
                            message: '删除成功',
                        })
                        this.getTableData()
                    }
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                    })
                })
        },
        async enterDialog() {
            this.formData.sysDictionaryID = Number(this.$route.params.id)
            this.$refs['elForm'].validate(async (valid) => {
                if (!valid) return
                let res
                switch (this.type) {
                    case 'create':
                        res = await createDictDetail(this.formData)
                        break
                    case 'update':
                        res = await updateDictDetail(this.formData)
                        break
                    default:
                        res = await createDictDetail(this.formData)
                        break
                }
                if (res.code == 0) {
                    this.$message({
                        type: 'success',
                        message: '字典变更成功！',
                    })
                    this.closeDialog()
                    this.getTableData()
                }
            })
        },
        openDialog() {
            this.type = 'create'
            this.dialogFormVisible = true
        },
    },
    created() {
        this.searchInfo.sysDictionaryID = this.$route.params.id
        this.getTableData()
    },
}
</script>
