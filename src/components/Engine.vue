<template>
    <div class="engine-template">
        <h3>{{this.name}}</h3>
        <div class="button-container">
            <b-button :size="'small'" :variant="this.buttonVariant" @click="engineStatusChangeEvent">
                {{this.buttonText}}
            </b-button>
        </div>
        <b-collapse class="mt-2" v-model="visible" id="engine-controls">
            <div>
                <span>Value: </span>
                <span>{{this.engine.Value}}</span>
            </div>
            <div>
                <b-progress class="mt-1" :max="100">
                <b-progress-bar :value="this.engine.Value*(6/10)" label="" variant="success"></b-progress-bar>
                <b-progress-bar :value="this.engine.Value*(2.5/10)" label="" variant="warning"></b-progress-bar>
                <b-progress-bar :value="this.engine.Value*(1.5/10)" label="" variant="danger"></b-progress-bar>
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
            Status: '',
            Value: 0
        },
        messageService: {
            update: ''
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
            if(this.engine.Status !== 0) {
                this.engine.Status = 0;
            } else {
                this.engine.Status = 3;
            }
            
        }
    },
    watch: {
        'engine.Status': {
            handler: function () {
                switch(this.engine.Status) {
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
        },
        'engine.value': {
            handler: function () {
                this.update();
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

        padding-left: 4px;
        padding-right: 4px;

        background-color: $link-selected-background;
        border: 1px solid black;

        .button-container {
            width: 100%;
            text-align: center;
        }
    }
</style>
