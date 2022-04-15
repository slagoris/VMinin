<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <app-button
            @action="open"
        >
            {{isNewsOpen ? 'Закрыть' : 'Открыть'}}
        </app-button>
        <app-button
            color="danger"
            v-if="wasRead"
            @action="$emit('unmark', id)"
        >
            Отметить непрочитанной
        </app-button>
        <div v-if="isNewsOpen">
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nobis?</p>
            <app-button
                v-if="!wasRead"
                color="primary"
                @action="mark"
            >Прочесть новость</app-button>
            <app-news-list ></app-news-list>
        </div>
    </div>
</template>

<script>
import AppButton from "./AppButton";
import AppNewsList from "@/AppNewsList";
export default {
    name: "AppNews",
    components: {AppNewsList, AppButton},
    emits: ['open-news', 'read-news', 'unmark'],
    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
            // validator(value) {
            //     console.log(value)
            //     return true
            // }
        },
        wasRead: Boolean
    },
    data() {
        return {
            isNewsOpen: this.isOpen
        }
    },
    methods: {
        open () {
            this.isNewsOpen =! this.isNewsOpen
            if (this.isNewsOpen) {
                this.$emit('open-news')
            }
        },
        mark () {
            this.isNewsOpen = false
            this.$emit('read-news', this.id)
        },
        // unmark () {
        //     this.$emit('unmark', this.id)
        // }
    }
}
</script>

<style scoped>

</style>