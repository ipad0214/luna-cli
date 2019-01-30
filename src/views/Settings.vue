<template>
  <div class="settings">
    <div class="websocket">
      <h3>Websocket</h3>
      <span>IP:</span>
      <b-form-input v-model="ip"
                type="text"
                placeholder="IP"></b-form-input>
      <span>Port:</span>
      <b-form-input v-model="port"
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
          Connect
        </b-button>
        <b-button :size="'small'" :variant="'primary'" @click="saveCredentials">
          Save Credentials to Storeage
        </b-button>
        <b-button :size="'small'" :variant="'primary'" @click="testNotify">
          Test Notification
        </b-button>
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
    },
    saveCredentials: function () {
      let credentialsObj = {
        ip: this.websocketService.ip,
        port: this.websocketService.port,
        autoReconnect: this.checked
      }

      localStorage.setItem("credentials", JSON.stringify(credentialsObj));
    },
    testNotify: function () {
      let title = "this is a test";
      let text = "this is also a test";
      this.$notification.addNotififcation({
        title,
        text
      });
    }
  },
  mounted: function() {
    // load credentials if exists
    let credentials = JSON.parse(localStorage.getItem("credentials"));
    if(credentials === null || credentials === undefined) {
      return;
    }

    this.ip = credentials.ip;
    this.port = credentials.port;
    this.checked = credentials.autoReconnect;
  },
  watch: {
    ip: function (value) {
      this.websocketService.ip = value;
    },
    port: function (value) {
      this.websocketService.port = value;
    }
  },
  data: function () {
    return {
      checked: false,
      ip: '',
      port: ''
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
