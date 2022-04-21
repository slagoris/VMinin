<template>
    <div class="form-control">
        <label>{{ label }}</label>
        <select
            id="type"
            :value="modelValue"
            @input="change"
        >
            <option value="title">Заголовок</option>
            <option value="subtitle">Подзаголовок</option>
            <option value="avatar">Аватар</option>
            <option value="text">Текст</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "AppSelect",
    props: {
        modelValue: String,
        label: String,
        error: String
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