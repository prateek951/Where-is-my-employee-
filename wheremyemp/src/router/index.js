import Vue from 'vue';
import VueRouter from 'vue-router';
import Map from '@/components/Map/Map';
import Register from '@/components/auth/Register';

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
        }
    ]
})