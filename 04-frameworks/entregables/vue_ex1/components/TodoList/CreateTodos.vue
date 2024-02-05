<template>
	<div class="">
		<input type="text" v-model="newTodoText" class="px-2 py-1 border border-gray-300 rounded" />
		<button type="button" @click="addTodo" class="px-4 py-2 bg-blue-500 text-white rounded">
			Add Todo
		</button>
	</div>
</template>

<script setup lang="ts">
const store = useTodos();

const newTodoText = ref("");
const addTodo = () => {
	if (newTodoText.value.trim() !== "") {
		store.setters.addTodo(newTodoText.value);
		newTodoText.value = "";
	}
};
</script>

<style scoped>
input[type="text"] {
	border-width: 1px;
}

button {
	cursor: pointer;
}
</style>
