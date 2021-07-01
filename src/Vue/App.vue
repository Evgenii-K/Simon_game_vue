<template>
  <div class="content">
    <h1>Simon Game on Vue</h1>
    <h3>Level {{ level }}</h3>
    <BoxList 
      :start="start"
      @enable="endGame"
      @level="level = $event"
    />
    <button 
      class="btn"
      @click="start = true"
      :disabled="start"
    >
      Start
    </button>
    <Modal 
      v-if="modalShow"
      @close="modalClose"
      @start="startGame"
      :level="level"
    />
  </div>
</template>


<script>
import BoxList from "./components/BoxList.vue"
import Modal from "./components/Modal.vue"

export default {
  data() {
    return {
      level: 1,
      start: false,
      modalShow: false
    };
  },
  components: {
    BoxList,
    Modal
  },
  methods: {
    startGame () {
      this.modalShow = false
      this.start = true
    },
    endGame () {
      this.start = false
      this.modalShow = true
    },
    modalClose () {
      this.level = 1
      this.modalShow = false
    }
  }
};
</script>

<style>
</style>
