import { TodoItem } from "@/types/type";
import { defineStore } from "pinia";
import { ComputedRef, computed, ref } from "vue";

export const useTodoStore = defineStore("TodoStore", () => {
    const todoItems = ref<TodoItem[]>([] as TodoItem[]);

    const initTodo = () => {
        if (localStorage.length > 0) {
            Array.from(localStorage).forEach((_, idx) => {
              const key = localStorage.key(idx);
              if (key !== null) {
                todoItems.value.push(JSON.parse(localStorage.getItem(key)));
              }
            });
          }
    }

    const addTodo = (newTodoItem: string) => {
        const newObj = { completed: false, item: newTodoItem };
        localStorage.setItem(newTodoItem, JSON.stringify(newObj));
        todoItems.value.push(newObj);
      };

      const removeTodo = (target: TodoItem, index: number) => {
        localStorage.removeItem(target.item);
        todoItems.value.splice(index, 1);
      };
      
      const clearTodo = () => {
        localStorage.clear();
        todoItems.value = [];
      };

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

      return { todoItems , initTodo, addTodo, removeTodo , clearTodo , completedTasks, progress, remainingTasks}
})