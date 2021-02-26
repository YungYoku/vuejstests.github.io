<template>
  <div id="wrap">
    <h2>Developer Test</h2>
    <form action="" id="devTestForm" @submit.prevent="">
      <label for="q1" class="questionLabel">
        Enter your name
        <input
            type="text"
            id="q1"
            class="question"
            placeholder="Type here"
            v-model.trim="name"
        />
      </label>

      <label for="q2" class="questionLabel">
        Enter your email
        <input
            type="text"
            id="q2"
            class="question"
            placeholder="Type here"
            v-model.trim="email"
        />
      </label>

      <div id="cardInputWrap">
        <label for="q3" class="questionLabel">
          Enter your card number
          <input
              type="text"
              id="q3"
              class="question"
              placeholder="Type here"
              v-model.number.trim="card"
          />
        </label>
        <h3>{{ cardString }}</h3>
      </div>

      <button id="submitBtn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    card: "",
    cardString: "",
  }),
  watch: {
    card() {
      this.cardString = this.card
    }
  }
};
</script>

<style scoped>
#wrap {
  width: 80%;
  margin: 60px 10% 0 10%;
  background-color: rgb(255, 231, 231);
  border-radius: 10px;
  padding: 30px 0;
}

#wrap h2 {
  text-align: center;
  font-size: 50px;
  color: #372549;
  margin-bottom: 30px;
}

#devTestForm {
  padding: 0 5%;
}

.questionLabel {
  width: 100%;
  padding: 10px 0;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.question {
  border: 2px solid #372549;
  font-size: 20px;
  padding: 10px;
  margin-left: 10px;
  user-select: text;
}

#submitBtn {
  border: 2px solid #372549;
  background-color: white;
  height: 52px;
  min-width: 30%;
  margin: 30px 35% 0 35%;
  padding: 10px;
  font-size: 20px;
}

#cardInputWrap {
  position: relative;
}

#cardInputWrap input {
  font-size: 0;
  height: 52px;
  width: 30%;
}

#cardInputWrap h3 {
  top: 22px;
  left: 281px;
  font-size: 20px;
  position: absolute;
  font-weight: 400;
  user-select: text;
  cursor: text;
}

#cardInputWrap h3:after {
  content: '|';
  font-size: 30px;
  font-weight: 100;
  position: absolute;
  top: -10px;
  animation: symbAnim 0.5s infinite alternate;
}

@keyframes symbAnim {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

label:nth-child(3) input {
  height: 52px;
  width: 235px;
  font-size: 0;
}
</style>
