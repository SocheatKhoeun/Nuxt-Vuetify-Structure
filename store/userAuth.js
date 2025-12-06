import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import Cookies from 'js-cookie'; // Added import for js-cookie

export const userAuth = defineStore('userAuth', {
    state: () => ({
        token: Cookies.get('token') || null, // Replaced getCookie with Cookies.get
        user: null, 
        isLoggedIn: false,
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        setToken(token) {
            this.token = token;
            Cookies.set('token', token); // Ensure Cookies is used
        },
        getToken() {
            return Cookies.get('token'); // Ensure Cookies is used
        },
        getUser() {
            return this.user;
        },
        async login(email, password) {
            console.log("email", email);
            console.log("password", password);
            const {$UserPublicAxios} = useNuxtApp(); // Use full Nuxt app instance
            try{
                const response = await $UserPublicAxios.post('/login', {email, password});
                const token = response.data.data['token'];
                this.setToken(token);  
                this.refreshToken(); 
                return response.data; 
            } catch (error){
                throw error;
            }
        },
        logout() {
            this.token = null;
            this.user = null;
            Cookies.remove('token'); // Updated to remove token using Cookies.remove
        },
        async refreshToken() {
            try{
                const {$UserPrivateAxios} = useNuxtApp(); // Use full Nuxt app instance
                const response = await $UserPrivateAxios.post('/refresh-token');
                const token = response.data.data['token'];
                if (!token) {
                    this.logout();
                    return;
                }
                this.setToken(token);
            }catch(error){
                console.log("Refresh Token Error: ", error);
                this.logout();
            }
        },
        async checkTokenExpired() {
            this.token = this.getToken();
            if (!this.token) {
              this.logout();
              return false;
            }
          
            try {
              // Split the JWT token and decode the payload
              const payloadBase64 = this.token.split('.')[1]; // Get the payload part
              const payload = JSON.parse(atob(payloadBase64)); // Decode and parse it
          
              const currentTime = Date.now() / 1000; // Current time in seconds
              if (payload.exp && payload.exp < currentTime) {
                this.logout(); // Token expired, log out the user
                return false;
              }
          
              return true; // Token is valid
            } catch (error) {
              this.logout(); // Logout on invalid token
              return false;
            }
        },
    }
});