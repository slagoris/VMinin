<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<script>
export default {
    name: "AppTitle",
    props: {
        text: String
    }
}
</script>

<style scoped>

</style>