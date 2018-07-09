import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Service from '@/components/Service'
import Commande from '@/components/Commande'
import Contact from '@/components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/commande',
      name: 'Commande',
      component: Commande
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
