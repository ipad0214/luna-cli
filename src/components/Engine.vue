<template>
    <div class="engine-template">
        <h3>{{this.data.name}}</h3>
        <div>
            <b-button :size="'sm'" :variant="changeButtonBackgroundColor">
                ONLINE
            </b-button>
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
