<template>
    <div class="no-data">
        <div class="container">
            <img src="/imgs/icon-no-data.png" alt="没有订单，请先添加订单">
            没有订单，请先添加订单
        </div>
        
    </div>
</template>
<script>
export default {
    name:"no-data"
}
</script>
<style lang='scss'>
.no-data{
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }
}
</style>