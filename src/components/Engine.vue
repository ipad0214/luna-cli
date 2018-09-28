<template>
    <div class="engine-template">
        <h3>{{this.name}}</h3>
        <div>
            <b-button :size="'small'" :variant="this.buttonVariant" @click="engineStatusChangeEvent">
                {{this.buttonText}}
            </b-button>
        </div>
        <div>
            <span>Value:</span><span>{{this.engine.value}}</span>
        </div>
        <div>
            <span>Status:</span><span>{{this.engine.status}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'engine',
    props: {
        engineData: {
            status: '',
            value: 0
        },
        name: ''
    },
    data: function() {
        return {
            engine: this.engineData,
            buttonText: 'OFFLINE',
            buttonVariant: 'danger',
        }
    },
    methods: {
        engineStatusChangeEvent: function () {
            this.engine.status = 3;
        }
    },
    watch: {
        'engine.status': {
            handler: function () {
                console.log("changeColor");
                switch(this.engine.status) {
                    case 0:
                        this.buttonText = 'OFFLINE'
                        this.buttonVariant = 'danger'
                        return;
                    case 1: 
                        this.buttonText = 'IDLE' 
                        this.buttonVariant = 'warning'
                        return;
                    case 2:
                        this.buttonText = 'OFFLINE'
                        this.buttonVariant = 'danger'
                        return 'primary';
                    case 3:
                        this.buttonText = 'ONLINE'
                        this.buttonVariant = 'success'
                        return 'succes'
                }
            },
            deep: true
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
