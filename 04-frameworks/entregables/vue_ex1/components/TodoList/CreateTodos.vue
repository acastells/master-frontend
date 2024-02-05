<template>
	<UContainer>
		<UInput
			color="primary"
			variant="outline"
			placeholder="Create Todo"
			v-model="newTodoText">
		</UInput>
		<UButton variant="solid" color="primary" @click="addTodo">+</UButton>
	</UContainer>
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
