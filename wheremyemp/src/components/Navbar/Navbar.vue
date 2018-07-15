<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{ name: 'Map'}">WhereIsMyStaff</router-link>
        <ul class="right">
            <li><router-link :to="{name: 'Register'}">Register</router-link></li>
            <li><router-link :to="{name: 'Login'}">Login</router-link></li>
            <li><a @click="onLogout()">Logout</a></li>
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

            }
        },
        methods: {
          onLogout(){
            console.log('inside the doLogout method....');
            firebase.auth().signOut()
            .then(res => {
              console.log(res);
              this.$router.push({name : 'Login'});
            });
          } 
        }
    }
</script>


<style>

</style>
