<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    TheNavbar
  },
	methods: {
		...mapActions(['loadTasks']),
	},
	computed: {
		...mapState(['tasks'])
	},
}
</script>

<style>

</style>
