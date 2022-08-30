<template>
  <v-card>
    <v-row class="mb-4" align="center">
      <v-avatar>
        <GitHub :href="props.project.slug" />
      </v-avatar>
      <v-card-title>
        {{ props.project.title }}
      </v-card-title>
    </v-row>
    <v-card-subtitle>
      {{ props.project.created }}
    </v-card-subtitle>

    <v-card-text>
      {{ props.project.desc }}
    </v-card-text>

    <div class="pa-4">
      <v-chip class="ma-2" variant="outlined" color="var(--bgc)" v-for="tag in props.project.tags" :key="tag">
        {{ tag }}
      </v-chip>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import TileData from '~/types/TileDataType';
import GitHub from './Assets/GitHub.vue';

const props = defineProps<{
  project: TileData
}>()
</script>

<style>
@import url("@/assets/colors.css");
</style>
