<template>
    <div class="container pt-1">
        <div class="card">
            <h2>Динамические и асинхронные компоненты</h2>

            <app-button
                ref="myBtn"
                :color="oneColor" @action="active = 'one'"
            >One</app-button>
            <app-button
                :color="twoColor"
                @action="active = 'two'"
            >Two</app-button>
        </div>
        <keep-alive>
            <component :is="componentNAme"></component>
        </keep-alive>
    </div>
</template>

<script>

import AppButton from "@/AppButton";
import AppTextOne from "@/AppTextOne";
import AppTextTwo from "@/AppTextTwo";
export default {
    name: 'App',
    components: {AppTextTwo, AppTextOne, AppButton },
    data() {
        return {
            active: 'one'
        }
    },

    methods: {

    },
    computed: {
        // componentNAme() {
        //     return
        // },
        componentNAme: {
            get() {
                return 'app-text-' + this.active
            },
            set() {
                console.log('componentName', value)
            }
        },
        oneColor() {
            return this.active === 'one' ? 'primary' : ''
        },
        twoColor() {
            return this.active === 'two' ? 'primary' : ''
        }
    }
}
</script>

<style lang="scss" >
</style>
