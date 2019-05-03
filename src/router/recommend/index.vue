<template lang="html">
  <div class="recommend">
    <div class='title'> 
      <p class='line'></p>
      <p class='around'>周边推荐</p>
    </div>
    <van-tabs v-model="active" @click="tab">
      <van-tab title="游玩推荐" >
        <div class='text' v-for="(item, index) in list" :key="item.id" >
          <div class='name'>{{index+1}}.{{item.title}}</div>
          <div class='pic'><img :src="item.img" alt=""></div>
          <div class='desc'>{{item.text}}</div>
        </div>
      </van-tab>
      <van-tab title="吃喝推荐">
        <div class='text' v-for="(item, index) in list1" :key="item.id" >
          <div class='name'>{{index+1}}.{{item.title}}</div>
          <div class='pic'><img :src="item.img" alt=""></div>
          <div class='desc'>{{item.text}}</div>
        </div></van-tab>
      <van-tab title="购物推荐">
        <div class='text' v-for="(item, index) in list" :key="item.id" >
          <div class='name'>{{index+1}}.{{item.title}}</div>
          <div class='pic'><img :src="item.img" alt=""></div>
          <div class='desc'>{{item.text}}</div>
        </div>
      </van-tab>
</van-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Button, Icon, Cell, CellGroup, Collapse, CollapseItem, Field, Actionsheet, Picker, Popup } from 'vant'
export default {
  data () {
    return {
      active: 0,
       list: [
        {img: 'https://n4-q.mafengwo.net/s13/M00/F1/C3/wKgEaVyIso6AOEVsABv8RBsFC6c646.png?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '别样渔村增厝安', text: '增厝安是个让人流连忘返的地方，以前是个安静的小渔村，现在被各种特色美食和文艺店铺充斥，每一家都有自己的风格和特点，让人目不暇接。里面的小吃几块到几十块不等，小吃的花样品种数不胜数，可以按照自己的喜好选择。晚上走在街上可以陆陆续续听到清吧里传来的吉他声，可以选择一家进去坐一坐，点一杯莫吉托和周围的旅人聊聊心事。。'},
        {img: 'https://p3-q.mafengwo.net/s13/M00/F2/17/wKgEaVyIsruAARViAAICNVdOjg860.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '古老传承胡里山炮台', text: '来到胡里山炮台除了可以见证各式各样宏伟的炮台和被时光淬炼后依然挺拔的古樟木，还可以借助它得天独厚的天然地理位置观赏到绝佳的海景。门票25\人，学生票半价，千万不要错过被誉为“世界现存原址上最古老最大的十九世纪海岸炮”-克虏伯大牌哦。'},
        {img: 'https://p4-q.mafengwo.net/s13/M00/F2/86/wKgEaVyIsuSANkcNAA1hqcC1IAo002.png?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '浪漫骑行环岛路', text: '环岛路实际上是一条风景秀丽的带状滨海走廊，是从增厝安靠近白城沙滩的一段路，沿途的景点非常美，不需要门票就可以享受环岛骑行的乐趣。想要拍照的小伙伴们可以在这里多停留一段时间，日落时分，太阳洒在海面上非常的温柔。'},
        {img: 'https://p3-q.mafengwo.net/s13/M00/F2/D2/wKgEaVyIsxSABaBYABA2yFTQLo4423.png?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '中国最美大学-厦门大学', text: '中国最美大学--厦门大学果然名不虚传，学校的规模非常大，独树一帜的闽南建筑楼群让校园充满了异域风情，仿佛每一座建筑都在诉说着自己的故事。可以在芙蓉湖等待与黑天鹅的邂逅，在鲁迅纪念馆重温先生的著作，在海洋科技博物馆和生物博物馆感受科技于生物之美，看一看最文艺的芙蓉隧道和思源谷。虽然门票免费，但是因为限流所以需要提前预约。'},
      ],
      list1: [
        {img: 'https://b2-q.mafengwo.net/s13/M00/F4/C1/wKgEaVyItECAZf6eAAGxQXijzMo14.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '四里沙茶面', text: '地址：思明区湖滨四里14号 厦门特色美食，加两样料差不多15元 沙茶面里的花生不加一丝糖分，不会口渴甜腻，忍不住来第二碗！'},
        {img: 'https://n4-q.mafengwo.net/s13/M00/F4/FB/wKgEaVyItGOAdFn6ABXjmVhdHYQ362.png?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '天河西门土笋冻', text: '地址：思明区斗西路33号 10元一份的天河西门土笋冻，Q弹鲜爽，超级赞！'},
        {img: 'https://p3-q.mafengwo.net/s13/M00/F5/26/wKgEaVyItICAUcF_AAHIrJyBPmQ98.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '局口街炸海蛎饼', text: '地址：中山路局口街 炸海蛎饼以及虾饼，各来一个共6元，虾的鲜美在口中爆汁，强烈安利！'},
        {img: 'https://p2-q.mafengwo.net/s13/M00/F5/6C/wKgEaVyItKSAbo8RAABc_9-4LU891.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90', title: '中山路鲜切芒果', text: '地址：中山路 15元还能吃什么呢？当然是来一份鲜切芒果，份量大还甜蜜，超满足的！'},
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
    tab() {
      console.log(this.active)
    }
  },
  components: {
    vantButton: Button,
    vanIcon: Icon,
    vanCell: Cell,
    vanCellGroup: CellGroup,
    vanCollapse: Collapse,
    vanCollapseItem: CollapseItem,
    vanField: Field,
    vanActionsheet: Actionsheet,
    vanPicker: Picker,
    vanPopup: Popup,
  }
}
</script>

<style lang="css" scoped>
.recommend .title{
  display: flex;
}
.recommend .title .line{
  margin-left: 20px;
  margin-right: 10px;
  width: 4px;
  height: 30px;
  background-color: #0188FB;
}
.recommend .title .around{
  padding-top: 4px;
  font-weight: 700;
}
.recommend .text{
  margin-bottom: 20px
}
.recommend .text .name{
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  padding: 10px;
}
.recommend .text .pic{
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
}
.recommend .text .pic img{
  width: 90%;
  height: 100%;
}
.recommend .text .desc{
  color: #666;
  text-align: left;
  padding: 0 10px;
} 
</style>
<style>
.recommend .van-tabs__line {
  background-color:#0188FB
}
</style>
