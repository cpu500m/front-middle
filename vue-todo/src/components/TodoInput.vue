<script setup lang="ts">
import { ref } from "vue";
import InputDialog from "@/components/common/InputDialog.vue";
import { useTodoStore } from "@/stores/TodoStore";

/* pinia store */
const todoStore = useTodoStore();
const { addTodo } = todoStore;

const newTodoItem = ref("");
const alertFlag = ref<boolean>(false);

const sendText = () => {
  if (newTodoItem.value !== "") {
    addTodo(newTodoItem.value);
    newTodoItem.value = "";
  } else {
    alertFlag.value = true;
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
  <InputDialog v-model="alertFlag"></InputDialog>
</template>

<style scoped></style>
