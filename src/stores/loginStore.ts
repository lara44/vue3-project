import axios from 'axios'
import { defineStore } from 'pinia'

export interface UserLogin {
    username:   string,
    password:   string,
}

interface Login {
  errorLogin:          boolean,
  errorLoginMessages:  string[],
  message:             string,
  token:               string,
  user:                UserLogin
}

export const loginStore = defineStore('login', {
    state: (): Login => {
      return { 
          errorLogin: false,
          errorLoginMessages: [],
          message: '',
          token:   '', 
          user:    {
            username: 'adames.lancero@gmail.com', 
            password: '123456',
          }
        }
    },

    actions: {
      cleanLogin(){
        this.errorLoginMessages = []
      },

      async login() {
        try {
          const response = await axios.post('http://localhost:8081/laravel9/public/api/login', {
              email: this.user.username,
              password: this.user.password
          })
          
          if(response.data.access_token) {
            this.token = response.data.access_token
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['X-Requested-With'] = 'XMLHtpRequest'
            localStorage.setItem('spa_token', this.token)
          }
          return response
        } catch (error: any) {
          this.message = error.message
          return error
        }
      },

      async me(token: string) {
        if (token) {
            this.token = token
        }

        if (!this.token) {
            return
        }

        try {
            const response = await axios.post('http://localhost:8084/laravel9/public/api/auth/me')
            this.user = response.data.user
        } catch (e) {
            console.log("error: ", e)
        }
      },
    },
  })