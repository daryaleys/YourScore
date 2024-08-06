<script setup lang="ts">

fetch('/src/data/football.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
</script>

<template>
    <h2>main list</h2>
</template>

<style lang="scss" scoped></style>
