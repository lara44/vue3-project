<template>
    <v-layout>
        <v-app-bar color="#324c6e" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" color="#FDD5A8"></v-app-bar-nav-icon>
            <v-img max-height="55" max-width="100" src="../src/assets/neocode.png" alt="Vuetify"></v-img>
            <!-- <v-toolbar-title class="title">NEW SPA</v-toolbar-title> -->
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" floating permanent>
            <v-list nav dense>
                <v-list-item link prepend-icon="mdi-home-city mdi-18px" title="Home"></v-list-item>
                <v-list-group dense>
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            prepend-icon="mdi-account mdi-18px"
                            title="Admin"
                            value="Admin"
                        ></v-list-item>
                    </template>
                    <v-list-item
                        link
                        style="font-size: 10px !important"
                        prepend-icon="mdi-account-group-outline mdi-18px"
                        title="Users"
                    ></v-list-item>
                    <v-list-item
                        link
                        style="font-size: 10px !important"
                        prepend-icon="mdi-account-details mdi-18px"
                        title="Roles"
                    ></v-list-item>
                </v-list-group>
                <v-list-item link prepend-icon="mdi-logout-variant mdi-18px" title="Logout" @click="loginStore.logout"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main style="background: #ECEFF1; min-height: 100vh;">
            <pre>{{ loginStore.user }}</pre>
            <p>token: {{ loginStore.token }}</p>

            <v-footer dense bottom absolute width="100%">
                <span
                    style="color: #324c6e !important; font-weight: 400;"
                >Neocode — &copy; {{ new Date().getFullYear() }}</span>
            </v-footer>
        </v-main>
    </v-layout>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import { useLoginStore } from '../stores/loginStore'

const loginStore = useLoginStore();
const drawer = ref(true)

watch(
    () => drawer,
    () => {
        drawer.value = false
    }
)
</script>

<style scoped>
.title {
    color: #fff;
}
</style>