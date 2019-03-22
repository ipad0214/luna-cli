<template>
    <div class="storagemanager-settings">
        <h3>Storage Manager</h3>
        <div>
            <div v-for="item in items" :key="item.key">
                <StorageItem :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import StorageItem from '@/components/settings/StorageItem'

export default {
    name: 'storagemanager',
    components: {
        StorageItem
    },
    props: {

    },
    data: function() {
        return {
            items: []
        }
    },
    methods: {

    },
    mounted: function () {
        for(let i = 0;  localStorage.length > i; i++) {
            try {
                let item = localStorage.getItem(localStorage.key(i));
                console.log(item);
                
                this.items.push({
                    key: localStorage.key(i),
                    value: JSON.parse(item)
                });
            } catch (e) {
                console.log("Error while parsing: " + localStorage.key(i));
            }
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .item-header {
        text-transform: uppercase;
    }
</style>
