<template>
    <component :is="chooseComponent" :addRoutesItem="addRoutesItem" v-if="!addRoutesItem.hidden">
        <template v-if="addRoutesItem.children && addRoutesItem.children.length">
            <SideMenuItem :key="item.name" :addRoutesItem="item" v-for="item in addRoutesItem.children" />
        </template>
    </component>
</template>

<script>
import ItemSingle from './ItemSingle'
import ItemMultiple from './ItemMultiple'

export default {
    name: 'SideMenuItem',
    props: {
        addRoutesItem: {
            default: function () {
                return null
            },
            type: Object,
        },
    },
    components: {
        ItemSingle,
        ItemMultiple,
    },
    computed: {
        chooseComponent() {
            if (this.addRoutesItem.children && this.addRoutesItem.children.filter((item) => !item.hidden).length) {
                return 'ItemMultiple'
            } else {
                return 'ItemSingle'
            }
        },
    },
}
</script>