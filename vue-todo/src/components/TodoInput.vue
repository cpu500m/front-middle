<script setup lang="ts">
import { ref } from "vue";

const newTodoItem = ref("");

const addTodo = () => {
  localStorage.setItem(`newTodoItem`, newTodoItem.value);
  clearInput();
};

const clearInput = () => {
  newTodoItem.value = "";
};
</script>

<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" />
    <!-- <button @click="addTodo">add</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fa-plus addBtn"></i>
    </span>
  </div>
</template>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: while;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #647bfb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
