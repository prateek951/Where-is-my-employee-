import Vue from 'vue';
import VueRouter from 'vue-router';
import Map from '@/components/Map/Map';
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';
import ViewProfile from '@/components/Profile/ViewProfile';

import firebase from 'firebase';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Map',
            component: Map,
            meta: {
                requiresAuth: true
            }
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
        },
        {
            path: '/profile/:id',
            name: 'ViewProfile',
            component: ViewProfile,
            meta: {
                requiresAuth: true
            }
        },
    ]
})


router.beforeEach(( to, from, next) => {
    //check for auth 
    if(to.matched.some(rec => rec.meta.requiresAuth)){
        //chef auth state of user
        let user = firebase.auth().currentUser 
        if(user){
            next()
        }else{
            next({ name: 'Login' })
        }
    }else{
        next()
    }
})

export default router