<template>
	<table class="w-full">
		<thead>
			<tr>
				<th class="py-2">Done</th>
				<th class="py-2">Name</th>
				<th class="py-2">Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="todo in store.todos" :key="todo.id">
				<td class="py-2">
					<input
						type="checkbox"
						class="checkbox"
						:checked="todo.isFinished"
						@change="store.setters.toggleTodoIsFinished(todo.id)" />
				</td>
				<td class="py-2">{{ todo.text }}</td>
				<td class="py-2">
					<UButton
						variant="solid"
						color="red"
						@click="store.setters.removeTodo(todo.id)"
						>Remove</UButton
					>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { useTodos } from "@/stores/todos";
const store = useTodos();
</script>

<style scoped>
table {
	border-collapse: collapse;
}

th,
td {
	padding: 8px;
	text-align: left;
	border-bottom: 1px solid #ccc;
}

button {
	cursor: pointer;
}

button:hover {
	background-color: darkred;
}

.checkbox {
	transform: scale(1.5);
	accent-color: #34495e;
}
</style>
