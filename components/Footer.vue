<template>
    <v-footer class="color">
        <v-card elevation="5" rounded="0" width="100%" class="color text-center">
            <v-card-text>
                <v-btn class="mx-4" icon="mdi-heart" variant="plain"></v-btn>
                <v-btn class="mx-4" icon="mdi-email" variant="plain"></v-btn>
                <v-btn class="mx-4" icon="mdi-calendar" variant="plain"></v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>