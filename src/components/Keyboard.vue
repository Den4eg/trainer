<template>
  <div class="keyboard-wrapper">
    <button-block :buuttonsArr="mainKeys" @clickMethodEvent="clickMethodListener" class="primary" />
    <!-- Arrows block -->
    <button-block :buuttonsArr="arrowsBlock" class="arrows"></button-block>

    <!-- Numlock block -->
    <button-block :buuttonsArr="numBlock" class="numpad"></button-block>
    <div id="capsed">
      <input id="capsInput" type="text" v-model="capsed" />
    </div>
  </div>
</template>

<script>
import keyButton from "../components/keyButton.vue";
import {
  mainKeys,
  language,
  arrowsBlock,
  numBlock,
  serviceKeys,
  shiftOnlyKeys
} from "../assets/keyboards/eng.json";

export default {
  components: {
    buttonBlock: keyButton
  },
  data() {
    return {
      capsStatus: 0,
      shiftStatus: 0,
      shiftOnlyKeys: shiftOnlyKeys,
      lang: language,
      mainKeys: mainKeys,
      arrowsBlock: arrowsBlock,
      numStatus: 0,
      numBlock: numBlock,
      serviceKeys: serviceKeys
    };
  },
  methods: {
    clickMethodListener(letter) {
      this.$emit("emmited", letter);
    },
    keydownEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(e);

      if (e.key === "Shift") {
        this.shiftStatus = 1;
      }
      if (e.key == "NumLock") this.numStatus = +!this.numStatus;
      if (e.key == "CapsLock") this.capsStatus = +!this.capsStatus;
      //================== Location arrays =====================
      let currentLocation = null;
      let arrowsLocation = [];
      if (e.location === 3 || e.key === "NumLock") {
        currentLocation = this.numBlock;
      } else {
        currentLocation = this.mainKeys;
      }
      //================== Location arrays =====================

      // console.log(e.key, " down");

      currentLocation.forEach(letter => {
        if (letter.location == 1) {
          if (letter.onlyShift) {
            letter.shiftStatus = this.shiftStatus;
          } else {
            letter.shiftStatus = this.upperCaseStatus;
          }
        }

        if (letter.location == 3) {
          letter.shiftStatus = this.numStatus;
        }

        if (
          (letter.value == e.key && !letter.shiftStatus) ||
          (letter.shiftValue == e.key && letter.shiftStatus)
        ) {
          if (letter.value === "NumLock")
            letter.activeClass = this.numStatus ? "key-active" : "";
          if (letter.value === "CapsLock")
            letter.activeClass = this.capsStatus ? "key-active" : "";
          if (e.location == 1 && !letter.left) {
            letter.activeClass = "";
          } else if (e.location == 2 && letter.left) {
            letter.activeClass = "";
          } else {
            letter.activeClass = "key-active";
          }

          if (e.keyCode == 13) {
            this.clickMethodListener("\n");
          } else if (e.keyCode == 9) {
            this.clickMethodListener("\t");
          } else {
            if (!letter.service) this.clickMethodListener(e.key);
          }
        }
      });
    },

    keyupEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      //================== Location arrays =====================
      let currentLocation = null;
      let arrowsLocation = [];
      if (e.location === 3 || e.key === "NumLock") {
        currentLocation = this.numBlock;
      } else {
        currentLocation = this.mainKeys;
      }
      //================== Location arrays =====================
      // console.log(e.key, " up");

      if (e.key === "Shift") {
        this.shiftStatus = 0;
      }
      currentLocation.forEach(letter => {
        if (letter.location == 1) {
          if (letter.onlyShift) {
            letter.shiftStatus = this.shiftStatus;
          } else {
            letter.shiftStatus = this.upperCaseStatus;
          }
        }

        if (letter.location == 3) {
          letter.shiftStatus = this.numStatus;
        }

        if (
          (letter.value == e.key && !letter.shiftStatus) ||
          (letter.shiftValue == e.key && letter.shiftStatus)
        ) {
          letter.activeClass = "";
          if (letter.value === "NumLock")
            letter.activeClass = this.numStatus ? "key-active" : "";
          if (letter.value === "CapsLock")
            letter.activeClass = this.capsStatus ? "key-active" : "";
        }
      });
    }
  },
  computed: {
    upperCaseStatus() {
      if (!this.shiftStatus) {
        return this.capsStatus;
      } else {
        return +!this.capsStatus;
      }
    }
  },
  created() {
    document.addEventListener("keydown", this.keydownEvent);
    document.addEventListener("keyup", this.keyupEvent);
  },

  mounted() {}
};
</script>

<style lang="scss" scoped>
.keyboard-wrapper {
  width: fit-content;
  margin: 0 auto;
  background-color: #ebebeb;
  padding: 2px;
  display: grid;
  grid-gap: 10px;
}

.numpad {
  grid-template-columns: repeat(4, 3rem);
  grid-template-rows: repeat(5, 1fr);
}

.arrows {
  grid-template-columns: repeat(3, 3rem);
  grid-template-rows: repeat(5, 1fr);
}

.primary {
  grid-template-columns: repeat(28, 1.3rem);
  grid-template-rows: repeat(5, 1fr);
}

// #capsed {
//   display: none;
// }

@media (min-width: 1141px) {
  .keyboard-wrapper {
    grid-template-columns: 4.5fr auto auto;
    max-width: max-content;
    margin: 0 auto;
  }
}

@media (min-width: 979px) and (max-width: 1140px) {
  .keyboard-wrapper {
    grid-template-columns: 1fr auto;
  }
  .arrows {
    display: none;
  }
  // .numpad {
  //   display: none;
  // }
}

@media (min-width: 768px) and (max-width: 978px) {
  .keyboard-wrapper {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  .arrows {
    display: none;
  }
  .numpad {
    display: none;
  }
}

@media (max-width: 767px) {
  .keyboard-wrapper {
    padding: 6px;
    grid-template-columns: 1fr;
  }

  .mainkeys {
    display: none;
  }

  .arrows {
    display: none;
  }
  .numpad {
    display: none;
  }
}
</style>