<template>
    <hr/>
    <h4>{{title}}</h4>
    <ul>
        <li v-for="item in news" :key="item.id">
            {{ item.title }} <span v-if="item.wasRead">!!!</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "AppNewsList",
    emits: [],
    inject: ['title', 'news'],
    data () {
        return {

        }
    },
    methods: {

    },
}
</script>

<style scoped>

</style>