<script setup lang="ts">
const emit = defineEmits(["clearTodo"]);
</script>

<template>
  <VRow>
    <VCol cols="4"> </VCol>
    <VCol>
      <VBtn class="clear-all ms-5" @click="emit(`clearTodo`)">모두 지우기</VBtn>
    </VCol>
  </VRow>
</template>

<style scoped>
.clear-all {
  font-weight: bold;
  color: red;
}
</style>
