<template>
  <div>
    <div class="modal__window">
      <h1>Упс...ошибка!</h1>
      <h2>Тебе удалось пройти {{ levels }}</h2>
      <button
        class="btn"
        @click="$emit('start')"
      >
        Начать заново!
      </button>
      <button
        class="btn"
        @click="$emit('close')"
      >
        Отмена
      </button>
    </div>
    <div 
      class="modal__overlay"
      @click="$emit('close')"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    level: Number
  },
  computed: {
    levels () {
      const currentLevel = +this.level.toString().split('').pop() - 1
      if (currentLevel === 0 || (currentLevel >= 5 && currentLevel <= 9)) {
        return `${currentLevel} уровней`
      } else if (currentLevel >= 2 && currentLevel <=4) {
        return `${currentLevel} уровня`
      } else {
        return `${currentLevel} уровень`
      }
    }
  }
}
</script>

<style>

</style>
