<template>
  <v-app class="color">
    <Navbar1 :title="data.name" :permanent="true" :image="data.img" />
    <v-card flat class="content color" height="100%" tile>
      <ContentDoc :value="data" class="color">
        <ContentRenderer :value="data" class="color" />
      </ContentDoc>
    </v-card>
    <Footer1 />
  </v-app>
</template>

<script setup lang="ts">
import Navbar1 from '~~/components/Navbar.vue';
import Footer1 from '~~/components/Footer.vue';

const route = useRoute();
const data = await queryContent("stories", route.params.slug[0]).findOne()
console.log(data)
</script>

<style>
.content {
  padding-top: 80px;
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: start;
  align-self: flex-end;
  margin-right: 50px;
}

.v-navigation-drawer {
  width: calc(50% - 5rem) !important;
}

.v-footer {
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: start;
  align-self: flex-end;
  margin-right: 50px;
}

p {
  padding: 5px 0px;
}

h2 {
  font-size: 30px;
  font-weight: 700;
  margin-top: 30px;
}

p img {
  margin-top: 10px;
}

h3 {
  font-size: 20px;
  margin-top: 20px;
  font-weight: 600;
}
</style>