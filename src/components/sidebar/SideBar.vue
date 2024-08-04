<script setup lang="ts">
const props = defineProps<{
    myLeagues: { id: number; name: string }[];
}>();

console.log(props.myLeagues)

</script>

<template>
    <div class="sidebar-block" v-if="myLeagues.length">
        <h3 clsas="sidebar-block__title">Мои лиги</h3>
    </div>
</template>

<style lang="scss" scoped></style>
