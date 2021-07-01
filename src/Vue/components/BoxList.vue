<template>
  <div class="wrapper">
    <ColorBox 
      v-for="item in itemList" 
      :key="item.id" 
      :item="item"
      @onCheck="check($event)"
    />
  </div>
</template>

<script>
import ColorBox from "./ColorBox.vue";

export default {
  props: ["start"],
  data() {
    return {
      itemList: [
        { id: 0, color: "lightcoral", active: false },
        { id: 1, color: "lightblue", active: false },
        { id: 2, color: "lightgreen", active: false },
        { id: 3, color: "lightyellow", active: false },
      ],
      level: 1,
      current: 0,
      randomItem: [],
      difficultyLevel: 400
    };
  },
  components: {
    ColorBox,
  },
  watch: {
    level () {
      this.$emit('level', this.level)
    },
    start () {
      if (this.start) this.startGame()
    }
  },
  methods: {
    startGame () {
      this.level = 1
      for (let i = 0; i < 3; i++) {
        this.randomItem.push(Math.floor(Math.random()*4))
      }
      setTimeout(() => {
        this.render()
      }, 1000)
    },
    endGame () {
      this.current = 0
      this.randomItem = []
      this.$emit('enable')
    },
    render () {
      this.randomItem.forEach((id, key) => { 
        this.setActive (id, key)
      })
    },
    setActive (id, key) {
      setTimeout(() => {
        this.itemList[id].active = true
      }, this.difficultyLevel*key + 500*key)
      setTimeout(() => {
        this.itemList[id].active = false
      }, this.difficultyLevel*(key+1) + 500*key)
    },
    check (id) {
      if (!this.start) return

      const currentId = this.randomItem[this.current]
      
      if (id === currentId) {
        this.current++
      } else {
        this.endGame()
        return
      }

      if (this.current >= this.randomItem.length) this.nextLevel()
    },
    nextLevel () {
        this.current = 0
        this.randomItem.push(Math.floor(Math.random()*4))
        setTimeout(() => {
          this.level++
          this.render()
        }, 1000)
    }
  }
};
</script>

<style>
</style>