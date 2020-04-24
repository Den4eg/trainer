<template>
  <div class="keyboard-swtches">
    <div
      v-for="(btn,index) of buuttonsArr"
      class="key-block"
      :class="` ${btn.classModifier} ${btn.positionRow} ${btn.activeClass}`"
      :key="index"
      @click="$emit('clickMethodEvent', btn)"
    >
      <span>{{ btn.shiftStatus?btn.shiftTitle:btn.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["buuttonsArr"]
};
</script>

<style lang="scss" scoped>
.keyboard-swtches {
  width: fit-content;
  display: grid;
  grid-gap: 4px;
}

.key-block {
  font-family: Oswald, serif;
  font-size: 16px;
  background-color: #f3f3f3;
  box-shadow: 1px 1px 4px #82aab1e6;
  color: #636363;
  min-height: 2rem;
  border: 1px solid #7e7e7e;
  border-radius: 3px;
  padding: 5px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.05s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #0000002c;
    color: rgba(0, 0, 0, 0.658);
    border-color: #d9fffa;
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 1px 1px #acacacb9;
    box-shadow: 0 0 4px 2px #8cc5cf;
  }
  > span {
    user-select: none;
  }
}

.space-modifier {
  &:active {
    transform: scaleY(0.9) scaleX(0.97);
  }
}

.key-active {
  background-color: rgba(27, 245, 143, 0.178);
  transform: scale(0.95);
  box-shadow: 0 0 1px 1px #acacacb9;
}

.mainkeys-row1 {
  grid-row: 1;
}
.mainkeys-row2 {
  grid-row: 2;
}
.mainkeys-row3 {
  grid-row: 3;
}
.mainkeys-row4 {
  grid-row: 4;
}
.mainkeys-row5 {
  grid-row: 5;
}

.keyboard-key__1 {
  grid-column: 1 span;
}
.keyboard-key__2 {
  grid-column: span 2;
}
.keyboard-key__3 {
  grid-column: span 3;
}
.keyboard-key__4 {
  grid-column: span 4;
}
.keyboard-key__5 {
  grid-column: span 5;
}
.keyboard-key__space {
  grid-column: span 17;
}
</style>