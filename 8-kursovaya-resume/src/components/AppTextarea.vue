<template>
    <div class="form-control" :class="{'invalid': error }">
        <label >{{label}}</label>
        <textarea
            id="value"
            rows="3"
            :value="modelValue"
            @input="change"
            @keyup.enter="$emit('up-enter')"
        ></textarea>
        <small style="color: red" v-if="error">{{ error }}</small>
    </div>
</template>

<script>
export default {
    name: "AppTextarea",
    props: {
        modelValue: String,
        label: String,
        error: String
    },
    methods: {
        change (event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>