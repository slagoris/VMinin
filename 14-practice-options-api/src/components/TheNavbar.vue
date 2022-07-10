<template>
	<nav class="navbar">
		<h3>Online bank</h3>
		<ul class="navbar-menu">
			<li>
				<router-link to="/">Заявка</router-link>
			</li>
			<li>
				<router-link to="/help">Помощь</router-link>
			</li>
			<li>
				<a href="#">Сообщения</a>
			</li>
			<li>
				<a href="#" @click.prevent="logout">Выход</a>
			</li>
		</ul>
	</nav>
</template>

<script>

export default {
	name: "TheNavbar",
	methods: {
		logout() {
			this.$store.commit('auth/logout')
			this.$router.push('/auth')
		}
	}

}
</script>

<style scoped>

</style>
