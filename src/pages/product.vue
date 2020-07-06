<template>
    <div class="product">
        <ProductParam>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </ProductParam>
        <div class="a">123</div>
        <div class="a">123</div>
        <div class="a">123</div>
        <div class="a">123</div>
        <div class="a">123</div>
        <div class="a">123</div>
        <div class="a">123</div>
    </div>
</template>
<script>
import ProductParam from './../components/ProductParam'
export default {
    name:'product',
    components:{
        ProductParam
    }    
}
</script>
<style lang="scss">
    .product{
        .btn{
            margin-left: 10px;
        }
        .a{
            height: 200px;
            background-color: green;
        }
    }

</style>