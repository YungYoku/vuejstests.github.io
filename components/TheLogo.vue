<template>
  <router-link to="/">
    <h1>G</h1>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
  position: relative;
  font-size: 40px;
  cursor: pointer;
  color: white;
}
h1::after {
  content: "G";
  color: #774c60;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
}
h1:hover::after {
  transition: all 0.3s;
  height: 100%;
}
</style>