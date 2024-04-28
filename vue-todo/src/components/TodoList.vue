<script setup lang="ts">
import { ref } from "vue";

const todoItems = defineModel("todoItems");
const emit = defineEmits(["removeTodo"]);
</script>

<template>
  <VRow justify="center">
    <VCol cols="5">
      <VList bg-color="#D1C4E9" base-color="#311B92">
        <VListItem
          v-for="(todoItem, index) in todoItems"
          :index="index"
          :title="todoItem"
        >
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
/* css */
</style>
