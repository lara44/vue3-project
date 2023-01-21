import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router'

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

export const useLoginStore = defineStore('login', {
    state: (): Login => {
      return { 
          errorLogin: false,
          errorLoginMessages: [],
          message: '',
          token:   '', 
          user:    {
            username: 'adames.lancero@gmail.com', 
            password: '1234567890',
          }
        }
    },

    actions: {
      cleanLogin(){
        this.errorLoginMessages = []
      },

      async login() {
        try {
          const axiosInstance = axios.create({
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          });

          const response = await axiosInstance.post('http://localhost:8084/laravel9/public/api/login', {
              email: this.user.username,
              password: this.user.password
          })
          
          if(response.data.access_token) {
            this.token = response.data.access_token
            localStorage.setItem('spa_token', this.token)
            this.setHeaders();
            axios.defaults.headers.common['X-Requested-With'] = 'XMLHtpRequest'
          }
          return response
        } catch (error: any) {
          this.message = error.message
          return error
        }
      },

      async getAuth(token: string) {
        console.log("entro getAuth",token)
        if (token) {
            this.token = token
        }

        if (!this.token) {
            return
        }

        try {
            this.setHeaders();
            const response = await axios.get('http://localhost:8084/laravel9/public/api/auth/me')
            this.user = response.data.user
        } catch (e) {
            console.log("error: ", e)
        }
      },

      async logout() {
        localStorage.removeItem("spa_token");
        this.token = ''
        router.push({name: 'login'})
      },

      async setHeaders() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHtpRequest'
      }
    },
  })