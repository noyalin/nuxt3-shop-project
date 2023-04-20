import { defineStore } from 'pinia'

const USERINFO = {
  name: 'noya',
  id: 18,
  sex: 'female',
}

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = reactive(USERINFO)

  return {
    userInfo,
  }
})
