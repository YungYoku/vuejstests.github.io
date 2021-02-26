<template>
  <div
    class="dice"
    :style="{
      backgroundColor: isItGreen ? 'green' : '#b75d69',
    }"
    ref="diceClean"
  >
    <div
      class="circle"
      v-for="circle in circlesAvailability"
      :key="circle"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["circlesAvailability", "isItGreen", "lifetime"],
  computed() {
    if (this.isItGreen === true) {
      setTimeout(() => {
        this.$refs.diceClean.style.backgroundColor = "#b75d69";
      }, this.lifetime);
    }
  },
  mounted() {
    this.$refs.diceClean.addEventListener("click", () => {
      this.$refs.diceClean.style.transform = "scale(1.1)";
      this.$refs.diceClean.style.boxShadow = "0 0 4px 0.5px black";
      setTimeout(() => {
        this.$refs.diceClean.style.transform = "none";
        this.$refs.diceClean.style.boxShadow = "none";
      }, 100);
    });
  },
};
</script>

<style scoped>
.dice {
  width: 100px;
  height: 100px;
  background-color: #b75d69;
  border-radius: 5px;
  display: grid;
  grid-template: auto auto / 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 5px;
  transition: all 0.1s;
}
.dice:focus {
  transform: scale(1.1);
}
.circle {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
}
</style>