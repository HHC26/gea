<template>
    <el-popover placement="bottom-end" width="400" trigger="click">
        123
        <el-button slot="reference" class="actions-button">
            <el-badge :value="12">
                <i class="el-icon-message-solid" />
            </el-badge>
        </el-button>
    </el-popover>
</template>

<script>
export default {
    name: 'Notice',
}
</script>
