<template>
    <div class="modal">
        <form>
            Создать форму для добавления портфолио.
            {
                title: "" => required,
                main_image: "" => если пустая, предусотреть картику-заглушку,
                description: "",
                link: "",
                date: new Date(2022, 0, 1),
                tags: []
            }
        </form>
    </div>
</template>

<script>
export default {
    name: "modal-form"
}
</script>

<style scoped>

</style>