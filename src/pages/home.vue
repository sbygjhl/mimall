<template>
    <div class="home">
        <Footer></Footer>
        <router-view></router-view>
        <NavHeader></NavHeader>

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