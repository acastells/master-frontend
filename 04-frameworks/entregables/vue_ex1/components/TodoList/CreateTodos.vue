<template>
	<div class="container flex flex-row gap-8">
		<UInput
			color="primary"
			variant="outline"
			placeholder="Create Todo"
			v-model="newTodoText"
			class="flex-grow">
		</UInput>
		<UButton variant="solid" color="primary" @click="addTodo" class="flex-shrink-0"
			>Create Todo</UButton
		>
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

<style scoped></style>
