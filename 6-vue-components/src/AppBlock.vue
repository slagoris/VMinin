<template>
    <div class="card">
        <slot name="header"></slot>
        <slot>no text</slot>
        <div v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppBlock",

}
</script>

<style scoped>

</style>