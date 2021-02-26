<template>
  <div id="messagesWindowWrap">
    <the-message v-for="(message, i) in messages[currentTab-1].msgs" :key="message+i">
      {{ message }}
    </the-message>
  </div>
</template>

<script>
import TheMessage from "./TheMessage.vue";
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      localMessages: 0,
    };
  },
  components: {
    TheMessage,
  },
  computed: {
    ...mapGetters('messenger', ['messages', 'currentTab'])
  },
};
</script>

<style>
#messagesWindowWrap {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding: 10px;
}
</style>
