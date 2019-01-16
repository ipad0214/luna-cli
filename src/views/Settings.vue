<template>
  <div class="settings">
    <div class="websocket">
      <h3>Websocket</h3>
      <span>IP:</span>
      <b-form-input v-model.lazy="websocketService.ip"
                type="text"
                placeholder="IP"></b-form-input>
      <span>Port:</span>
      <b-form-input v-model.lazy="websocketService.port"
        type="text"
        placeholder="Port"></b-form-input>
      <div class="controls">
        <b-form-checkbox id="autoReconnect"
                  v-model="checked"
                  value="true"
                  unchecked-value="false">
        AutoReconnect
        </b-form-checkbox>
        <b-button :size="'small'" :variant="'primary'" @click="saveAndConnect">
          Save & Connect
        </b-button>
        <pre> {{ $data }} </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  props: ['websocketService'],
  methods: {
    saveAndConnect: function () {
      this.websocketService.connect();
    }
  },
  data: function () {
    return {
      checked: false,
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/colors.scss';

.settings {
  color: $font-color;

  .websocket {
    margin: 1rem 0 0 1rem;
    width: 20rem;
    height: 10rem;

    .controls {
      height: 100%;
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
