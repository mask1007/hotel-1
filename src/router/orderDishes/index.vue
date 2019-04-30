<template lang="html">
  <div class="container">
    <div class="orderDishes">
      <div class="types">
        <div class="type" v-for="(item,index) in arr" :key="item.id" @click=choose(item.code,index)>
            {{item.name}}
        </div>
      </div>
      <div class="goodsList">
        <div class="card" v-for="item in list" :key="item.id">
          <div class="left">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <p class="title">{{item.title}}</p>
            <p class="text">{{item.text}}</p>
            <p class="number">月售：{{item.number}}</p>
            <p class="prices">
              <span class="price">￥{{item.price}}</span>
              <span><van-stepper v-model="item.need" min='0'/></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      isCheck: false,
      arr: [{name: '天天半价', code: '01'}, {name: '套餐汉堡', code: '02'}, {name: '单品汉堡', code: '03'}, {name: '甜品小吃', code: '04'},{ name:'现磨咖啡', code: '05'},{ name: '饮品系列', code: '06'}, {name: '人气套餐', code: '07'}, {name: '儿童餐', code: '08'}, {name: '会员专享', code: '09'}],
      list: [
        {img: 'http://qzx.zhy.fun:8888/images/testimonial1.png', title: '菲力牛排', text: '来自最上等的腰内肉，肉质鲜美，油脂较少，瘦肉较多，营养丰富，配上嚼劲十足的意面和外焦里内的鸡蛋。', number: 4, price: 125, need: 0},
        {img: 'http://qzx.zhy.fun:8888/images/testimonial1.png', title: '菲力牛排', text: '来自最上等的腰内肉，肉质鲜美，油脂较少，瘦肉较多，营养丰富，配上嚼劲十足的意面和外焦里内的鸡蛋。', number: 4, price: 125, need: 0},
        {img: 'http://qzx.zhy.fun:8888/images/testimonial1.png', title: '菲力牛排', text: '来自最上等的腰内肉，肉质鲜美，油脂较少，瘦肉较多，营养丰富，配上嚼劲十足的意面和外焦里内的鸡蛋。', number: 4, price: 125, need: 0},
        {img: 'http://qzx.zhy.fun:8888/images/testimonial1.png', title: '菲力牛排', text: '来自最上等的腰内肉，肉质鲜美，油脂较少，瘦肉较多，营养丰富，配上嚼劲十足的意面和外焦里内的鸡蛋。', number: 4, price: 125, need: 0},
      ]
    }
  },
  async created () {
  },
  mounted () {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    choose(code,index) {
      let els = document.querySelectorAll('.type')
      let el = document.querySelectorAll('.type')[index]
      els.forEach(element => {
        element.style.background = '#F2F2F2'
      })
      el.style.background = 'white'
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
  .container{
    height: 100%;
  }
  .orderDishes{
    height: 100%;
    display: flex;
  }
  .types{
    height: 100%;
    width: 25%;
    background: #F2F2F2;
  }
  .types .type{
    height: 50px;
    line-height: 50px;
  }
  .goodsList{
    width: 75%;
    height: 100%;
  }
  .card{
    display: flex;
    padding: 10px;
  }
  .left {
    width: 40%;
  }
  .right {
    width: 60%;
    margin-left: 10px;
  }
  .left img{
    height: 100px;
    width: 100px;
  }
  .right p{
    font-size: 14px;
    text-align: left;
    margin: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .prices{
    display: flex;
    justify-content: space-between;
  }
  .price{
    font-size: 17px;
    color: red;
    margin-top: 4px;
  }
</style>
<style>
.container .van-stepper__minus,.van-stepper__plus {
  background: #0188FB;
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
.container .van-stepper__minus:before,.van-stepper__plus:before,.van-stepper__plus:after{
  background: white;
}
</style>