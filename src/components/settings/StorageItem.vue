<template>
    <div class="item-header"  @click="deleteItem">
        <span>{{item.key}}</span>
        <div v-if="open">
            hello world
        </div>
        <div v-if="edit">

        </div>
    </div>      
</template>

<script>
export default {
    name: 'storageitem',
    props: ['item'],
    data: function () {
        return {
            open: false,
            edit: false,
        }
    },
    methods: {
        deleteItem() {
            open != open;
            console.log('delete storage item');
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .item-header {
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            background-color: $link-selected;
        }
    }
</style>
