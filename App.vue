<template>
  <router-view></router-view>
</template>

<script>
import TheMenu from "./views/TheMenu.vue";

export default {
  components: {TheMenu},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  user-select: none;
  box-sizing: border-box;
  font-family: "Truculenta", sans-serif;
}

body {
  background-color: #372549;
}
</style>
