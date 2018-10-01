<template>
    <div class="engine-template">
        <h3>{{this.name}}</h3>
        <div>
            <b-button :size="'small'" :variant="this.buttonVariant" @click="engineStatusChangeEvent">
                {{this.buttonText}}
            </b-button>
        </div>
        <b-collapse class="mt-2" v-model="visible" id="engine-controls">
            <div>
                <span>Value</span>
            </div>
            <div>
                <b-progress class="mt-1" :max="100" show-value>
                <b-progress-bar :value="this.engine.value*(6/10)" variant="success"></b-progress-bar>
                <b-progress-bar :value="this.engine.value*(2.5/10)" variant="warning"></b-progress-bar>
                <b-progress-bar :value="this.engine.value*(1.5/10)" variant="danger"></b-progress-bar>
                </b-progress>
            </div>
        </b-collapse>
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
            visible: false
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
                switch(this.engine.status) {
                    case 1: 
                        this.buttonText = 'IDLE' 
                        this.buttonVariant = 'warning'
                        this.visible = true
                        break;
                    case 2:
                        this.buttonText = 'OFFLINE'
                        this.buttonVariant = 'danger'
                        this.visible = true
                        break;
                    case 3:
                        this.buttonText = 'ONLINE'
                        this.buttonVariant = 'success'
                        this.visible = true
                        break;
                    case 0:
                    default:
                        this.buttonText = 'OFFLINE'
                        this.buttonVariant = 'danger'
                        this.visible = false
                        break;
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
