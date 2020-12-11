<template>
    <div>
        <tabs class="tabs-container" />
        <pages class="pages-container" />
        <page-footer class="footer-container" />
    </div>
</template>

<script>
import Tabs from './Tabs'
import Pages from './Pages'
import PageFooter from './PageFooter'
export default {
    name: 'PageView',
    components: {
        Tabs,
        Pages,
        PageFooter,
    },
}
</script>
