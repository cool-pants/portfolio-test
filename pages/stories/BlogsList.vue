<template>
  <div class="m-8 flex flex-col justify-center">
    <div class="flex flex-row justify-start mr-10 ml-10 mb-16 items-center gap-3">
      <div class="title text-3xl font-bold">Blogs</div>
      <NuxtLink to="/" class="header mr-8 self-center font-bold hover:underline">
        Home
      </NuxtLink>
    </div>

    <ul class="grid-pair3">
      <v-skeleton-loader v-for="story of stories" :key="story._path" transition="scale-transition" height="94"
        type="list-item-two-line">
        <v-card class="mx-auto" max-width="500">
          <v-img class="white--text align-end title-image" :src="story.img">
            <v-card-title>{{ story.name }}</v-card-title>
          </v-img>
          <v-card-actions>
            <v-btn color="var(--bgc)" text @click="reveal = true">
              More
            </v-btn>
            <v-btn color="var(--bgc)" text>
              <a :href="story._path">Explore</a>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal flex content-around"
              style="height: 100%;">
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Description
                </p>
                <p>{{ story.description }}</p>
              </v-card-text>
              <v-card-actions class="pt-0 align-end">
                <v-btn text color="var(--bgc) accent-4" @click="reveal = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-skeleton-loader>
    </ul>
    <span class="fixed bottom-0 w-full footer">
      <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
      <ul class="flex flex-wrap mb-7 text-center">
        <li v-for="tag of tags" :key="tag._path" class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center">
          <NuxtLink :to="`${tag._path}`" class="">
            <p class="font-bold text-gray-600 uppercase tracking-wider text-ss">
              {{ tag.name }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </span>
  </div>
</template>

<script setup lang="ts">
const stories = await queryContent('stories')
  .only(["name", "description", "img", "_path", "author"])
  .sort({ createdAt: -1 })
  .find()

console.log(stories);

const tags = await queryContent('tags')
  .only(["name", "description", "_path"])
  .sort({ createdAt: 1 })
  .find();

const reveal = ref<Boolean>(false);
</script>


<style class="postcss">
body {
  color: var(--fgc);
  font-family: 'JetBrains Mono';
  background: var(--bgc);
}

.grid-pair3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}

.transition-fast-in-fast-out {
  transition: 0.5s ease-in-out;
}

.v-card {
  display: flex;
  flex-direction: column;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.container-blogs {
  display: flex;
  align-self: center;
  padding: 30px 0;
  width: calc(100% - 10rem);
  background-color: #eee;
  color: #000;
  height: 100vh;
}

.white--text {
  color: white;
}
</style>
