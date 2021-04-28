<template>
	<form class="card" @submit.prevent="sendData">
		<h1>Create a new task</h1>
		<div class="form-control">
			<label for="title">Title</label>
			<input type="text" id="title" v-model="task.title">
		</div>

		<div class="form-control">
			<label for="date">Deadline</label>
			<input type="date" id="date" v-model="task.date">
		</div>

		<div class="form-control">
			<label for="description">Description</label>
			<textarea id="description" v-model="task.description"></textarea>
		</div>

		<button class="btn primary" :disabled="!isValid">Create</button>
	</form>
</template>

<script>
import firebase from "../firebase.js"
import router from "../router"

export default {
	name: "add-board",
	data() {
		return {
			ref: firebase.firestore().collection("tasks"),
			task: {
				title: '',
				date: null,
				description: ''
			}
		}
	},
	methods: {
		sendData()  {
			const newTask = {
				id: Date.now().toString(),
				title: title.value,
				date: new Date(date.value).setHours(23,59,59,999),
				description: description.value,
				status: 'active'
			}
			if (newTask.date < new Date()) {
				newTask.status = 'canceled'
			}
			this.ref.doc(newTask.id).set(newTask)
			router.push('/')
		},
	},
	computed: {
		isValid() {
			return this.task.title !== '' && this.task.date && this.task.description !== ''
		}
	}
}
</script>
