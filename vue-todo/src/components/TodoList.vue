<script setup lang="ts">
import { TodoItem } from "@/types/type";
import { ComputedRef, ModelRef, computed } from "vue";

const todoItems: ModelRef<TodoItem[]> = defineModel("todoItems", {
  default: [] as TodoItem[],
});
const emit = defineEmits(["removeTodo"]);

/* for progress bar */
const completedTasks: ComputedRef<number> = computed(() => {
  return todoItems.value.filter((task) => task.completed).length;
});

const progress: ComputedRef<number> = computed(() => {
  return (completedTasks.value / todoItems.value.length) * 100;
});

const remainingTasks: ComputedRef<number> = computed(() => {
  return todoItems.value.length - completedTasks.value;
});

const toggleComplete = (target: TodoItem) => {
  target.completed = !target.completed;
  localStorage.setItem(target.item, JSON.stringify(target));
};
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
                <VBtn
                  color="#311B92"
                  @click="emit('removeTodo', todoItem, index)"
                >
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
