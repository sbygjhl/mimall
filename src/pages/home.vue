<template>
    <div class="home">
        <NavHeader></NavHeader>
        <router-view></router-view>
        
        <Footer></Footer>

    </div>
</template>
<script>
import Footer from "./../components/Footer"
import NavHeader from "./../components/NavHeader"
export default {
    components:{
        Footer,
        NavHeader
    }
}
</script>