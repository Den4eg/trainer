<template>
  <div class="keyboard-wrapper">
    <button-block :buuttonsArr="mainKeys" @clickMethodEvent="clickMethodListener" class="primary" />
  </div>
</template>

<script>
import keyButton from "../components/keyButton.vue";
import {
  mainKeys,
  language,
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
      // console.log(e);

      if (e.key === "Shift") {
        this.shiftStatus = 1;
      }
      if (e.key == "CapsLock") this.capsStatus = +!this.capsStatus;

      // console.log(e.key, " down");

      this.mainKeys.forEach(letter => {
        if (letter.onlyShift) {
          letter.shiftStatus = this.shiftStatus;
        } else {
          letter.shiftStatus = this.upperCaseStatus;
        }

        if (letter.keyCode == e.keyCode) {
          if (letter.title === "Caps")
            letter.activeClass = this.capsStatus
              ? "key-active"
              : delete letter.activeClass;
          if (e.location == 1 && !letter.left) {
            letter.activeClass = "";
          } else if (e.location == 2 && letter.left) {
            letter.activeClass = "";
          } else {
            letter.activeClass = "key-active";
          }

          if (e.keyCode == 13) {
            this.clickMethodListener("\n");
            return;
          } else if (e.keyCode == 9) {
            this.clickMethodListener("\t");
            return;
          } else {
            if (!letter.service) this.clickMethodListener(e.key);
          }
        }
      });
    },

    keyupEvent(e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.key === "Shift") {
        this.shiftStatus = 0;
      }
      this.mainKeys.forEach(letter => {
        if (letter.title === "Caps")
          letter.activeClass = this.capsStatus ? "key-active" : "";
        if (letter.onlyShift) {
          letter.shiftStatus = this.shiftStatus;
        } else {
          letter.shiftStatus = this.upperCaseStatus;
        }
        if (letter.keyCode == e.keyCode) {
          console.log(letter);

          letter.activeClass = "";
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
  padding: 5px;
  // grid-gap: 10px;
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
}

@media (min-width: 768px) and (max-width: 978px) {
  .keyboard-wrapper {
    grid-template-columns: 1fr;
    grid-gap: 0;
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
}
</style>