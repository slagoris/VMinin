<template>
	<app-alert
			title="Работа с Composition"
			type="danger"
			v-if="alert"
			@close="close"
	></app-alert>
  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, methods, computed, watch</small>
    <div class="form-control">
      <input type="text" v-model="firstName">
    </div>

    <button class="btn" @click="change">Изменить</button>
    <button class="btn danger" @click="toggle">Alert</button>
  </div>

  <FrameworkInfo
      @change-version="changeVersion"
      class="test-from-app"
  >
    <template>
      <p>This is footer</p>
    </template>
  </FrameworkInfo>
</template>

<script>
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, provide, reactive, ref, watch} from 'vue'
import FrameworkInfo from '../FrameworkInfo'
import AppAlert from './AppAlert'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')
		const alert = ref(false)

		const toggle = () => alert.value = !alert.value
		const close = () => alert.value =  false

    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    console.log('created')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    watch(firstName, (newV, oldV) => {
      console.log(newV)
    })

    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 42
    }

    function changeVersion(num) {
      version.value = num
    }

    provide('name', name)
    provide('version', version)

    return {
      change: changeInfo,
      firstName,
      changeVersion,
			toggle,
			close,
			alert
    }
  },
  components: {FrameworkInfo, AppAlert}
}
</script>

<style scoped>

</style>
