<template>
    <button
        class="btn"
        :class="color"
        :disabled="disabled"
        @click="$emit('clc')"
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
.del-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 10px;
}
</style>