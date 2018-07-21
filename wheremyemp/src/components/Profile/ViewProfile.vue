<template>
    <div class="view-profile container">
        <div v-if="profile" class="card">
            <h2 class="deep-purple-text center">{{profile.username}}'s Wall</h2>        
        </div>
    </div>
</template>

<script>
import db from '@/utils/fb'

export default {
    name: 'ViewProfile',
    data(){
        return {
           profile:null 
        }
    },
    created() {
        console.log('inside the created hook')
        let ref = db.collection('users')
        ref.doc(this.$route.params.id).get()
        .then(user => {
            this.profile = user.data()
        })
        
    },
}
</script>

