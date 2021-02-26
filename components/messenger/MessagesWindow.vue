<template>
  <div id="wrap">
    <messages-window-display
      ref="messagesDisplay"
      :messages="Number(messagesAmount)"
    ></messages-window-display>
    <messages-window-input @messageSend="messageAdd"></messages-window-input>
  </div>
</template>

<script>
import MessagesWindowDisplay from "./MessagesWindowDisplay.vue";
import MessagesWindowInput from "./MessagesWindowInput.vue";
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      messagesAmount: 0,
      currentMessage: "",
    };
  },
  emits: {
    "message-send": null,
  },
  methods: {
    messageAdd(message) {
      if(message === '') {
        return
      }
      this.messagesAmount++
      this.messagePush(message)
    },
    ...mapMutations({
      messagePush: 'messenger/messagePush'
    })
  },
  components: { MessagesWindowInput, MessagesWindowDisplay },
};
</script>

<style scoped>
#wrap {
  display: grid;
  grid-template: 644px 56px / 1fr;
}
</style>
