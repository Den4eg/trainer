<template>
  <div class="wrapper">
    <div class="trainer-header">
      <textarea v-model="inputLabel" type="text" class="caps" />
      <button @click="clearArea">Clear</button>
    </div>
    <div class="trainer-body">
      <p
        class="textArea"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor saepe tempore officiis sit cupiditate doloremque! Consequuntur cumque quam doloremque excepturi earum iusto, magnam esse, similique labore, nostrum in? Eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, cumque.</p>
    </div>
    <appKeyboard @emmited="em" capsStatus="capsed"></appKeyboard>
    <div class="trainer-footer">
      <h2>FOOTER</h2>
    </div>
  </div>
</template>

<script>
// import Keyboard from "../components/Keyboard.vue";
import Keyboard from "../components/Dubble.vue";

export default {
  components: {
    appKeyboard: Keyboard
  },
  data() {
    return {
      inputLabel: "",
      capsStatus: null
    };
  },
  methods: {
    em(letter) {
      if (letter === "z") {
        this.capsStatus = 0;
      } else {
        this.capsStatus = 1;
      }
      this.inputLabel += letter;
    },
    clearArea() {
      this.inputLabel = "";
    }
  },
  computed: {
    capsed() {
      return this.capsStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  // width: 90%;
  margin: 0 auto;
  height: 100vh;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.trainer-body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.3rem;
  line-height: 1.6;
  .textArea {
    margin: 0 auto;
    width: 90%;
    word-wrap: normal;
  }
}
</style>
