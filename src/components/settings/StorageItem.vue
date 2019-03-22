<template>
    <div class="item-header"  @click="open = !open">
        <span>{{item.key}}</span>
        <div v-if="open">
            <div v-for="(value, key) in item.value" :key="key">
                {{key}} {{value}}
            </div>
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

        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .item-header {
        text-transform: uppercase;
        cursor: pointer;

        span {
            width: 100%;

            &:hover {
            background-color: $link-selected;
            }   
        }
    }
</style>
