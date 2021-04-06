<template>
  <div>
    <h1>Hello world from Vue</h1>
    <BoxList :startGame="btnHidden" />
    <Button @start="start" :btnHidden="btnHidden" />
  </div>
</template>


<script>
import Button from "./components/Button.vue";
import BoxList from "./components/BoxList.vue";
export default {
  data() {
    return {
      btnHidden: true,
    };
  },
  components: {
    Button,
    BoxList,
  },
  methods: {
    start() {
      this.btnHidden = false;
      alert("Start");
    },
  },
};
</script>

<style>
</style>