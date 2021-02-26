<template>
  <h2>Total score: {{ score }}</h2>

  <div id="dicesDesk" @click="circlesSpawn('click')">
    <the-dice
        v-for="(dice, idx) in dicesAvailability"
        :key="dice.id"
        :circles-availability="dice.amount"
        @click="scorePlus(idx)"
        :is-it-green="dice.isItGreen"
        :lifetime="dice.lifeTime"
        ref="dice.id"
    ></the-dice>
  </div>
</template>

<script>
import TheDice from "./TheDice.vue";
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters('dices', ['score', 'dicesAvailability']),
  },
  methods: {
    ...mapMutations({
      scorePlus: 'dices/scorePlus'
    }),
    ...mapActions({
      circlesSpawn: 'dices/circlesSpawn',
    })
  },
  components: {TheDice}
};
</script>

<style scoped>
#dicesDesk {
  display: grid;
  width: 100%;
  height: 700px;
  grid-template: auto auto / 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 60px 5% 0 5%;
  grid-gap: 5%;
}

h2 {
  font-size: 40px;
  color: white;
  text-align: center;
  margin-top: 60px;
}
</style>
