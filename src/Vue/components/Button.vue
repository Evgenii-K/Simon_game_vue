<template>
  <div>
    <button v-show="btnHidden" @click="$emit('start')">Start</button>
  </div>
</template>

<script>
export default {
  props: ["btnHidden"],
};
</script>

<style>
</style>