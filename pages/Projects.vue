<template>
  <div class="m-8 flex flex-col justify-center">
    <div class="flex flex-row justify-start mr-10 ml-10 mb-16 items-center gap-3">
      <div class="title text-3xl font-bold">Projects</div>
      <NuxtLink to="/" class="header mr-8 self-center font-bold hover:underline">
        Home
      </NuxtLink>
    </div>

    <div class="flex flex-row container-projects">
      <ul class="flex flex-col">
        <Project v-for="project of store.projectL" :key="project.id" :project='project' />
      </ul>
      <ul class="flex flex-col">
        <Project v-for="project of store.projectR" :key="project.id" :project='project' />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Project from '~/components/Project.vue';
import { useStore } from '../store/projectStore';

const store = useStore();


</script>


<style class="postcss">
body {
  color: var(--fgc);
  font-family: 'JetBrains Mono';
  background: var(--bgc);
}

.container-projects {
  display: flex;
  align-self: center;
  padding: 30px 0;
  width: calc(100% - 10rem);
  background-color: #eee;
  height: fit-content;
  color: #000;
}

.footer {
  background-color: var(--bgc);

}
</style>
