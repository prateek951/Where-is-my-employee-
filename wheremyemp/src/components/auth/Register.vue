<template>
    <div class="register container">
        <form class="card-panel" @submit.prevent="doRegister()">
            <h2 class="center deep-purple-text">Register</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" placeholder="Email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <div class="field">
                <label for="name">Name:</label>
                <input type="text" placeholder="Name" v-model="name">
            </div>
            <div class="field center">
                <button class="btn deep-purple">Register</button>
            </div>
        </form>
    </div>    
</template>


<script>
    export default{
        name: 'Register',
        data(){
            return {
                email: '',
                password: '',
                name: ''
            }
        },
        methods: {
            doRegister(){
                console.log('inside the doRegister call....');
            }
        }
    }
</script>

<style>
.register{
    max-width: 400px;
    margin-top: 60px;
}
.register h2{
    font-size: 2.4em;
}
.register .field{
    margin-bottom: 16px;
}
</style>
