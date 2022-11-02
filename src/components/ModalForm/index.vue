<template>
    <div class="modal">
        <div class="modal-close" @click="$emit('modalClose')">+</div>
        <form @submit.prevent="addProject">
            <input type="text" v-model="title" placeholder="Название проекта" required>
            <input type="text" v-model="image" placeholder="Фото проекта">
            <input type="text" v-model="link" placeholder="Ссылка на продукт">
            <input type="month" v-model="date" placeholder="Когда велась работа над проектом?" >
            <textarea v-model="text" placeholder="Описание"></textarea>
            <button type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "modal-form",
    data() {
        return {
            title: "",
            image: "",
            text: "",
            link: "",
            date: null,
            tags: []
        }
    },
    methods: {
        addProject() {
            alert("ping");
        }
    }
}
</script>

<style scoped>
    .modal form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>