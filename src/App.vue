<!--
    TODO: Мы хотим создать сервис по поиску графических дизайнеров / художников
    Что должен делать сервис?
        Дизайнер регистрируется на сайте и заполняет свой профиль. - Что должно быть в профиле? (Портфолио)
            - кто я
            - мои работы (картинки / описание)
            - моя автобиография
            - мои навыки
        Пользователь хочет найти дизайнера - ищет по фильтрам, выбирает страницу дизайнера, смотрит портфолио, пишет в чат дизайнеру

    Надо:
        Найти похожие сайты оказания фриланс-услуг (по специализации художника)
        Найти положительные и отрицательные моменты во всех подобных сайтах
        Список этих моментов выложить в канале группы:
            Картинка (скриншот) + комментарий
        Можно искать как по реальным сайтам, так и по сервисам с дизайном

-->

<!--<template>-->
<!--    <h1>{{title}}</h1>-->
<!--    <div class="cards">-->
<!--        <my-card v-for="d in days" v-bind:text="d" v-bind:key="d"></my-card>-->
<!--    </div>-->
<!--</template>-->

<template>
    <header>
        <button v-on:click="modalOpen">click</button>
        <router-link to="/">Home</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/auth">LogIn</router-link>
    </header>
    <main-container></main-container>
    <div class="modal-wrapper" :style="{display: modalActivity ? 'flex' : 'none'}">
        <div class="modal">
            ^_^
            <div class="modal-close" @click="modalClose">+</div>
        </div>
    </div>
</template>

<script>
    // import Card from "./components/Card/index.vue";
    import MainContainer from "@/components/Main";
    export default {
        name: "App",
        components: {
            MainContainer
        },
        data() {
            return {
                title: "Графика / здание",
                days: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                modalActivity: false
            }
        },
        methods: {
            modalOpen() {
                this.modalActivity = true;
            },
            modalClose() {
                this.modalActivity = false;
            }
        }
    }
</script>
<style>
    body {
        margin: 0;
    }
    header {
        display: flex;
        gap: 10px;
    }
    h1 {
        color: red;
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(4, 120px);
        gap: 20px;
    }
    .modal-wrapper {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        background-color: #0004;
        /*backdrop-filter: blur(1px);*/
    }
    .modal {
        background-color: #fff;
        padding: 70px;
        border-radius: 8px;
        position: relative;
    }
    .modal-close {
        position: absolute;
        top: 6px;
        right: 10px;
        line-height: 1;
        transform: rotate(45deg);
        cursor: pointer;
    }
</style>