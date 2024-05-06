<script setup lang="ts">
import { useTodoStore } from "@/stores/TodoStore";

const todoStore = useTodoStore();
const { clearTodo } = todoStore;
</script>

<template>
  <VRow>
    <VCol cols="4"> </VCol>
    <VCol>
      <VBtn
        class="clear-all me-4"
        @click="clearTodo()"
        prepend-icon="mdi-delete"
        >모두 지우기
      </VBtn>
    </VCol>
  </VRow>
</template>

<style scoped>
.clear-all {
  font-weight: bold;
  color: red;
}

/* Extra small: xs */
@media (max-width: 600px) {
  .v-btn {
    font-size: 12px;
    padding: 0px 4px;
    margin: 0px -64px;
  }
}

/* Small: sm */
@media (min-width: 600px) and (max-width: 960px) {
  .v-btn {
    font-size: 12px;
    padding: 0px 0px;
    margin: 0px -34px;
  }
}

/* Medium: md */
@media (min-width: 960px) and (max-width: 1280px) {
  .v-btn {
    font-size: 14px;
    padding: 0px 4px;
    margin: 0px -24px;
  }
}

/* Large: lg */
@media (min-width: 1280px) and (max-width: 1920px) {
  .v-btn {
    font-size: 14px;
    padding: 0px 6px;
    margin: 0px 20px;
  }
}

/* Extra large: xl */
@media (min-width: 1920px) and (max-width: 2560px) {
  .v-btn {
    font-size: 14px;
    padding: 0px 24px;
    margin: 0px -4px;
  }
}

/* Extra extra large: xxl */
@media (min-width: 2560px) {
  .v-btn {
    font-size: 22px;
    padding: 16px 20px;
  }
}
</style>
