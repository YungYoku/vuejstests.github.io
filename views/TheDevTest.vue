<template>
  <the-header></the-header>
  <dev-test></dev-test>
</template>

<script>
import DevTest from '../components/DevTest.vue';
import TheHeader from "../components/TheHeader.vue";
export default {
  components: {
    TheHeader,
    DevTest,
  },
};
</script>

<style>
</style>