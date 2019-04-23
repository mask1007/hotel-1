<template lang="html">
  <div class="home">
    <div class="nav">
        <div class="left" @click="left"><van-icon name="wap-nav" /></div>
        <div class="middle">MONARO</div>
        <div class="right" @click="right"><van-icon name="manager" /></div>
    </div>
    <div class="swipe">
        <van-swipe :autoplay="3000">
            <van-swipe-item><img src="http://qzx.zhy.fun:8888/images/slider1.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://qzx.zhy.fun:8888/images/slider2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="http://qzx.zhy.fun:8888/images/slider3.jpg" alt=""></van-swipe-item>
          </van-swipe>
    </div>
    <div class="info">
      <form>
          <input type="text" placeholder="CheckIn" class="in">
          <input type="text" placeholder="CheckOut" class="out">
          <select class="selects">
              <option value="volvo">Room Type</option>
              <option value="saab">Family Room</option>
              <option value="opel">Superior Room</option>
              <option value="audi">Deluxe Room</option>
            </select>
            <div class="choose">
                <select class="selects">
                    <option value="volvo">Room Type</option>
                    <option value="saab">Family Room</option>
                    <option value="opel">Superior Room</option>
                    <option value="audi">Deluxe Room</option>
                  </select>
                  <select class="selects">
                      <option value="volvo">Room Type</option>
                      <option value="saab">Family Room</option>
                      <option value="opel">Superior Room</option>
                      <option value="audi">Deluxe Room</option>
                    </select>
                    <select class="selects">
                        <option value="volvo">Room Type</option>
                        <option value="saab">Family Room</option>
                        <option value="opel">Superior Room</option>
                        <option value="audi">Deluxe Room</option>
                      </select>
            </div>
      </form>
      <van-button>CHECK AVAILBILTIY</van-button>
    </div>
    <div class="best-room">
      <h3 class="title">Best Rooms</h3>
      <div class="list" v-for="item in bestRoom" :key="item.id">
        <div class="left">
            <img :src="item.img">
        </div>
        <div class="right">
          <div class="name">{{item.name}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="price">{{item.price}}</div>
        </div>
      </div>
    </div>
    <div class="cards">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="item in bestRoom" :key="item.id">
              <div class="card">
                <div class="img">
                  <img :src="item.img" >
                </div>
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>
          </van-swipe-item>
          </van-swipe>
    </div>
    <van-popup v-model="show" position="left" :overlay="true">
        <van-cell-group>
            <van-cell title="Home"/>
            <van-cell title="Rooms" />
            <van-cell title="Events"/>
            <van-cell title="Booking" />
              <van-collapse v-model="activeName" accordion>
                <van-collapse-item title="Pages" name="1">
                  <van-cell title="Abouts"/>
                  <van-cell title="Calendar" />
                  <van-cell title="Gallery"/>
                  <van-cell title="Contact Us" />
                  <van-cell title="Coming Soon"/>
                  <van-cell title="404" />
                  <van-cell title="Team"/>
                  <van-cell title="Testimonial" />
                  <van-cell title="Sign In"/>
                  <van-cell title="Sign Up" />
                </van-collapse-item>
              </van-collapse>
            <van-collapse v-model="activeNames" accordion>
              <van-collapse-item title="Blogs" name="1">
                <van-cell title="Blog"/>
                <van-cell title="Blog Single" />
              </van-collapse-item>
            </van-collapse>
            <van-cell title="Contact Us"/>
            <van-cell title="Faq" />
            <van-cell title="Log Out"/>
          </van-cell-group>
      </van-popup>
      <van-popup v-model="shows" position="right" :overlay="true">
        <div class="mine">
          <div class="img">
            <img src="../../assets/author.png" alt="">
          </div>
          <div class="name">John Doe</div>
          <div class="rooms"> Rooms: 14</div>
        </div>
        <van-cell-group>
            <van-cell title="Home"/>
            <van-cell title="About Me" />
            <van-cell title="Rooms"/>
            <van-cell title="Rooms Services" />
            <van-cell title="Settings"/>
            <van-cell title="Log Out"/>
          </van-cell-group>
      </van-popup>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      show: false,
      shows: false,
      isFetching: false,
      activeName: '',
      activeNames: '',
      test: '',
      list: [{img: 'http://qzx.zhy.fun:8888/images/testimonial1.png', name: 'Jonathan', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda reprehenderit placeat deserunt, esse iure totam laborum aspernatur'}, {img: 'http://qzx.zhy.fun:8888/images/testimonial2.png', name: 'Jonathan', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda reprehenderit placeat deserunt, esse iure totam laborum aspernatur'}, {img: 'http://qzx.zhy.fun:8888/images/testimonial3.png', name: 'Jonathan', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda reprehenderit placeat deserunt, esse iure totam laborum aspernatur'}],
      bestRoom: [{name: 'Superior Room', desc: 'Lorem ipsum dolor sit amet, consectetur.', price: '$50 /Night', img: 'http://qzx.zhy.fun:8888/images/best-room1.jpg'}, {name: 'Family Room', desc: 'Lorem ipsum dolor sit amet, consectetur.', price: '$50 /Night', img: 'http://qzx.zhy.fun:8888/images/best-room2.jpg'}, {name: 'Family Room', desc: 'Lorem ipsum dolor sit amet, consectetur.', price: '$50 /Night', img: 'http://qzx.zhy.fun:8888/images/best-room3.jpg'}],
      images: ['https://qzx.zhy.fun:8888/images/slider1.jpg', 'https://qzx.zhy.fun:8888/images/slider2.jpg', 'https://qzx.zhy.fun:8888/images/slider3.jpg'
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
    left() {
      this.show = true
    },
    right() {
      this.shows = true
    }
  },
  components: {
  }
}
</script>
<style lang="css" scoped>

</style>
<style lang="css">
  body{
    margin: 0;
  }
  .nav {
    background: #ffffff;
    height: 50px;
    width: 100%;
    display: flex;
  }
  .nav .left {
    width: 15%;
    display: flex;
    justify-content:center;
    align-items:Center;
  }
  .nav .left i {
    font-size: 25px;
  }
  .nav .middle {
    width: 70%;
    display: flex;
    justify-content:center;
    align-items:Center;
    font-size: 22px;
    font-weight: 700;
  }
  .nav .right {
    width: 15%;
    display: flex;
    justify-content:center;
    align-items:Center;
  }
  .nav .right i {
    font-size: 25px;
  }
  .swipe{
    height: 250px;
  }
  .swipe img{
    height: 250px;
    width: 100%;
  }
  .van-swipe__indicator--active {
    background-color: #7d989c;
  }
  .van-popup{
    height: 100%;
    width: 70%;
  }
  .van-cell-group{
    padding-top: 20px;
  }
  .van-cell{
    text-align: left;
    font-size: 15px;
    font-weight: 500;
    padding: 12px 25px;
  }
  .mine img {
    margin-top: 30px;
    margin-bottom: 10px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  .mine .name {
   font-size: 16px;
   font-weight: 700;
  }
  .mine .rooms {
   font-size: 13px
  }
  .info {
    margin-top: 30px;
  }
  .info form {
    width: 90%;
    margin-left: 12px;
  }
  .info .in {
    width: 100%;
    height: 30px;
    border: 1px solid #ddd !important;
    margin-bottom: 20px;
    font-size: 14px;
    padding-left: 10px;
  }
  .info .out {
    width: 100%;
    height: 30px;
    border: 1px solid #ddd !important;
    margin-bottom: 20px;
    font-size: 14px;
    padding-left: 10px;
  }
  .info .selects {
    width: calc(100% + 10px);
    height: 35px;
    border: 1px solid #ddd !important;
    margin-bottom: 20px;
    font-size: 14px;
    padding-left: 10px;
  }
  .info .choose {
    display: flex;
    width: calc(100% + 10px);
  }
  .info .choose select:nth-of-type(2) {
    margin-left: 6px;
  }
  .info .choose select:nth-of-type(3) {
    margin-left: 6px;
  }
  .info button {
    width: 90%;
    height: 38px;
    background: #7d989c;
    color: #ffffff;
    font-size: 12px;
  }
  .best-room .title {
    text-align:left;
    padding-left: 20px;
  }
  .best-room .list {
    display: flex;
    justify-content: space-around;
    padding: 0 20px 20px 20px;
  }
  .best-room .list .left {
    width: 250px;
    height: 120px;
  }
  .best-room .list .left img {
    width: 100%;
    height: 100%;
  }
  .best-room .list .right{
    padding: 20px;
    padding-top: 0;
    text-align: left;
  }
  .best-room .list .right .name {
    padding: 3px;
    font-size: 14px;
    color: #555555;
  }
  .best-room .list .right .desc {
    padding: 3px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #888888;
  }
  .best-room .list .right .price {
    padding: 3px;
    font-size: 14px;
    color: #888888;
  }
  .cards {
    height: 238px;
    width: 372px;
    margin: 0 auto;
  }
  .cards .card{
    padding: 20px;
  }
  .cards .card .img{
    width: 65px;
    height: 65px;
    margin: 20px auto;
  }
  .cards .card .img img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
</style>
