<template>
    <div class="engine-template">
        <h3>{{this.data.name}}</h3>
        <div>
            <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
                <b-dropdown-item>Offline</b-dropdown-item>
                <b-dropdown-item>Error</b-dropdown-item>
                <b-dropdown-item>Standby</b-dropdown-item>
                <b-dropdown-item>Online</b-dropdown-item>
            </b-dropdown>
        </div>
        <div>
            <span>Value:</span><span>{{this.data.value}}</span>
        </div>
        <div>
            <span>Status:</span><span>{{this.data.status}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'engine',
    props: ['data'],
    data: () => {
        return {
            modalShow: false
        }
    },
    computed: {
        changeButtonBackgroundColor: function () {
            switch(this.data.status) {
                case 0:
                    return 'danger';
                case 1: 
                    return 'warning';
                case 2:
                    return 'primary';
                case 3:
                    return 'succes'
            }
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/colors.scss';

    .engine-template {
        height: 10rem; 
        width: 10rem;

        background-color: $link-selected-background;
        border: 1px solid black;
    }
</style>
