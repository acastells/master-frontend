import { defineStore } from "pinia";

export interface Todo {
	text: string;
	id: number;
	isFinished: boolean;
}

export type FilterType = "all" | "finished" | "unfinished";

export const useTodos = defineStore("todos", () => {
	const todos = ref<Todo[]>([]);
	const filter = ref<FilterType>("all");

	const getters = {
		finishedTodos() {
			return todos.value.filter((todo) => todo.isFinished);
		},
		unfinishedTodos() {
			return todos.value.filter((todo) => !todo.isFinished);
		},
		filteredTodos() {
			if (filter.value === "finished") {
				return this.finishedTodos();
			} else if (filter.value === "unfinished") {
				return this.unfinishedTodos();
			}
			return todos;
		},
	};
	const setters = {
		addTodo(text: string) {
			todos.value.push({ text, id: Date.now(), isFinished: false });
		},
		removeTodo(id: number) {
			todos.value = todos.value.filter((todo) => todo.id !== id);
		},
		toggleTodoIsFinished(id: number) {
			console.log("hey")
			const todoIndex = todos.value.findIndex((todo) => todo.id === id);
			if (todoIndex !== -1) {
			  todos.value[todoIndex].isFinished = !todos.value[todoIndex].isFinished;
			}
		  },
	};

	return { todos, filter, getters, setters };
}, {persist:true});
