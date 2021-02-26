<template>
  <section id="menuOptions">
    <the-option v-for="option in options" :key="option" :url="option.url">
      <template v-slot:default>
        {{ option.name }}
      </template>
    </the-option>
  </section>
</template>

<script>
import TheOption from "./TheOption.vue";
export default {
  components: { TheOption },
  data: () => ({
    options: [
      {
        name: "TheGameDices",
        url: "/TheGameDices",
      },
      {
        name: "TheDevTest",
        url: "/TheDevTest",
      },
      {
        name: "Messenger",
        url: "/TheMessenger",
      },
      {
        name: "4",
        url: "/TheGameDices",
      },
      {
        name: "5",
        url: "/TheGameDices",
      },
      {
        name: "6",
        url: "/TheGameDices",
      },
    ],
  }),
};
</script>

<style scoped>
#menuOptions {
  width: 100%;
  height: 600px;
  display: grid;
  grid-template: auto auto / 1fr 1fr 1fr;
  padding: 60px 5% 0 5%;
  grid-gap: 5%;
}
</style>
