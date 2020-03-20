<template>
  <div class="wrap">
    <div class="logo-wrapper logo-img">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="logo-wrapper logo-text">
      <span class="logo-label" v-for="(letter, index) of labelView" :key="index">
        <span class="anim" v-if="letter !== ' '">{{letter}}</span>
        <span v-else>
          <br />
        </span>
      </span>
      <span class="label-indicator" v-show="indicator"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      appLabel: "Keyboard Trainer",
      labelView: []
    };
  },
  methods: {
    mainIteratorLabel: (string, array, next) => {
      function* iter(str) {
        for (let i = 0; i < str.length; i++) yield str[i];
      }
      let iterSelf = iter(string);

      let recurse = setTimeout(function test() {
        let iterObj = iterSelf.next();
        if (!iterObj.done) {
          array.push(iterObj.value);
          recurse = setTimeout(test, Math.floor(Math.random() * 500));
        } else {
          clearTimeout(recurse);
          if (next) {
            next();
          }
        }
      }, 500);
    }
  },
  computed: {
    indicator() {
      return this.labelView.length !== this.appLabel.length ? false : true;
    }
  },
  created: function() {
    this.$nextTick(this.mainIteratorLabel(this.appLabel, this.labelView));
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  z-index: -1;
  position: relative;
  width: 300px;
  height: 300px;
  .logo-wrapper {
    position: absolute;
    img {
      z-index: -1;
    }
  }
  .logo-img {
    padding: 50px;
    padding-top: 0;
  }

  .logo-text {
    top: 200px;
    width: 300px;
    text-align: center;

    .logo-label {
      font-family: Ubuntu, sans-serif;
      font-weight: bold;
      color: #41b883;
      font-size: 50px;
      text-shadow: 0 0 2px #000000;
      .anim {
        width: 100%;
        height: 100%;
        animation: letters 0.3s;
        position: relative;
        overflow: hidden;
      }
    }
    .label-indicator {
      position: relative;
      opacity: 0;
      animation: indicator 1.2s infinite 0.9s;
      font-size: 45px;
      padding-left: 5px;
      &::after {
        content: "";
        position: absolute;
        top: -7px;
        right: -15px;
        width: 6px;
        height: 100%;
        color: #35495e;
        background-color: #35495e;
      }
    }
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
}
</style>
