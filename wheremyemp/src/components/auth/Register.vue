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
                <label for="name">Username:</label>
                <input type="text" placeholder="Name" v-model="username">
            </div>
            <p class="red-text center" v-if="feedback">{{feedback}}}</p>
            <div class="field center">
                <button class="btn deep-purple">Register</button>
            </div>
        </form>
    </div>    
</template>


<script>
import slugify from 'slugify'
import db from '@/utils/fb'
export default{
        name: 'Register',
        data(){
            return {
                email: null,
                password: null,
                username: null,
                feedback : null,
                slug: null 
            }
        },
        methods: {
              doRegister(){
                console.log('inside the doRegister call....');
                if(this.username){
                    this.slug = slugify(this.username, {
                        replacement: '-',
                        remove: /[$*_+~.()'"!\-:@]/g,
                        lower: true
                    });
                   let ref = db.collection('users').doc(this.slug);
                    ref.get().then(doc => {
                        if(doc.exists){
                            this.feedback = 'Username already exists';
                        }else{
                            this.feedback = 'Username is available';
                        }
                    })
                    console.log(this.slug);
                }else{
                    this.feedback = 'You must provide a username';
                }
        
        
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
