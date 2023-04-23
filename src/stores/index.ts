import { defineStore } from 'pinia'
import { RouteRecordName } from 'vue-router'

const USER_INFO = {
  name: 'noya',
  id: 18,
  sex: 'female',
}

const MENU_LIST = [
  {
    title: '首页',
    route: 'index',
  },
  {
    title: '列表',
    route: 'list',
  },
]

export const useGlabalStore = defineStore('loadingInfo', () => {
  const isFullLoading = ref<boolean>(false)

  function setFullLoading(value: boolean) {
    isFullLoading.value = value
  }

  return {
    isFullLoading,
    setFullLoading,
  }
})

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = reactive(USER_INFO)
  const menuList = reactive(MENU_LIST)

  return {
    userInfo,
    menuList,
  }
})

export const useMenuStore = defineStore('menuInfo', () => {
  const menuList = reactive(MENU_LIST)
  const currentMenu = ref<RouteRecordName>('index')

  function setCurrentMenu(name: RouteRecordName): void {
    currentMenu.value = name
  }

  return {
    menuList,
    currentMenu,
    setCurrentMenu,
  }
})
