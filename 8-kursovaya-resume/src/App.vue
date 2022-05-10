<template>
    <div class="container column">
        <form class="card card-w30" @submit.prevent="submitHandler">
            <app-select v-model="blockType" label="Тип блока"/>
            <app-textarea
                v-model="textAreaValue"
                label="Значение"
                :error="errors.textAreaValue"
                @upEnter="submitHandler"
            />
            <app-button
                color="primary"
                :disabled="textAreaValue.length < 3"
            >
                Добавить
            </app-button>
        </form>
        <div class="card card-w70">
            <app-block
                :item="item" v-for="(item, idx) in blocks"
                @del="delBlock(idx)"
            />

            <h3 v-if="blocks.length === 0">
                Добавьте первый блок, чтобы увидеть результат
            </h3>
        </div>
    </div>
    <div class="container">
        <p>
            <app-button
                color="primary"
                @click="loadComments"
            >Загрузить комментарии</app-button>
        </p>
        <app-comments :comments="comments" v-if="comments.length"/>
        <app-loader v-if="loading"/>
    </div>
</template>

<script>
import AppLoader from "@/components/AppLoader";
import AppComments from "@/components/AppComments";
import AppSelect from "@/components/AppSelect";
import AppTextarea from "@/components/AppTextarea";
import AppButton from "@/components/AppButton";
import AppBlock from "@/components/AppBlock";
import axios from "axios"

export default {
    components: {
        AppBlock,
        AppButton, AppTextarea, AppSelect, AppComments, AppLoader},
    emits: [],
    data() {
        return {
            textAreaValue: '',
            blockType: 'title',
            loading: false,
            blocks: [],
            comments: [],
            errors: {
                textAreaValue: null
            }
        }
    },
    mounted() {},
    methods: {
        formIsValid() {
            let isValid = true
            if (this.textAreaValue.length > 150) {
                this.errors.textAreaValue = 'max 150 символов'
                isValid = false
            } else {
                this.errors.textAreaValue = null
            }
            return isValid
        },
        submitHandler() {
            if (this.formIsValid()) {
                this.addBlock()
            }
        },
        addBlock () {
            let obj = {}
            obj.component = this.componentName
            obj.text = this.textAreaValue
            this.blocks.push(obj)
            this.textAreaValue = ''
            this.blockType = 'title'
        },
        delBlock (idx) {
            this.blocks.splice(idx, 1)
        },
        loadComments () {
            this.loading = true
            setTimeout(async () => {
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42.json')
                this.comments = data
                this.loading = false
            }, 800)
        }
    },
    computed: {
        componentName () {
                return 'app-' + this.blockType
        }
    },
}
</script>

<style lang="scss">
.form-control.invalid {
    input, textarea {
        border-color: red;
    }
}
.avatar {
    display: flex;
    justify-content: center;
}

.avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
}
</style>
