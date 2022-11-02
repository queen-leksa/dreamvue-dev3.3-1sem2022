<template>
    <div class="profile">
        <div class="profile__contacts">
            <profile-picture></profile-picture>
            <h2>{{name}}</h2>
            <div class="profile__item">
                <profile-contacts v-for="(c, i) in contacts" :key="i" :type="c.type" :data="c.value"></profile-contacts>
            </div>
        </div>
        <div class="profile__about">
            <h2>Графический дизайнер</h2>
            <div>
                Возраст:
                <button @click="dec">-</button>
                {{age}}
                <button @click="inc">+</button>
            </div>
            <div class="portfolio">
                <div class="profile__item" v-for="item of projects" :key="item._id">
                    <h2>{{item.title}}</h2>
                    <div class="portfolio__image" :style="{backgroundImage: `url(${item.main_image})`}"></div>
<!--                    <p v-show="item.description">{{item.description}}</p>-->
                    <a :href="item.link" target="_blank" v-show="item.link"></a>
                </div>
                <div class="portfolio__btn" @click="addProject">Add project</div>
            </div>
        </div>
    </div>
</template>

<script>
import Picture from "@/components/Profile/Picture";
import Contacts from "@/components/Profile/Contacts";

export default {
    name: "usr-profile",
    components: {
        "profile-picture": Picture,
        "profile-contacts": Contacts
    },
    // props: ["showPopup"],
    data() {
        return {
            name: "Антон Иванов",
            // contacts: ["+7(123)456-78-90", "lexysnake@gmail.com", "ds:@lekso4ka", "tg:@lekso4ka"]
            contacts: [
                {type: "phone", value: "+7(123)456-78-90"},
                {type: "email", value: "antoshka@ivanov.son"},
                {type: "tg", value: "@antoshka"},
                {type: "vk", value: "https://vk.com/1234567890"}
            ],
            age: 20,
            projects: []
        }
    },
    methods: {
        inc() {
            this.age++;
        },
        dec() {
            this.age > 0 && this.age--
        },
        addProject() {
            this.$emit("showPopup");
        }
    }
}
</script>

<style scoped>
    .profile {
        display: grid;
        grid-template-columns: 30% 1fr;
        width: 1200px;
        margin: auto;
    }
    .profile__contacts {
        background: #222;
        color: #fff;
        padding: 30px;
    }
    .profile__about {
        border: #222 solid 1px;
        padding: 30px;
    }
    .profile__item {
        display: flex;
        flex-direction: column;
    }
    .portfolio {
        padding: 30px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .portfolio__item {
        padding: 30px;
    }
    .portfolio__btn {
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 10px;
        padding: 10px;
    }
</style>