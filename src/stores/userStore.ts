import { defineStore } from "pinia";
import { HttpClient } from "../services/httpClient";

const http = new HttpClient();

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      listUsers: Array<User>,
      user: {
        id: "",
        name: "",
        email: "",
        created_at: "",
      } as User,
    };
  },

  actions: {
    async getUsers() {
      try {
        const url = "http://localhost:8084/laravel9/public/api/auth/users";
        const response = await http.get(url);
        if (response.data.users) {
          this.listUsers = response.data.users.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
