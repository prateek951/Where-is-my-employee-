<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{ name: 'Map'}" class="brand-logo left">WhereIsMyStaff</router-link>
        <ul class="right">
            <li><router-link :to="{name: 'Register'}" v-if="!user">Register</router-link></li>
            <li><router-link :to="{name: 'Login'}" v-if="!user">Login</router-link></li>
            <li v-if="user"><a>{{ user.email }}</a></li>
            <li><a @click="onLogout()" v-if="user">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script>
import firebase from 'firebase';
    export default {
        name: 'Navbar',
        data() {
            return {
                user: null
            }
        },
        methods: {
          onLogout(){
            console.log('inside the doLogout method....')
            firebase.auth().signOut()
            .then(res => {
              console.log(res);
              this.$router.push({name : 'Login'})
            });
          } 
        },
        created(){
          //check for the auth of the user.If the user is loggedin then the user is set and the register and login buttons
           //should be hidden and if the user is not loggedin,then the register and login buttons should only be visible
           let user = firebase.auth().currentUser
           firebase.auth().onAuthStateChanged(user => {
             if(user){
                this.user = user 
             }else{
               this.user = null
             }
           })
        }
    }
</script>


<style>

</style>
