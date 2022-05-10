<template>
    <div class="block">
        <app-button
            color="danger"
            class="del-btn"
            @clc="$emit('del')"
        >
            &#10005;</app-button>
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
import AppButton from "@/components/AppButton";

export default {
    name: "AppBlock",
    components: {AppButton, AppTitle, AppSubtitle, AppText, AppAvatar},
    props: {
        item: Object
    }
}
</script>

<style lang="scss">
.block {
    position: relative;
    &:hover {
        .del-btn {
            visibility: visible;
        }
    }
    .del-btn {
        visibility: hidden;
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 5px;
    }
}
</style>