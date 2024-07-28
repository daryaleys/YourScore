<script setup lang="ts">

// const bodyElement = document.body;
// console.log(bodyElement)

const toggleMode = () => {
  document.documentElement.classList.toggle('dark');
}

</script>

<template>
  <button @click="toggleMode">Toggle Mode</button>
  <h1>Тест</h1>
</template>

<style lang="scss" scoped>
  h1 {
    color: var(--color-main-text);
  }
</style>
