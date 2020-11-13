import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: "/",
    name: "contactList",
    component: () => import("../views/list-contact.vue")
  },
  {
    path: "/add",
    name: 'addContact',
    component: () => import("../views/add-contact.vue")

  }
  ,
  {
    path: "/show/:id",
    name: "showcontact",
    component: () => import("../views/show-contact.vue")
  },
  {
    path: "/edit/:id",
    name: "editcontact",
    component: () => import("../views/edit-contact.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
