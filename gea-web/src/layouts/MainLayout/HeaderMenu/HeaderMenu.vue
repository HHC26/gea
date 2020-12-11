<template>
    <div class="headerMenu">
        <header-title />
        <header-actions />
    </div>
</template>

<script>
import HeaderTitle from './HeaderTitle'
import HeaderActions from './HeaderActions'

export default {
    name: 'HeaderMenu',
    components: {
        HeaderTitle,
        HeaderActions,
    },
}
</script>

<style lang="scss" scoped>
.headerMenu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>