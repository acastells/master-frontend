<template>
	<div class="container mx-auto max-w-[1024px] p-2 flex flex-col gap-8">
		<h1 class="text-2xl text-center m-2 font-bold">ToDo App</h1>
		<CreateTodosVue />
		<TodosTableVue />
	</div>
</template>

<script setup lang="ts">
import CreateTodosVue from "./CreateTodos.vue";
import TodosTableVue from "./TodosTable.vue";
</script>

<style>
</style>