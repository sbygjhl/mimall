<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <div class="menu-item-category"><a href="javascript:;">手机 电话卡</a></div>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index2) in item" :key="index+'-'+index2">
                                        <a :href="'/#/product/'+sub.id">
                                            <img v-lazy="sub.img || '/imgs/item-box-1.png'" alt="">{{sub.name||"小米CC9"}}
                                        </a>
                                    </li> 
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-category"><a href="javascript:;">电视 盒子</a></div>
                            
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-category"><a href="javascript:;">笔记本 平板</a></div>
                            
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-category"><a href="javascript:;">家电 插线板</a></div>
                            
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-category"><a href="javascript:;">智能 路由器</a></div>
                            
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-category"><a href="javascript:;">电源 配件</a></div>
                            
                        </li>
                        <li class="menu-item">
                            <div class="menu-item-category"><a href="javascript:;">生活 箱包</a></div>
                            
                        </li>
                    </ul>
                </div>
                <div class="swiper-container">
                    <Swiper :options="swiperOption">
                        <SwiperSlide v-for="(item,index) in slideList" :key="index">
                            <a :href="'/#/product/'+item.id"><img v-lazy="item.img" alt=""></a>
                        </SwiperSlide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </Swiper>
                </div>
                    
                
                
            </div>
            <div class="ads-box">
                <a :href="'/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
            
        </div>
        
            <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left"><a href="/product/35"><img :src="'/imgs/mix-alpha.jpg'" alt=""></a></div>
                        <div class="list-box">
                            <div class="list" v-for="(arr,i) in phoneList" :key="i">
                                <div class="item" v-for="(item,j) in arr" :key="j+'-'+i" @click="showmodal(item.id)">
                                    <span :class="{'new-pro':j%2==0,'kill-pro':j%2==1}">新品</span>
                                    <div class="item-img"><img v-lazy="item.mainImage" alt=""></div>
                                    <div class="item-title"></div>
                                    <div class="item-info">
                                        <h3>{{item.name}}</h3>
                                        <p>{{item.subtitle}}</p>
                                        <p class="price">{{item.price}}元</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
        <ServiceBar></ServiceBar>
        <Modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" :showModal="showModal" @submit="goTOCart()" @cancel="showModal=false">
            <template v-slot:body>
                <p>添加商品到购物车？</p>
            </template>
        </Modal>

    </div>
    
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Modal from './../components/Modal'
import ServiceBar from "./../components/serviceBar"
export default {
    name:"index",
    components:{
        Swiper,
        SwiperSlide,
        Modal,
        ServiceBar
    },
    data(){
        return{
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                } 
            ],
            swiperOption:{
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                effect : 'cube',
                loop:true
                
            },
            menuList:[
                [
                    {
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米CC9',
                    },
                    {
                        id:31,
                        img:'/imgs/item-box-2.png',
                        name:'小米8青春版',
                    },{
                        id:32,
                        img:'/imgs/item-box-3.jpg',
                        name:'小米CC9',
                    },
                    {
                        id:33,
                        img:'/imgs/item-box-4.jpg',
                        name:'小米CC9',
                    }
                ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },
                {
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },
                {
                    id:45,
                    img:'/imgs/ads/ads-3.png'
                },
                {
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'
                }
            ],
            phoneList:[
                [1,1,1,1],
                [1,1,1,1]
            ],
            showModal:false,
            id:-1
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.axios.get('/products',{
                params:{
                    categotyId:100012,
                    pageSize:18
                }
            }).then(res=>{
                this.phoneList=[res.list.slice(10,14),res.list.slice(14,18)];
                // console.log(this.phoneList); 
            })
        },
        addCart(id){
            this.axios.post("/carts",{
                productId:id,
                selected:true
            }).then(()=>{
                this.$router.push('/cart');
                this.showModal=false;
            }).catch(()=>{
                this.showModal=false;
                alert('请先登陆')
            })
        },
        goTOCart(){
            this.addCart(this.id);
        },showmodal(id){
            this.id=id;
            this.showModal=true;
        }
    }
}
</script>   
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .index{
        .swiper-box{
            .swiper-container{
                .swiper-button-prev{
                    margin-left: 274px;
                }
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: rgba($color:#55585A, $alpha: .3);
                box-sizing:border-box;
                .menu-wrap{
                   
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        
                        .menu-item-category{
                            position: relative; 
                            a{
                                font-size: 16px;
                                color: #ffffff;
                                padding-left: 30px;
                                &:after{
                                    content:'';
                                    position:absolute;
                                    right: 15px;
                                    top: 15px;
                                    @include bgImg(10px,15px,'/imgs/icon-arrow.png'); 
                                }
                            }
                        }
                        
                        &:hover{
                            background-color: $colorA;
                        }
                        .children{
                            // display: none;
                            
                            overflow: hidden;
                            width: 0;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            left:264px;
                            top: 0;
                            z-index: 9;
                            border: 1px solid $colorH;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                
                                li{
                                    width:24.9%;
                                    line-height: 75px;
                                    padding-left: 23px;
                                    a{
                                        display: block;
                                        color:$colorB;
                                        font-size: 14px;
                                        height: 75px;
                                        
                                        
                                    }
                                    img{
                                        height:35px;
                                        width: 42px;
                                        vertical-align: middle;
                                        margin-right: 15px;
                                    }
                                }

                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                // display: block;
                                width: 962px;
                            }
                        }

                    }
                }
                
            }
        }
        .ads-box{
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a{
                img{
                    width: 296px;
                    height: 167px;
                }
            }
            
        }
        .banner{
            img{
                width: 100%;
                height: 125px;
                
            }
            margin-bottom: 50px;
        }
        .product-box{
             background-color: $colorJ;
                padding: 30px 0 50px;
            h2{
                font-size: $colorF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    img{
                        widows: 224px;
                        height: 619px;
                    }
                    margin-right: 5px;
                }
                .list-box{
                    background-color: $colorG;
                    .list{
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        
                        .item{
                            widows: 236px;
                            height: 302px;
                            
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                font-size: 14px;
                                line-height: 24px;
                                margin: 5px 0;
                                &.new-pro{
                                    background-color: #7ecf68;
                                    color: #ffffff;
                                }
                                &.kill-pro{
                                    background-color: #e82626;
                                    color: #ffffff;
                                }
                            }
                            .item-img{
                                img{
                                    height: 175px;
                                    width: 236px;
                                }
                            }
                            .item-info{
                                h3{
                                    font-size: $fontJ;
                                    color: $colorB;
                                    line-height:$fontJ ;
                                    font-weight: bold;
                                }
                                p{
                                    color: $colorD;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }
                                .price{
                                    color:#F20A0A;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &:after{
                                        content: "";
                                        @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                        margin-left: 5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>