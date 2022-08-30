<template>
  <div class="container flex flex-col gap-10 justify-center content-center items-center">
    <div class="font-extrabold text-3xl font mt-3">TechStack</div>
    <pics class="flex flex-col tech gap-6">
      <div class="flex flex-row justify-around text-white gap-2">
        <Vue />
        <Cpp />
        <Csharp />
        <Django />
        <Figma />
        <Firebase />
      </div>
      <div class="flex flex-row justify-around text-white gap-3">
        <Golang />
        <Hugo />
        <Javascript />
        <Nodejs />
        <Nuxt />
      </div>
      <div class="flex flex-row justify-around text-white gap-2">
        <Postgres />
        <Python />
        <SCSS />
        <SQL />
        <Tailwind />
        <Typescript />
      </div>
    </pics>
  </div>
</template>

<script setup lang="ts">
import Vue from './Assets/Vue.vue';
import Cpp from './Assets/Cpp.vue';
import Csharp from './Assets/Csharp.vue';
import Django from './Assets/Django.vue';
import Figma from './Assets/Figma.vue';
import Firebase from './Assets/Firebase.vue';
import Golang from './Assets/Golang.vue';
import Hugo from './Assets/hugo.vue';
import Javascript from './Assets/Javascript.vue';
import Nodejs from './Assets/Nodejs.vue';
import Nuxt from './Assets/nuxt.vue';
import Postgres from './Assets/Postgres.vue';
import SCSS from './Assets/SCSS.vue';
import SQL from './Assets/SQL.vue';
import Tailwind from './Assets/Tailwind.vue';
import Typescript from './Assets/Typescript.vue';
import Python from './Assets/Python.vue';
</script>

<style scoped>
.font {
  font-family: 'Sofia';
}

.container {
  width: calc(100% - 40rem);
  background-color: rgb(255, 255, 255);
  color: #000;
  height: 100vh;
}

.tech {
  font-size: 30px;
  background-color: var(--bgc);
  max-height: 500px;
  min-width: 600px;
  margin: 20px;
  padding: 30px 10px;
  border-radius: 10px;
}
</style>
