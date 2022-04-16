<template>
    <div class="form-control" :class="{'invalid': error}">
        <label :for="id">{{ label }}</label>
        <input
            type="text"
            :id="id"
            :placeholder="placeholder"
            :value="modelValue"
            @input="change"
        >
        <small style="color: red" v-if="error">{{ error }}</small>
    </div>
</template>

<script>
export default {
    name: "AppInput",
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        error: String,
        label: String,
        placeholder: String
    },
    data() {
        return {
            id: 'input-' + Math.random()
        }
    },
    methods: {
        change(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>