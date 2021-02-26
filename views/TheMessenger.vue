<template>
  <the-header></the-header>
  <messages-section></messages-section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import MessagesSection from "@/components/messenger/MessagesSection";
export default {
  components: {
    MessagesSection,
    TheHeader,
  },
};
</script>

<style>
</style>
