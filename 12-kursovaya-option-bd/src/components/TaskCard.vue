<template>
	<div class="card">
		<h2 class="card-title">
			{{ item.name }}
			<AppStatus :type="item.status"/>
		</h2>
		<p>
			<strong>
				<small>
					Срок до {{ dedLine }}
<!--					{{ new Date().toLocaleDateString() }}-->
				</small>
			</strong>
		</p>
		<router-link :to="'/task/' + item.id">
			<button class="btn primary" >Посмотреть</button>
		</router-link>
	</div>
</template>

<script>
import AppStatus from "@/components/AppStatus";

export default {
	name: "TaskCard",
	components: {AppStatus},
	props: {
		item: Object,
	},
	computed: {
		dedLine() {
			return this.item.deadline.split('-').reverse().join('.')
		}
	}
}
</script>

<style scoped>

</style>
