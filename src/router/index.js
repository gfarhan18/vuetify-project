// router.js
import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../views/DashboardPage.vue'
import LoginPage from '../views/LoginPage.vue' // Import the LoginPage component
import DeviceDashboard from '../views/DeviceDashbaord.vue' // Import the LoginPage component
import DataDashboard from '../views/DataDashboard.vue' // Import the LoginPage component


const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardPage
  },
  {
    path: '/login', // Add a route for the login page
    name: 'login',
    component: LoginPage
  },
  {
    path: '/device-dashboard', // Add a route for the device-dashboard page
    name: 'device-dashboard',
    component: DeviceDashboard
  },
  {
    path: '/data-dashboard', // Add a route for the device-dashboard page
    name: 'data-dashboard',
    component: DataDashboard
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
