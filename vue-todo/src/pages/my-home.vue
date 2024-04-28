<script setup lang="ts">
import TodoFooter from "@/components/TodoFooter.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

import { onMounted, ref } from "vue";

const todoItems = ref<string[]>([] as string[]);

onMounted(() => {
  if (localStorage.length > 0) {
    Array.from(localStorage).forEach((_, idx) => {
      const key = localStorage.key(idx);
      if (key !== null) {
        todoItems.value.push(key);
      }
    });
  }
});

const addTodo = (newTodoItem: string) => {
  localStorage.setItem(newTodoItem, "temp");
  todoItems.value.push(newTodoItem);
};

const removeTodo = (item: string, index: number) => {
  localStorage.removeItem(item);
  todoItems.value.splice(index, 1);
};
</script>

<template>
  <div>
    <TodoHeader />
    <TodoInput @add-todo="addTodo" />
    <TodoList v-model:todo-Items="todoItems" @remove-todo="removeTodo" />
    <TodoFooter />
  </div>
</template>
