<template>
    <div class="container pt-1">
        <div class="card">
            <h2>Актуальные новости {{ now }}</h2>
            <span>Открыто: {{ openRate }}</span> | <span>Прочитано: {{ readRate }}</span>
        </div>
        <app-news
            v-for="item in news"
            :key="item.id"
            :title="item.title"
            :id="item.id"
            :is-open="item.isOpen"
            :was-read="item.wasRead"
            @open-news="openNews"
            @read-news="readNews"
            @unmark="unreadNews"
        ></app-news>
    </div>
</template>

<script>

import AppNews from "@/AppNews";
export default {
    name: 'App',
    components: { AppNews },
    data() {
        return {
            now: new Date().toLocaleDateString(),
            openRate: 0,
            readRate: 0,
            news: [
                {
                    title: 'Джо байден победил на выборах США',
                    id: 1,
                    isOpen: false,
                    wasRead: false
                },
                {
                    title: 'Вуй успешно работает',
                    id: 2,
                    isOpen: false,
                    wasRead: false
                }
            ],
        }
    },
    provide() {
        return {
            title: 'Список всех новостей',
            news: this.news
        }
    },
    methods: {
        openNews (data) {
            this.openRate++
        },
        readNews (id) {
            const idx = this.news.findIndex(news => news.id === id)
            this.news[idx].wasRead = true
            this.readRate++
        },
        unreadNews (id) {
            const news = this.news.find(news => news.id === id)
            news.wasRead = false
            this.readRate--
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    color: darkred;
}
</style>
