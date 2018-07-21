<template>
    <div class="view-profile container">
        <div v-if="profile" class="card">
            <h2 class="deep-purple-text center">{{profile.username}}'s Wall</h2>        
            <ul class="comments collection">
                <li class="collection-item">Comments</li>
            </ul>
            <form @submit.prevent="onAddComment()">
                <div class="field">
                    <label for="comment">Add a comment</label>
                    <input type="text" name="comment" v-model="newcom">
                    <p v-if="feedback" class="red-text center">{{ feedback }}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import db from '@/utils/fb'

export default {
    name: 'ViewProfile',
    data(){
        return {
           profile:null,
           newcom: null,
           feedback: null 
        }
    },
    methods: {
        onAddComment(){
            console.log('inside the add comment method....');
            if(this.newcom === null || this.newcom === '') {
                this.feedback = 'Please add a comment'
            }
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

