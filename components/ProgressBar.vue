<script setup>
import carr from './Assets/Data/contents';

const onboarding = ref(0);
const length = ref(carr.length);
const content = ref(carr);

const next = () => {
  onboarding.value = onboarding.value + 1 === this.length
    ? 0
    : onboarding.value + 1
}
const prev = () => {
  onboarding.value = onboarding.value - 1 < 0
    ? this.length - 1
    : onboarding.value - 1
}

const src = ref("https://cdn.discordapp.com/attachments/883271252507262989/995312454445838407/e1086907c901d672aecd1c6b520cfba7.png")
</script>

<template>
  <v-card flat tile>
    <v-window v-model="onboarding" reverse>
      <v-window-item v-for="c in content" :key="`card-${c.id}`">
        <v-card height="300">
          <v-row class="fill-height" align="center" justify="center">
            <h1 style="font-size: 2rem;" class="white--text">
              {{ c.header }}
            </h1>
            <p v-html="c.data"></p>
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ isSelected, toggle }">
          <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle">
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<style>
@import url('../assets/colors.css');

.v-row {
  margin: 10px 10px !important;
}
</style>
