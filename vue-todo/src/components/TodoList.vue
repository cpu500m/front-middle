<script setup lang="ts">
import { ref } from "vue";

const todoItems = defineModel("todoItems");
const emit = defineEmits(["removeTodo"]);

const toggleComplete = (target: todoItem) => {
  target.completed = !target.completed;
  localStorage.setItem(target.item, JSON.stringify(target));
};
</script>

<template>
  <VRow justify="center">
    <VCol cols="5">
      <VList bg-color="#D1C4E9" base-color="#311B92">
        <VListItem v-for="(todoItem, index) in todoItems" :index="index">
          <span :class="{ textCompleted: todoItem.completed }">
            {{ todoItem.item }}
          </span>
          <template #prepend>
            <VCheckboxBtn
              v-model="todoItem.completed"
              @click="toggleComplete(todoItem)"
              :disabled="todoItem.completed"
            ></VCheckboxBtn>
          </template>
          <template #append>
            <VBtn color="#311B92" @click="emit('removeTodo', todoItem, index)">
              <VIcon icon="mdi-delete"></VIcon>
            </VBtn>
          </template>
        </VListItem>
      </VList>
    </VCol>
  </VRow>
</template>

<style scoped>
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
