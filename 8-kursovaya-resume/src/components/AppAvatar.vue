<template>
    <div class="avatar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "AppAvatar",
    props: {
        imgSrc: String
    }
}
</script>

<style scoped>

</style>