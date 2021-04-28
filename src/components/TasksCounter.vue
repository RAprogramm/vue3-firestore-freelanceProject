<template>
	<div class="total-tasks">
		<h4 class="text-white">Total active tasks: {{ active }}</h4>
		<h4 class="text-white">Total completed tasks: {{ completed }}</h4>
		<h4 class="text-white">Total canceled tasks: {{ canceled }}</h4>
		<h4 class="text-white">Total pending tasks: {{ pending }}</h4>
	</div>
</template>

<script>
import firebase from '../firebase.js'

export default {
	data() {
		return {
			ref: firebase.firestore().collection("tasks"),
			active: {
				type: Number
			},
			completed: {
				type: Number
			},
			canceled: {
				type: Number
			},
			pending: {
				type: Number
			}
		}
	},
	created() {
		this.ref.where("status", "==", 'active').onSnapshot((querySnapshot) => {
			const active = []
			querySnapshot.forEach((doc) => {
				active.push(doc.data().status)
			})
			this.active = active.length
		})
		this.ref.where("status", "==", 'pending').onSnapshot((querySnapshot) => {
			const pending = []
			querySnapshot.forEach((doc) => {
				pending.push(doc.data().status)
			})
			this.pending = pending.length
		})
		this.ref.where("status", "==", 'done').onSnapshot((querySnapshot) => {
			const completed = []
			querySnapshot.forEach((doc) => {
				completed.push(doc.data().status)
			})
			this.completed = completed.length
		})
		this.ref.where("status", "==", 'canceled').onSnapshot((querySnapshot) => {
			const canceled = []
			querySnapshot.forEach((doc) => {
				canceled.push(doc.data().status)
			})
			this.canceled = canceled.length
		})
	}
}
</script>

<style scoped>
.total-tasks {
	display: flex;
	justify-content: space-between;
}
</style>
