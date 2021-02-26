export default {
  namespaced: true,
  state() {
    return {
      score: 0,
      previousDice: 0,
      timeToBreak: 0,
      firstPlay: false,
      dicesAvailability: [
        {
          id: "1",
          amount: 0,
          isItGreen: false,
          lifeTime: 0
        },
        {
          id: "2",
          amount: 0,
          isItGreen: false,
          lifeTime: 0
        },
        {
          id: "3",
          amount: 0,
          isItGreen: false,
          lifeTime: 0
        },
        {
          id: "4",
          amount: 0,
          isItGreen: false,
          lifeTime: 0
        },
        {
          id: "5",
          amount: 0,
          isItGreen: false,
          lifeTime: 0
        },
        {
          id: "6",
          amount: 0,
          isItGreen: false,
          lifeTime: 0
        }
      ]
    };
  },
  mutations: {
    scorePlus(state, payload) {
      if (!state.previousDice) {
        return;
      }
      if (state.dicesAvailability[payload].isItGreen === true) {
        state.score += state.dicesAvailability[state.previousDice - 1].amount;
        state.dicesAvailability[state.previousDice - 1].isItGreen = false;
      }
    }
  },
  getters: {
    score(state) {
      return state.score;
    },
    dicesAvailability(state) {
      return state.dicesAvailability;
    }
  },
  actions: {
    circlesSpawn(context, payload = "gameRunning") {
      if (context.state.firstPlay && payload === "click") {
        return;
      }
      if (payload === "click") {
        context.state.firstPlay = true;
      }

      for (let i = 0; i < 6; i++) {
        context.state.dicesAvailability[i].amount =
          Math.floor(Math.random() * 6) + 1;
      }
      context.state.timeToBreak = 100 * Math.floor(Math.random() * 10 + 10);

      return new Promise(function(resolve) {
        if (context.state.previousDice === 0) {
          context.state.previousDice = Math.floor(Math.random() * 6) + 1;
          context.state.dicesAvailability[
            context.state.previousDice - 1
          ].isItGreen = true;
          resolve();
        } else {
          context.state.dicesAvailability[
            context.state.previousDice - 1
          ].isItGreen = false;
          context.state.previousDice = Math.floor(Math.random() * 6) + 1;

          setTimeout(() => {
            context.state.dicesAvailability[
              context.state.previousDice - 1
            ].isItGreen = true;
            resolve();
          }, 100 * Math.floor(Math.random() * 4 + 1));
        }
      }).then(() => {
        setTimeout(() => {
          context.state.dicesAvailability[
            context.state.previousDice - 1
          ].isItGreen = false;

          this.dispatch("dices/circlesSpawn");
        }, context.state.timeToBreak);
      });
    }
  }
};
