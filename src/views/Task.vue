<template>
	<div class="card" v-if="task">
		<h2>{{task.title}}</h2>
		<p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
		<p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
		<p><strong>Описание</strong>: {{ task.description }}</p>
		<div class="for-delete">
			<div>
				<button class="btn" @click="setStatus('pending')">take to work</button>
				<button class="btn primary" @click="setStatus('done')">complete</button>
				<button class="btn danger" @click="setStatus('canceled')">cancel</button>
			</div>
			<button class="btn black" @click.prevent="removeTask">Delete</button>
		</div>
	</div>
	<h3 class="text-white center" v-else>
		There is no task with id {{id}}
	</h3>
</template>

<script>
import firebase from "../firebase.js"
import router from "../router"
import AppStatus from '../components/AppStatus.vue'

export default {
	components: {AppStatus},
	props: ['id'],
	data() {
		return {
			task: {},
			ref: firebase.firestore().collection("tasks")
		}
	},
	created() {
		const id = this.id
		this.ref.doc(id).onSnapshot((doc) => {
			this.task = doc.data()
		})
	},
	methods: {
		setStatus(status) {
			const id = this.id
			this.ref.doc(id).update({status: status})
		},
		removeTask() {
			const id = this.id
			this.ref.doc(id).delete().then(() => {
				this.$router.push('/')
			})
		}
	}
}
</script>

 <style scoped>
.for-delete {
	justify-content: space-between;
	display: flex;
}
</style>
