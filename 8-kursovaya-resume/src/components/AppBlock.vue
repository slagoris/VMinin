<template>
    <div class="block" v-for="item in items">
        <component :is="item.component">
            <img :src="item.text" alt="avatar" v-if="item.component === 'app-avatar'"/>
            <span v-else>{{ item.text }}</span>
        </component>
    </div>
</template>

<script>
import AppTitle from "@/components/AppTitle";
import AppSubtitle from "@/components/AppSubtitle";
import AppText from "@/components/AppText";
import AppAvatar from "@/components/AppAvatar";

export default {
    name: "AppBlock",
    components: {AppTitle, AppSubtitle, AppText, AppAvatar},
    props: {
        items: Array
    }
}
</script>

<style scoped>

</style>