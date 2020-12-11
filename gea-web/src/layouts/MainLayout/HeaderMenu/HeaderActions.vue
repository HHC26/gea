<template>
    <div class="actions">
        <search />
        <github />
        <screenfull />
        <notice />
        <user />
        <setting />
    </div>
</template>

<script>
import Search from './Search'
import Github from './Github'
import Screenfull from './Screenfull'
import Notice from './Notice'
import User from './User'
import Setting from './Setting'

export default {
    name: 'HeaderActions',
    components: {
        Search,
        Github,
        Screenfull,
        Notice,
        User,
        Setting,
    },
}
</script>

<style lang="scss" scoped>
.actions {
    margin-right: 20px;
    display: flex;
    align-items: center;
}
</style>