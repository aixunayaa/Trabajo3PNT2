import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioView from '../views/FormularioView.vue'
import UsuariosView from '../views/usuariosView.vue' 

Vue.use(VueRouter) 

const routes = [
  {
    path: '/', 
    name: 'Formulario',
    component: FormularioView
  },
  {
    path: '/usuarios', 
    name: 'Usuarios',
    component: UsuariosView 
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes 
})

export default router