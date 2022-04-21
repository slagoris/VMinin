<template>
    <button
        class="btn"
        :class="color"
        :disabled="disabled"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        color: String,
        disabled: Boolean
    }
}
</script>

<style scoped>

</style>