<template>
  <div class="layout">
    <section class="main" id="home">
      <div class="socials">
        <a href="mailto:muban.sg@gmail.com?subject=Hey There!">
          <Mail />
        </a>
        <a href="https://www.linkedin.com/in/mainak-sengupta-13775b18b/">
          <LinkedIn />
        </a>
        <a href="https://www.github.com/cool-pants">
          <GitHub />
        </a>
      </div>
      <img class="avatar"
        src="https://cdn.discordapp.com/attachments/883271252507262989/995312454445838407/e1086907c901d672aecd1c6b520cfba7.png" />
      <h1 class="header">cool-pants</h1>
      <div class="body">
        My name is Mainak Sengupta. A tech enthusiast and massive lore addict. And this is me
      </div>
    </section>
    <div class="botbar">
      <div class="navbar">
        <NuxtLink to="#about">About me</NuxtLink>
        <NuxtLink to="#work">Stack</NuxtLink>
        <NuxtLink to="/stories/blogslist">Blogs</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </div>
    </div>
    <section id="about">
      <About />
    </section>
    <section id="tech">
      <TechStack />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import LinkedIn from '../components/Assets/LinkedIn.vue';
import GitHub from '../components/Assets/GitHub.vue';
import Key from "~/components/Assets/Key.vue";
import TechStack from '~/components/TechStack.vue';
import Mail from '~/components/Assets/Mail.vue';

var nav: string[] = ['#home', '#about', '#work'];
var count: Number = 0;
</script>

<style src="@/assets/main.css">
</style>
