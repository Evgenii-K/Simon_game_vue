<template>
  <div class="wrapper">
    <ColorBox v-for="item in itemList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ColorBox from "./ColorBox.vue";

export default {
  props: ["startGame"],
  data() {
    return {
      itemList: [
        { id: 0, color: "lightcoral", active: true },
        { id: 1, color: "lightblue", active: false },
        { id: 2, color: "lightgreen", active: false },
        { id: 3, color: "lightyellow", active: false },
      ],
    };
  },
  components: {
    ColorBox,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 350px;
  border: 1px solid black;
  margin-bottom: 25px;
}
</style>