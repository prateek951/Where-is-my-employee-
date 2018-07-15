<template>
    <div class="login container">
       <form @submit.prevent="doLogin()" class="card-panel">
           <h2 class="center deep-purple-text">Login</h2>
           <div class="field">
               <label for="email">Email:</label>
               <input type="email" name="email" v-model="email"/>
           </div>
           <div class="field">
               <label for="password">Password:</label>
               <input type="password" name="password" v-model="password">
            </div>
            <p v-if="feedback" class="red-text center">{{ feedback }}</p>
            <div class="field">
                <button class="btn deep-purple">Login</button>
            </div>
       </form>
    </div>
</template>


<script>
import firebase from 'firebase';
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: '',
            feedback: ''
        }
    },
    methods: {
        doLogin(){
            console.log('inside the doLogin call....');
            if(this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                .then(cred => {
                    console.log(cred.user);
                    //will set geolocation at some later stage.
                    this.email = '';
                    this.password = '';
                    setTimeout(() => {
                        this.feedback = 'You are getting logged up...';
                    }, 2000);
                }).then(() => this.$router.push({name: 'Map'}))
                .catch(err => {
                    if(err){
                        this.feedback = err.message;
                    }
                });
            }else{
                this.feedback = 'Fields cannot be left blank';
            }
        }
    }  
}
</script>


<style>
.login {
    max-width: 400px;
    margin-top: 60px;
}
.login h2{
    font-size: 2.4em;
}
.login .field{
    margin-bottom: 16px;
}
</style>
