<template>
	<h1 v-if="tasks.length === 0" class="text-white center">You have no tasks yet...</h1>
	<template v-else>
		<TasksCounter />
		<div class="card" v-for="task in tasks" :key="task.id">
			<h2 class="card-title">
				{{task.title}}
				<AppStatus :type="task.status" />
			</h2>
			<p>
			<strong>
				<small>
					{{new Date(task.date).toLocaleDateString()}}
				</small>
			</strong>
			</p>
			<button class="btn primary"	@click="open(task.id)">Show description</button>
		</div>
	</template>
</template>

<script>
import firebase from "../firebase.js"
import router from "../router"
import AppStatus from '../components/AppStatus.vue'
import TasksCounter from '../components/TasksCounter.vue'

export default {
	components: {AppStatus, TasksCounter},
	name: "boards",
	data() {
		return {
			tasks: [],
			ref: firebase.firestore().collection("tasks"),
		}
	},
	created() {
		this.ref.onSnapshot((querySnapshot) => {
			this.tasks = []
			querySnapshot.forEach((doc) => {
				this.tasks.push(doc.data())
			})
		})
	},
	methods: {
		open(id) {
			this.$router.push(`/task/${id}`)
		}
	}
}
</script>
