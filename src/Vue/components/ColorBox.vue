<template>
  <div
    class="colorBox"
    :style="{ backgroundColor: activeColor() }"
    @mousedown="item.active = true"
    @mouseup="activeFalse"
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
    };
  },
  methods: {
    activeColor () {
      if (this.item.active) {
        return this.item.color.slice(5, this.item.length);
      } else {
        return this.item.color;
      }
    },
    activeTrue () {
      this.item.active = true
    },
    activeFalse () {
      this.$emit('onCheck', this.item.id)
      setTimeout(() => {this.item.active = false}, 200)
    }
  }
};
</script>

<style>
</style>