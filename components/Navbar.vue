<template>
    <v-app-bar prominent class="color">
        <v-app-bar-nav-icon v-if="!props.permanent" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <NuxtLink to="/">
            <v-avatar v-if="!drawer">
                <v-img :src="src"></v-img>
            </v-avatar>
        </NuxtLink>

        <v-app-bar-title v-if="props.title">{{ props.title }}</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer :image="props.image" class="main color" v-model="drawer" bottom temporary
        :permanent="props.permanent">
        <v-list nav dense>
            <NuxtLink to="/">
                <v-avatar class="avatar" size="x-large">
                    <v-img :src="src"></v-img>
                </v-avatar>
            </NuxtLink>
        </v-list>
        <v-list nav dense :class="`${props.permanent}`">
            <h3>Content</h3>
        </v-list>
        <v-list nav dense :class="`${props.permanent}`" v-if="props.navLinks !== null" v-for="tag of props.navLinks"
            :key="tag.id">
            <NuxtLink :to="tag._path">
                {{ tag.title }}
            </NuxtLink>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import Nav from '~~/types/TagType';

const props = defineProps<{
    navLinks?: Nav[] | null,
    title?: string,
    permanent: boolean,
    image?: string,
}>();

console.log(props.image)

const drawer = ref<boolean>(props.permanent);
const group = ref(null);

const src = ref<string>("https://cdn.discordapp.com/attachments/883271252507262989/995312454445838407/e1086907c901d672aecd1c6b520cfba7.png");

watch(group, () => {
    drawer.value = false;
})
</script>

<style>
@import url("@/assets/colors.css");

.color {
    background-color: var(--bgc) !important;
    color: var(--fgc) !important;
}

.main {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
}

.true {
    color: var(--bgc) !important;
}
</style>