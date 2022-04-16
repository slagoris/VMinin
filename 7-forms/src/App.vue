<template>
    <div class="container">
        <form class="card" @submit.prevent="submitHandler">
            <h1>Анкета на Vue разработчика!</h1>
<!--            <div class="form-control" :class="{'invalid': errors.name}">-->
<!--                <label for="name">Как тебя зовут?</label>-->
<!--                <input-->
<!--                    type="text"-->
<!--                    id="name"-->
<!--                    placeholder="Введи имя"-->
<!--                    v-model.trim="name"-->
<!--                >-->
<!--                <small style="color: red" v-if="errors.name">{{ errors.name }}</small>-->
<!--            </div>-->
            <app-input
                placeholder="Введи имя"
                :error="errors.name"
                label="Как тебя зовут?"
                v-model="name"
            />
            <div class="form-control">
                <label for="age">Выбери возраст</label>
                <input
                    type="number"
                    id="age"
                    max="70"
                    v-model.number="age"
                >
            </div>

            <div class="form-control">
                <label>Твой город</label>
                <select id="city" v-model="city">
                    <option value="spb">Санкт-Петербург</option>
                    <option value="msk">Москва</option>
                    <option value="kzn">Казань</option>
                    <option value="nsk">Новосибирск</option>
                </select>
            </div>

            <div class="form-checkbox">
                <span class="label">Готов к переезду в Токио?</span>
                <div class="checkbox">
                    <label><input type="radio" name="trip" v-model="relocate" value="yes"/> Да</label>
                </div>

                <div class="checkbox">
                    <label><input type="radio" name="trip" v-model="relocate" value="no"/> Нет</label>
                </div>
            </div>

            <div class="form-checkbox">
                <span class="label">Что знаешь во Vue?</span>
                <div class="checkbox">
                    <label><input type="checkbox" name="skills" v-model="skills" value="vuex"/>Vuex</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="skills" v-model="skills" value="cli"/>Vue CLI</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="skills" v-model="skills" value="router"/>Vue Router</label>
                </div>
            </div>
            <div class="form-checkbox">
                <span>Правила</span>
                <div class="checkbox">
                    <label><input type="checkbox" v-model="agree"/> Согласен</label>
                </div>
            </div>
            <button
                type="submit"
                class="btn primary"
                :disabled="!agree"
            >Отправить
            </button>
        </form>
    </div>
</template>

<script>
import AppInput from "@/AppInput";

export default {
    components: {AppInput},
    data() {
        return {
            name: '',
            age: 23,
            city: 'nsk',
            relocate: null,
            skills: [],
            agree: true,
            errors: {
                name: null
            }
        }
    },
    methods: {
        formIsValid() {
            let isValid = true
            if (this.name.length === 0) {
                this.errors.name = 'Имя не может быть пустым'
                isValid = false
            } else {
                this.errors.name = null
            }
            return isValid
        },
        submitHandler(event) {
            if (this.formIsValid()) {
                console.group('Form Data')
                console.log('Name', this.name)
                console.log('Age', this.age)
                console.log('City', this.city)
                console.log('To Tokyo', this.relocate)
                console.log('Skills', this.skills)
                console.log('Agree', this.agree)
                console.groupEnd()
            }
        }
    },
}
</script>

<style lang="scss">
.form-control.invalid {
    input {
        border-color: red;
    }
}
</style>
