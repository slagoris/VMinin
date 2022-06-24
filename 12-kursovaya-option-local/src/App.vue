<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import {mapState, mapMutations} from 'vuex'
export default {
  components: {
    TheNavbar
  },
	mounted() {
		this.getTasks()
	},
	methods: {
		...mapMutations(['getTasks'])
	},
	computed: {
		...mapState(['tasks'])
	},
}
</script>

<style>

</style>
