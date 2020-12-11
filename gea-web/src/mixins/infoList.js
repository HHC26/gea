import { getDict } from "@/utils/dict";
export default {
    data() {
        return {
            loading: false,
            page: 1,
            total: 10,
            pageSize: 10,
            pageSizes: [10, 30, 50, 100],
            pageStyle: {
                float: 'right',
                padding: '20px'
            },
            pageLayout: "total, sizes, prev, pager, next, jumper",
            tableData: [],
            searchInfo: {}
        }
    },
    methods: {
        filterDict(value, type) {
            const rowLabel = this[type + "Options"] && this[type + "Options"].filter(item => item.value == value)
            return rowLabel && rowLabel[0] && rowLabel[0].label
        },
        async getDict(type) {
            const dicts = await getDict(type)
            this[type + "Options"] = dicts
            return dicts
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.getTableData()
        },
        handleCurrentChange(val) {
            this.page = val
            this.getTableData()
        },
        async getTableData(page = this.page, pageSize = this.pageSize) {
            this.loading = true
            const table = await this.listApi({ page, pageSize, ...this.searchInfo })
            if (table.code == 0) {
                this.tableData = table.data.list
                this.total = table.data.total
                this.page = table.data.page
                this.pageSize = table.data.pageSize
                this.loading = false
            }
        }
    }
}