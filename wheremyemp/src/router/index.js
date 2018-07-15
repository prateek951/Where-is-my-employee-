import Vue from 'vue';
import VueRouter from 'vue-router';
import Map from '@/components/Map/Map';
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Map',
            component: Map        
        },
        {
            path: '/register',
            name: 'Register',
            component: Register       
        },
        {
            path: '/login',
            name: 'Login',
            component: Login       
        }
    ]
})