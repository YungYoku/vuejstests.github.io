<template>
  <router-link :to="url">
    <div id="wrap">
      <slot name="default"> </slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['url']
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  background-color: #975db7;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}
#wrap:hover {
  transition: all 0.2s;
  transform: scale(1.05);
  box-shadow: 0 0 10px 2px #1a1423;
}
#wrap {
  color: #551a8b;
}
</style>