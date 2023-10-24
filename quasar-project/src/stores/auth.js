import { defineStore } from 'pinia';
import {api} from "boot/axios";
import { LocalStorage } from 'quasar'

export const useAuthStore = defineStore('Auth', {
  state: () => ({
    token: LocalStorage.getItem('token'),
    user: LocalStorage.getItem('user'),
  }),
  getters: {
    getToken: (state) => state.token
  },
  actions: {
    async login(credentials){
      let result = false
      await api
        .post('/token', {
          email: credentials.email,
          password: credentials.password,
          device_name: 'Browser',
        })
        .then(async (res) => {
          this.token = res.data
          LocalStorage.set('token', this.token)
          await this.getUser()
          result = true
        })
        .catch(err => {
          console.error(err)
        })
      return result
    },
    async getUser(){
      await api
        .get('/user', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        .then((res) => {
          this.user = res.data
          LocalStorage.set('user', this.user)
        })
        .catch(err => {
          console.error(err)
        })
    },
    logout(){
      this.setProperty('token')
      this.setProperty('user')
    },
    setProperty(key, val){
      this[key] = val
      if(val)
        LocalStorage.set(key, val)
      else
        LocalStorage.remove(key)
    }
  },
});
