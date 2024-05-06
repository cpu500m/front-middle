<script setup lang="ts">
import { useTodoStore } from "@/stores/TodoStore";
import { TodoItem } from "@/types/type";
import { storeToRefs } from "pinia";

const TodoStore = useTodoStore();
const { remainingTasks, completedTasks, progress } = storeToRefs(TodoStore);
const { removeTodo, initTodo } = TodoStore;
const { todoItems } = storeToRefs(TodoStore);

const toggleComplete = (target: TodoItem) => {
  target.completed = !target.completed;
  localStorage.setItem(target.item, JSON.stringify(target));
};

initTodo();
</script>

<template>
  <VRow justify="center">
    <VCol cols="5">
      <VRow align="center" class="my-1">
        <strong class="mx-4 text-info-darken-2">
          Remaining: {{ remainingTasks }}
        </strong>

        <strong class="mx-4 text-success-darken-2">
          Completed: {{ completedTasks }}
        </strong>

        <VSpacer></VSpacer>

        <VProgressCircular
          v-model="progress"
          class="me-4"
          color="#AB47BC"
        ></VProgressCircular>
      </VRow>
      <VList bg-color="#D1C4E9" base-color="#311B92" class="overflow-hidden">
        <TransitionGroup name="list">
          <template v-for="(todoItem, index) in todoItems" :key="index">
            <VListItem>
              <div :class="{ textCompleted: todoItem.completed }">
                {{ todoItem.item }}
              </div>
              <template #prepend>
                <VCheckboxBtn
                  v-model="todoItem.completed"
                  @click="toggleComplete(todoItem)"
                  :disabled="todoItem.completed"
                ></VCheckboxBtn>
              </template>
              <template #append>
                <VBtn color="#311B92" @click="removeTodo(todoItem, index)">
                  <VIcon icon="mdi-delete"></VIcon>
                </VBtn>
              </template>
            </VListItem>
          </template>
        </TransitionGroup>
      </VList>
    </VCol>
  </VRow>
</template>

<style scoped>
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.list-enter-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>
