<template>
  <header>
    <the-logo></the-logo>
  </header>
</template>

<script>
import TheLogo from "./TheLogo.vue";
export default {
  components: { TheLogo },
};
</script>

<style scoped>
header {
  width: 100%;
  min-height: 50px;
  background-color: #1A1423;
  box-shadow: 0 0 5px 1px #1A1423;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>