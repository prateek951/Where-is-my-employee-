<template>
  <div>
    <Navbar/>  
    <router-view></router-view>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }  
}
</script>
