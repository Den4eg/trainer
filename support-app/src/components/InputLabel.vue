<template>
  <div class="wrapper">
    <div class="text-field">
      <div class="field-line field-line__current">
        <span class>
          <div class="line-text" ref="secondLine"></div>
        </span>
      </div>
      <div class="field-line">
        <span class>
          <div class="line-text">{{ currentText[0] }}</div>
        </span>
      </div>
      <div class="field-line field-line__current" ref="lineWrapper">
        <span class>
          <div class="line-text testLine">{{ currentText[1] }}</div>
        </span>
      </div>
      <div class="field-line">
        <span class>
          <div class="line-text">{{ currentText[2] }}</div>
        </span>
      </div>
    </div>

    <!-- <pre>{{ textFromProps }}</pre> -->
    <p class="text-border">
      <button @click="testBtn">Test</button>
    </p>
  </div>
</template>

<script>
class Letter {
  constructor(letter) {
    this.label = letter.tittle;
    this.position = letter.index;
  }
}

export default {
  data() {
    return {
      lineCount: 0,
      msg: "Test",
      splittedText: [],
      firstLine: "",
      secondLine: "",
      thirdLine: ""
    };
  },
  props: {
    text: String
  },
  computed: {
    textFromProps() {
      return this.$props.text;
    },
    currentText() {
      return !this.lineCount
        ? ["", this.splittedText[0], this.splittedText[1]]
        : this.splittedText.slice(this.lineCount - 1, this.lineCount + 2);
    }
  },
  methods: {
    testBtn() {
      // console.log(this.$refs.secondLine.offsetWidth, " - child");
      // console.log(this.$refs.lineWrapper.offsetWidth, " - parrent");
      this.lineCount++;
      this.copyTextNode();
    },
    copyTextNode() {
      let $node = this.$refs.secondLine;

      $node.innerHTML = this.splittedText[this.lineCount];
      console.log($node.offsetWidth);
    },
    textParse(text) {
      //
      // Node $el
      let wrapperWidth = this.$refs.lineWrapper.offsetWidth - 1;
      let fieldWidth = this.$refs.secondLine.offsetWidth;
      //
      //
      let recText = text;
      let arrayOfLines = recText.split(/^/im);
      for (let count = 0; count < arrayOfLines.length; count++) {
        let currentLine = arrayOfLines[count].trim();

        let nextLine = arrayOfLines[count + 1];

        this.$refs.secondLine.innerHTML = currentLine;
        let lineWords = currentLine.split(" ");
        // console.log(lineWords);

        while (fieldWidth >= wrapperWidth) {
          console.log(fieldWidth, " - ", wrapperWidth);

          let splicedWord = lineWords.splice(lineWords.length - 1, 1);
          currentLine = lineWords.slice(0, lineWords.length - 2).join(" ");
          // console.log(currentLine, " - current");

          nextLine = [...splicedWord] + " " + nextLine;
          // console.log(nextLine, " - next");
        }
      }
      // console.log(arrayOfLines);

      return arrayOfLines;
      // function recourse(l){

      // }
      // let result = "";
      //
      //
      //
      // if (fieldWidth >= wrapperWidth) {
      //   let currLine = line.trim().split(/\s/gi);

      // this.textParse();
      // } else {
      //   result.push(textLinesArray[line]);
      // }
      // }
    }
  },
  watch: {
    lineCount: {
      handler: function(val, oldVal) {
        (this.firstLine = this.splittedText[val]) &&
          (this.secondLine = this.splittedText[val + 1]) &&
          (this.thirdLine = this.splittedText[val + 2]);
      },
      immediate: true
    }
  },
  created() {
    let text = this.$props.text;
    this.splittedText = text.split(/^/m);
    // let lineInheritLength = text.split(/^/m);
    // let words = text.split(/\s/gi);

    // for (let i = 0; i < text.length; i++) {
    // console.log(i, " = ", text[i]);
    // }
    // this.splittedText = this.$props.text.split("");
  },
  mounted() {
    this.textParse(this.$props.text);

    // this.copyTextNode();
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 0 auto;
  width: 90vw;
  position: relative;
  background-color: #e2e2e269;
  border: 30%;
  .text-field {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    color: #888;
    padding: 20px 35px;
    // border: 2px solid grey;
    .field-line {
      padding: 4px 14px;
      min-height: 1.5rem;
      display: flex;
      align-items: center;
      overflow: hidden;
      .line-text {
        white-space: nowrap;
      }
    }
    .field-tester {
      display: none;
    }
  }
}

.testLine {
  color: #111;
  background-color: #888;
  font-size: 1.5rem;
}

.field-line__current {
  border: 2px solid rgb(192, 192, 192);
  background-color: #fff;
  border-radius: 4px;
  height: 3rem;
}

.hiden {
  position: absolute;
  visibility: hidden;
}
</style>
