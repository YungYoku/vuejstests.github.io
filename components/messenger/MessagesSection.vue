<template>
  <section>
    <messages-tabs></messages-tabs>
    <messages-window></messages-window>
  </section>
</template>

<script>
import MessagesTabs from "./MessagesTabs.vue";
import MessagesWindow from "./MessagesWindow.vue";
export default {
  components: { MessagesTabs, MessagesWindow },
};
</script>

<style scoped>
section {
  border: 3px solid #1a1423;
  border-radius: 5px;
  width: 80%;
  height: 700px;
  margin: 54px 10% 0 10%;
  display: grid;
  grid-template: 100% / 1fr 6fr;
  background-color: #1c1c1c;
}
</style>
