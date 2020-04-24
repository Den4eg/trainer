<template>
  <div class="keyboard-wrapper">
    <button-block :buuttonsArr="mainKeys" @clickMethodEvent="clickMethodListener" class="primary" />
  </div>
</template>

<script>
import keyButton from "../components/keyButton.vue";
import { mainKeys, language } from "../assets/keyboards/eng.json";
export default {
  components: {
    buttonBlock: keyButton
  },
  data() {
    return {
      capsStatus: 0,
      shiftStatus: 0,
      lang: language,
      mainKeys: mainKeys
    };
  },
  methods: {
    clickMethodListener(letter) {
      if (letter.keyCode === "16" && !this.shiftStatus) {
        this.keydownEvent(letter);
      } else if (letter.keyCode === "16" && this.shiftStatus) {
        this.keyupEvent(letter);
      } else {
        this.keydownEvent(letter);
        this.keyupEvent(letter);
        this.keyupEvent({ key: "Shift", keyCode: 16 });
      }
    },

    keydownEvent(e) {
      if (e.isTrusted) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (e.key === "Shift") {
        this.shiftStatus = 1;
      }
      if (e.key == "CapsLock") this.capsStatus = +!this.capsStatus;
      this.mainKeys.forEach(letter => {
        if (letter.onlyShift) {
          letter.shiftStatus = this.shiftStatus;
        } else {
          letter.shiftStatus = this.upperCaseStatus;
        }
        if (letter.keyCode == e.keyCode) {
          if (e.location == 1 && !letter.left) {
            letter.activeClass = "";
          } else if (e.location == 2 && letter.left) {
            letter.activeClass = "";
          } else {
            letter.activeClass = "key-active";
            if (letter.title === "Caps") {
              letter.activeClass = this.capsStatus ? "key-active" : "";
            }
            if (!letter.service) {
              this.$emit(
                "emmited",
                letter.shiftStatus ? letter.shiftTitle : letter.title
              );
            }
          }
        }
      });
    },

    keyupEvent(e) {
      if (e.isTrusted) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (e.key === "Shift") {
        this.shiftStatus = 0;
      }
      this.mainKeys.forEach(letter => {
        if (letter.onlyShift) {
          letter.shiftStatus = this.shiftStatus;
        } else {
          letter.shiftStatus = this.upperCaseStatus;
        }
        if (letter.keyCode == e.keyCode) {
          letter.activeClass = "";
          if (letter.title === "Caps")
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
  padding: 3px;
  display: grid;
  padding: 5px;
  justify-items: center;
}

.primary {
  grid-template-columns: repeat(28, 1.6rem);
  grid-template-rows: repeat(5, 1fr);
}

@media (min-width: 668px) AND (max-width: 769px) {
  .primary {
    grid-template-columns: repeat(28, 1rem);
    grid-template-rows: repeat(5, 1fr);
  }
}

@media (max-width: 667px) {
  .primary {
    display: none;
  }
}
</style>