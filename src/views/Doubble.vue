<template>
  <div class="wrapper">
    <div class="trainer-body">
      <div
        class="trainer-text"
        :class="letter.index<inputIndicator+1?letter.checked:letter.passed"
        v-for="letter in trainerSplitText"
        :key="letter.index"
        @click="indicatorChoise(letter.index)"
      >
        <pre>{{ letter.tittle }}<span :class="inputIndicator==letter.index?'indicator':''"></span></pre>
      </div>
    </div>
    <div>
      <p>{{inputLabel}}</p>
      <p>Length: {{inputLabel.length}}</p>
      <p>Indicator: {{inputIndicator}}</p>
    </div>
    <appKeyboard @emmited="em" class="keyboard"></appKeyboard>
    <p>{{errorsCount}}</p>
    <p>Indicator: {{inputIndicator}}</p>
  </div>
</template>

<script>
import Keyboard from "../components/Keyboard.vue";

export default {
  components: {
    appKeyboard: Keyboard
  },
  data() {
    return {
      inputLabel: [],
      inputIndicator: -1,
      errorsCount: 0,
      textForTraine: `The merge strategy receives the value of
      that option defined on the parent and child
      instances as the first and second arguments,
      respectively. The context Vue instance is 
      passed as the third argument.`,
      trainerSplitText: []
    };
  },
  methods: {
    indicatorChoise(index) {
      if (index >= this.inputLabel.length) {
        this.inputIndicator = this.inputLabel.length - 1;
      } else {
        this.inputIndicator = index - 1;
      }
    },
    inputLetter(letter) {
      if (letter != this.trainerSplitText[this.inputIndicator + 1].tittle) {
        this.errorsCount++;
      }
      this.inputLabel.splice(this.inputIndicator + 1, 0, letter);
      this.inputIndicator++;
    },
    em(letter) {
      // console.log(letter);

      if (letter === "Backspace") {
        if (this.inputIndicator !== -1) {
          this.inputLabel.splice(this.inputIndicator, 1);
          this.inputIndicator--;
        }
      } else if (letter === "Enter") {
        this.inputLetter("\n");
      } else if (letter === "Tab") {
        this.inputLetter(" ");
        this.inputLetter(" ");
      } else if (letter === "Space") {
        this.inputLetter(" ");
      } else {
        this.inputLetter(letter);
      }
    },

    clearArea() {
      this.inputLabel = "";
    }
  },
  watch: {
    inputLabel() {
      for (let i = 0; i < this.trainerSplitText.length; i++) {
        if (i < this.inputLabel.length) {
          if (this.inputLabel[i] === this.trainerSplitText[i].tittle) {
            this.trainerSplitText[i].checked = "letter-success";
            this.trainerSplitText[i].passed = "letter-success__passed";
          } else {
            this.trainerSplitText[i].checked = "letter-error";
            this.trainerSplitText[i].passed = "letter-error__passed";
          }
        } else {
          this.trainerSplitText[i].checked = "";
          this.trainerSplitText[i].passed = "";
        }
      }
    }
  },
  computed: {},
  created() {
    let result = [],
      index = 0;
    for (let letter of this.textForTraine) {
      result.push({
        tittle: letter,
        index: index++,
        checked: "",
        passed: ""
      });
    }
    result.lengt !== 0
      ? (this.trainerSplitText = result)
      : (this.trainerSplitText = "No text".split(""));
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
.success {
  color: green;
}
.wrapper {
  height: 100%;
  width: 95%;
  margin: 0 auto;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6vh;
}
.letter-error {
  background-color: #f500356c;
}
.letter-error__passed {
  color: #f500356c;
}

.letter-success {
  background-color: #1ff04252;
}
.letter-success__passed {
  color: #1ff0429c;
}

.trainer-body {
  width: 80%;
  margin: 0 auto;
  font-size: 1.7rem;
  font-weight: bold;
  line-height: 1.6;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .trainer-text {
    pre {
      font-family: "Arial Narrow", monospace;
    }
  }
}

.indicator {
  z-index: 1;
  position: relative;
  animation: indicator 1.2s infinite 0.9s;
  &::after {
    content: "";

    position: absolute;
    width: 1rem;
    height: 5px;
    bottom: -7px;
    left: -1px;
    background-color: #3f3f3fc4;
  }
}
.keyboard {
  margin-bottom: 40px;
}

@keyframes indicator {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
@keyframes letters {
  0% {
    top: -30px;
    opacity: 0;
  }
  20% {
    opacity: 0.3;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
</style>
