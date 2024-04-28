<script setup lang="ts">
import { ref } from "vue";

const newTodoItem = ref("");
const emits = defineEmits(["addTodo"]);

const sendText = () => {
  if (newTodoItem.value !== "") {
    emits("addTodo", newTodoItem.value);
    newTodoItem.value = "";
  }
};
</script>

<template>
  <VRow no-gutters justify="center">
    <VCol cols="3">
      <VTextField
        v-model="newTodoItem"
        clearable
        density="compact"
        variant="solo"
        bg-color="white"
        @keyup.enter="sendText"
      >
      </VTextField>
    </VCol>
    <VCol cols="auto">
      <VBtn @click="sendText" color="#AB47BC" height="40px">
        <VIcon icon="mdi-plus"></VIcon>
      </VBtn>
    </VCol>
  </VRow>
</template>

<style scoped></style>
