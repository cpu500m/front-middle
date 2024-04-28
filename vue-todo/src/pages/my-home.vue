<script setup lang="ts">
import TodoFooter from "@/components/TodoFooter.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import { TodoItem } from "@/types/type.ts";

import { onMounted, ref } from "vue";

const todoItems = ref<TodoItem[]>([] as TodoItem[]);

onMounted(() => {
  if (localStorage.length > 0) {
    Array.from(localStorage).forEach((_, idx) => {
      const key = localStorage.key(idx);
      if (key !== null) {
        todoItems.value.push(JSON.parse(localStorage.getItem(key)));
      }
    });
  }
});

const addTodo = (newTodoItem: string) => {
  const newObj = { completed: false, item: newTodoItem };
  localStorage.setItem(newTodoItem, JSON.stringify(newObj));
  todoItems.value.push(newObj);
};

const removeTodo = (target: string, index: number) => {
  localStorage.removeItem(target.item);
  todoItems.value.splice(index, 1);
};

const clearTodo = () => {
  localStorage.clear();
  todoItems.value = [];
};
</script>

<template>
  <div>
    <TodoHeader />
    <TodoInput @add-todo="addTodo" />
    <TodoList v-model:todo-Items="todoItems" @remove-todo="removeTodo" />
    <TodoFooter @clear-todo="clearTodo" />
  </div>
</template>
