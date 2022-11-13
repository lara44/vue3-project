<template>
    <v-container fluid class="container-principal">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-toolbar color="#324c6e" dark flat>
              <v-img
                style="left: 25px;"
                max-height="50"
                max-width="130"
                src="../src/assets/neocode.png"
                alt="Vuetify"
              ></v-img>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Email"
                  name="email"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="login.user.username"
                ></v-text-field>
  
                <v-text-field
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="login.user.password"
                ></v-text-field>
                <div
                  style="color: red; text-align: center"
                  v-for="error in login.errorLoginMessages"
                  :key="error"
                >
                  <span>{{ error }}</span
                  ><br />
                </div>
  
                  <pre>{{ login.user }}</pre>
                  <pre>{{ login.errorLoginMessages }}</pre>
                  <pre>{{ login.token }}</pre>
                  <pre>{{ login.message}}</pre>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="font-weight-bold"
                color="#324c6e"
                text
                @click="onLogin()"
              >
                <v-icon>mdi-arrow-right-bold mdi-24px</v-icon>Ingresar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { loginStore } from '../stores/loginStore';

  const login = loginStore();
  const router = useRouter()
//   const { message, token, user, errorLoginMessages, loginUser } = useLogin();

  const validateCredentials = () => {
        login.cleanLogin()
        if(!login.user?.username) login.errorLoginMessages.push("Ingrese email");
        if(!login.user?.password) login.errorLoginMessages.push("Ingrese password");
        if(login.errorLoginMessages.length > 0) login.errorLogin = true;
        return login.errorLogin;
    };

    const onLogin = async () => {
        if(validateCredentials()) {
            return
        }
     
        login.login().then((response: any) =>{
            console.log(response)
            if(response.status === 201) {
            router.push({
                name: 'home'
            })
            }
        })
  }
  </script>
  
  <style>
  .container-principal {
    min-height: 100vh;
    background: #eceff1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>