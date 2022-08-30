<script setup lang="ts">
import { ref } from 'vue';
import Content from '@/types/ContentType';
import Heading from '~/types/HeadingType';
import ProgressBar from './ProgressBar.vue';
import contents from './Assets/Data/contents';
import headers from './Assets/Data/headers';


const headings = ref<Heading[]>(headers)

const carr = ref<Content[]>(contents)

</script>

<template>
  <div class="container">
    <h1>About</h1>
    <div class="me">
      <p class="about">Just another guy, trying to learn stuff while trying to not fail miserably. Loves to learn new
        things, teach said stuff and enjoy cuisines and food. Below is my Coding journey summarised.</p>
    </div>
    <ProgressBar :headings='headings' :carr="carr" />
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 40rem);
  background-color: rgb(255, 255, 255);
  color: #000;
  height: 100vh;
}

.about {
  padding: 10px 45px;
  color: var(--bgc);
  font-size: 25px;
}

h1 {
  color: var(--bgc);
  font-weight: 400;
  text-decoration: none;
  text-shadow: none;
  font-family: 'Sofia';
  font-size: 3rem;
}

strike {
  text-decoration: line-through;
}

.latin {
  font-family: 'Sofia';
}

.some-pad-top {
  padding-top: 200px;
}
</style>
