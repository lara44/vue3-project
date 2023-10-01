<template>
    <v-app id="inspire">
      <v-app-bar color="#324c6e" density="compact">
        <v-app-bar-nav-icon @click="drawer = !drawer" color="#FDD5A8"></v-app-bar-nav-icon>
        <v-img max-height="50" max-width="90" src="../src/assets/neocode.png" alt="Vuetify"></v-img>
        <!-- <v-toolbar-title>Application</v-toolbar-title> -->
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" floating permanent class="navigation-drawer" density="compact">
        <v-list nav density="compact">
            <v-list-item link prepend-icon="mdi-home-city mdi-18px" title="Home" style="color: #324c6e;"></v-list-item>
            <v-list-group  color="red" active-color="red">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-account mdi-18px"
                        title="Admin"
                        value="Admin"
                        style="color: #324c6e !important;"
                    ></v-list-item>
                </template>
                <v-list-item
                    link
                    style="font-size: 10px !important"
                    prepend-icon="mdi-account-group-outline mdi-18px"
                    title="Users"
                    to="/users"
                    color="#324c6e"
                ></v-list-item>
                <v-list-item
                    link
                    style="font-size: 10px !important"
                    prepend-icon="mdi-account-details mdi-18px"
                    title="Roles"
                    color="#324c6e"
                ></v-list-item>
            </v-list-group>
            <v-list-item 
            link prepend-icon="mdi-logout-variant mdi-18px" 
            title="Logout" 
            @click="loginStore.logout"
            style="color: #324c6e;"
            ></v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main class="main-background">
        <v-container>
            <router-view/>
        </v-container>
      </v-main>
      
      <v-footer
        color="#ccc"
        app
        dense
      >  
        <span class="black--text text-body-2"><v-icon color="#324c6e">mdi-orbit mdi-spin mdi-18px</v-icon> Neocode - Neiva, Huila &copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
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


.main-background {
    background:
        /* radial-gradient(#324c6e 4%, transparent 1%) 0 0, */
        radial-gradient(#324c6e 9%, transparent 13%) 0 0;
        /* radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
        radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px; */
        background-color:#fdfeff;
        background-size:4px 4px;
}
.navigation-drawer {
    background: #f0f2f4;
}
</style>