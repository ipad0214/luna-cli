<template>
  <div class="settings">
    <h3>SETTINGS</h3>
    <b-form-input v-model="websocketService.ip"
              type="text"
              placeholder="IP"></b-form-input>
    <b-form-input v-model="websocketService.port"
      type="text"
      placeholder="Port"></b-form-input>
    <b-form-checkbox id="autoReconnect"
                v-model="checked"
                value="true"
                unchecked-value="false">
    AutoReconnect
    </b-form-checkbox>
    <b-button :size="'small'" :variant="'primary'" @click="saveAndConnect">
      Connect
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  props: ['websocketService'],
  methods: {
    saveAndConnect: function () {
      this.websocketService._onOpen();
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
}
</style>
