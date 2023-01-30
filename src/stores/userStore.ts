import { defineStore } from "pinia"
import axios from "axios";
import { setTransitionHooks } from "vue";

export interface objectListUser{
    id:string; name: string; email: string;
}[]

export interface User {
    listUsers: Array<objectListUser>;
    user: {id:string; name:string; email:string};
}

export const useUserStore = defineStore('userStore', {
    state: (): User => {
        return {
            listUsers: [],
            user: {
                id: '',
                name: '',
                email: '',
            }
        } 
    }, 

    actions: {
        async getUsers(){
            try {
                console.log("entró")
                const response = await axios.get('http://localhost:8084/laravel9/public/api/auth/users')
                if(response.data.users){
                    this.listUsers =  response.data.users.data
                    console.log("respuesta", response.data.users.data, this.listUsers)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})