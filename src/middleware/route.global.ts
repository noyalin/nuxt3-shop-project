import { useMenuStore } from '~/stores'

export default defineNuxtRouteMiddleware(to => {
  const store = useMenuStore()
  const routeName = to.name || ''
  store.setCurrentMenu(routeName)
  // console.log('middleware route from:', to)
  // console.log('middleware route to:', from)
})
