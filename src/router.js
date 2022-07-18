import { createWebHashHistory,createRouter } from 'vue-router'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import HelloWorld from './components/HelloWorld.vue'
import Logout from './components/Logout.vue'
import EditUserDetails from './components/EditUserDetails.vue'


const routes = [
  { path: '/', name:"HelloWorld", component: HelloWorld },
  { path: '/signup', name:"Singup", component: Signup },
  { path: '/login', name:"Login" , component: Login },
  { path: '/logout', name:"Logout" , component: Logout },
  { path: '/edit-user-details', name:"edituserdetails" , component: EditUserDetails }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
