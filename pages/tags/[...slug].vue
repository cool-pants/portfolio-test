<template>
    <v-app>
        <Navbar1 :navLinks="tags" :permanent="false" />
        <v-card flat width="calc(100%)" height="100%" tile>
            <v-sheet dark class="main">
                <h1>{{ data.name }}</h1>
                <p>{{ data.description }}</p>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script setup lang="ts">
import Navbar1 from '~~/components/Navbar.vue';
import Nav from '~~/types/TagType';

const route = useRoute();
const data = await queryContent("tags", route.params.slug[0]).findOne()
const tagsParsed = await queryContent("tags").only(["id", "name", "_path"]).find()

const tagsConverted = Object.entries(tagsParsed).map(([key, value]) => ({ ["id"]: key, ...value }))

const toNav = (t: any): Nav[] => {
    let a: Nav[] = [];
    for (const i of t) {
        a.push({ id: i.id, _path: i._path, title: i.name });
    }
    return a
}

const tags: Nav[] = toNav(tagsConverted)

console.log(tags)
console.log(data)
</script>

<style>
@import url('@/assets/main.css');

.avatar {
    margin-bottom: 30px;
}

.v-sheet {
    background-color: var(--bgc) !important;
    color: var(--fgc) !important;
}

body {
    color: var(--fgc);
    font-family: 'JetBrains Mono';
    background: var(--bgc);
}
</style>