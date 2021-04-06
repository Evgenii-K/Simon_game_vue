<template>
  <div
    class="colorBox"
    :style="{ backgroundColor: activeColor() }"
    @click="choiceBox()"
  ></div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      brightColor: "",
    };
  },
  methods: {
    choiceBox() {
      this.brightColor = this.item.color;
      console.log(this.brightColor.slice(5, 10));
    },
    activeColor() {
      this.brightColor = this.item.color;
      if (this.item.active) {
        return this.brightColor.slice(5, this.brightColor.length);
      } else {
        return this.brightColor;
      }
    },
  },
};
</script>

<style scoped>
.colorBox {
  width: 150px;
  height: 150px;
  border: 1px solid black;
}
</style>