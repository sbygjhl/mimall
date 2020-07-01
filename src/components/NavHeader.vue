<template>
    <div class="header">
        <div class="navtopbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="">小米商城</a>
                    <a href="">MIUI</a>
                    <a href="">云服务</a>
                    <a href="">协议规则</a>
                </div>  
                <div class="topbar-user">
                    <a href="" v-if="!username" @click="goToLogin()">登陆</a>
                    <a href="" v-if="!!username">{{username}}</a>
                    <div class="cart" @click="goToCart()"><span class="icon-cart"></span> 购物车</div>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="pruduct" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/product/'+item.id" target="_blank">
                                        <img :src="item.mainImage" alt="phone图片">
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price|currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>REDMI红米</span>
                        
                    </div>
                    <div class="item-menu">
                        <span>小米电视</span>
                        <div class="children">
                            <ul>
                                <li class="pruduct">
                                    <a href="/" target="_blank">
                                        <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        <div class="pro-name">小米cc电视</div>
                                        <div class="pro-price">￥6999</div>
                                    </a>
                                </li>
                                <li class="pruduct">
                                    <a href="/" target="_blank">
                                        <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        <div class="pro-name">小米cc电视</div>
                                        <div class="pro-price">￥6999</div>
                                    </a>
                                </li>
                                <li class="pruduct">
                                    <a href="/" target="_blank">
                                        <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        <div class="pro-name">小米cc电视</div>
                                        <div class="pro-price">￥6999</div>
                                    </a>
                                </li>
                                <li class="pruduct">
                                    <a href="/" target="_blank">
                                        <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        <div class="pro-name">小米cc电视</div>
                                        <div class="pro-price">￥6999</div>
                                    </a>
                                </li>
                                <li class="pruduct">
                                    <a href="/" target="_blank">
                                        <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        <div class="pro-name">小米cc电视</div>
                                        <div class="pro-price">￥6999</div>
                                    </a>
                                </li>
                                <li class="pruduct">
                                    <a href="/" target="_blank">
                                        <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        <div class="pro-name">小米cc电视</div>
                                        <div class="pro-price">￥6999</div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>   
                    </div> 
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"navheader",
    data(){
        return{
            username:'jack',
            phoneList:[]
        }
    },
    filters:{
        currency(val){
            if(!val)return '0.00'
            return '￥'+val.toFixed(2)+"元"
        }
    },
    mounted(){
        this.getProductList();
    },
    methods:{
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012'
                }
            }).then((res)=>{
                if(res.list.length>6){
                    this.phoneList=res.list.slice(0,6);
                }else{
                    this.phoneList=res.list.slice(0,6);
                }
                // console.log(res);
            })
        },
        goToCart(){
            this.$router.push('/cart');
        },
        goToLogin(){
            this.$router.push('/login');
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import "./../assets/scss/mixin.scss";
    .header{
        .navtopbar{
            height: 39px;
            line-height: 39px;
            background-color:#333333;
            color: #b0b0b0;
            .container{    
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                
                .topbar-menu{
                    a{
                        display: inline-block;
                        margin-right: 4px;
                        color: #b0b0b0;
                    }
                }
                .topbar-user{
                    a{
                        display: inline-block;
                        color: #b0b0b0;
                        margin-left: 4px;
                    }
                    .cart{
                        margin-left: 4px;
                        display:inline-block;
                        background-color: #FF6600;
                        width: 110px;
                        text-align: center;
                        color: #ffffff;
                        cursor: pointer;
                        .icon-cart{
                            @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                            margin-right: 4px;
                        }
                    }
                }
                
            }
        }

        .nav-header{
            .container{
                height: 110px;
                @include flex();
                position: relative;
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        display: inline-block; 
                        width: 110px;
                        height: 55px;
                        &:after{
                            content: "";
                            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                        }
                        &:before{
                            content: "";
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                            transition: margin .2s;
                        }
                        &:hover:before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    margin-left: -122px;
                    
                    .item-menu{
                        color: #333333;
                        display: inline-block;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            span{
                                color: #FF6600;
                            }
                        }
                        .children{
                            background: #ffffff;
                            position: absolute;
                            top:112px;
                            left:0;
                            width: 1226px;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0px 7px 6px 0 rgba(0,0,0,0.11);
                            z-index: 10;
                            overflow: hidden;
                            height:0; 
                            transition: all .5s;
                            
                            ul{
                                @include flex(flex-start);
                                .pruduct{
                                    width: 16.6%;
                                    height: 220px;
                                    text-align: center;
                                    line-height: 12px;
                                    font-size: 12px;
                                    a{  
                                        @include flex-col(center);
                                        height: 220px;
                                        img{
                                            width: 92px;
                                            height: 111px;
                                        }
                                        .pro-name{
                                            font-weight: bold;
                                            color: #333333;
                                            margin-top: 26px;
                                            margin-bottom: 8px;
                                        }
                                        .pro-price{
                                            color: #FF6600;
                                        }
                                        
                                    }
                                    
                                }
                            }
                            
                        }
                        &:hover{
                            .children{
                                height:220px; 
                            }
                        }
                    }
                    
                    
                    
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height:50px;
                        // border:1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input{
                            height:50px;
                            width: 264px;
                            border: none;
                            padding-left:14px;
                        }
                        a{
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            background:url('/imgs/icon-search.png') no-repeat center;
                            background-size: contain;
                            margin-left: 17px;
                        }
                    }
                }
                

            }
        }
        
        
    }
</style>