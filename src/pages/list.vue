<template>
    <div class="list">
        <OrderHeader title="订单列表">
         <template v-slot:tip>
            <span>请谨防钓鱼连接或钓鱼电话，了解更多></span>
          </template>
       </OrderHeader>
       
         
    <div class="wrapper">
      <div class="container">
        <NoData v-if="noData"></NoData>
        <Loading v-if="loading"></Loading>
        
        <div class="order-box">
            <div class="order" v-for="(item, index) in orderlist" :key="index">
              <div class="order-title">
                <div class="item-info fl">
                  {{item.createTime}}
                  <span>|</span>
                  {{item.receiverName}}
                  <span>|</span>
                  订单号：{{item.orderNo}}
                  <span>|</span>
                  {{item.paymentTypeDesc}}
                </div>
                <div class="item-money fr">
                  <span>应付金额：</span>
                  <span class="money">{{item.payment}}</span>
                  <span>元</span>
                </div>
              </div>
              <div class="order-content clearfix">
                <div class="good-box fl">
                  <div class="good-list" v-for="(item,index) in item.orderItemVoList" :key="index">
                    <div class="good-img">
                      <img v-lazy="item.productImage" alt="">
                    </div>
                    <div class="good-name">
                      <div class="p-name">{{item.productName}}</div>
                      <div class="p-money">{{item.currentUnitPrice}} X {{item.quantity}}元</div>
                    </div>
                  </div>
                </div>
                <div class="good-state fr">
                  <a href="javascript:;" @click="gotopay(item.orderNo)">{{item.statusDesc}}</a>
                </div>
          </div>
        </div> 

          <div class="Pagination">
            <el-pagination
            background
            layout="prev, pager, next"
            :pageSize='pageSize'
            :total='total'
            @current-change='checkpage'
            :currentPage='currpage'
            >
            </el-pagination>
            <Button @click="(currpage*pageSize)>total?'':checkpage(currpage+1)" v-if="false">加载更多</Button>
          </div>
        
          <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="">
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import NoData from './../components/NoData'
import Loading from './../components/Loading'
import {Pagination,Button} from 'element-ui'
export default {
    name:'orderlist',
    components:{
        OrderHeader,
        NoData,
        Loading,
        'ElPagination':Pagination,
        Button
    },
    data(){
        return{
            orderlist:[],
            noData:false,
            loading:true,
            pageSize:5,
            total:0,
            currpage:1,
        }
    },
    mounted(){
        this.getlist();
    },
    methods:{
        getlist(pageNum){
          if (!pageNum) {
            pageNum=1;
          }
            this.axios.get('/orders',{
              params:{
                pageSize:this.pageSize,
                pageNum:pageNum
              }
            }).then(res=>{
                
                this.loading=false;
                this.orderlist=res.list;
                // this.orderlist=this.orderlist.concat(res.list);
                this.total=res.total;
            });
        },
        gotopay(orderNo){
          this.$router.push({
            path:'/order/pay',
            query:{
              orderNo 
            }
          })
        },
        checkpage(pageNo){
          this.currpage=pageNo;
          this.getlist(pageNo);
        }
    }
}
</script>
<style lang='scss'>
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      Loading{
        height:1600px;
      }
      .order-box{
        .order{
        //   @include border();
        border: 1px $colorF solid; 
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            // @include height(74px);
            height: 74px;
            line-height: 74px;
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
                height: 145px;
                line-height: 145px;
            //   @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
        .el-pagination{
          float: right;
        }
      }
    }
  }
</style>