<template lang="html">
  <div class="home">
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Button, Icon, Cell, CellGroup, Collapse, CollapseItem, Field, Actionsheet, Picker, Popup } from 'vant'
import np from 'number-precision'
import actionSheet from '@/components/actionSheet'
import Input from '@/components/input'
import Fetching from '@/components/common/loading/fetching'

export default {
  data () {
    return {
      isFetching: false
    }
  },
  async created () {
    this.$$title('莫纳洛酒店')
  },
  mounted () {
    this.$$utils.allowRefreshOrShare(false, false)
  },
  watch: {
  },
  computed: {
  },
  methods: {
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
    numberInput: Input,
    actionSheet,
    pageFetching: Fetching
  }
}
</script>

<style lang="css" scoped>
.item-cell-ft {
  margin: 15px;
}
.buy-wrapper{
  padding-bottom: 128px;
  & .property-flag{
    position: absolute;
    right: 40px;
    top: 10px;
    width: 116px;
    height: 74px;
    background: url('../../assets/images/czbj.png') no-repeat;
    background-size: cover;
    z-index: 10;
    text-align: center;
    color: #fff;
    font-size: 30px;
    line-height: 70px;
    text-indent: 10px;
  }
}
.buy-cell{
  display:  flex;
  font-size: 30px;
  line-height: 48px;
  /* position: relative; */

  & .cell-hd{
    width: 180px;
  }
  & .cell-bd{
    flex: 1;
    margin-left: 40px;
  }
}
.buy-fill-item{
  margin: 20px 0;
  & .item-cell-hd{
    width: 200px;
    color: #333;
  }
  & .item-cell-bd{
    display: flex;
    & input{
      flex: 1;
      width: 100%;
    }
  }
}
.cash-num{
  color: #e93223;
}
.dashboard-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 128px;
  padding: 20px;
  background: #f7f7f7;
  z-index: 5;

  & .status-selector{
    width: 182px;
    background: #fff;
    color: #0698fe;
    margin-right: 20px;
    font-size: 30px;
    text-align: center;
    vertical-align: middle;
    line-height: 88px;

    & .icon-arrow{
      transform: rotate(90deg);
    }
  }
  & .van-hairline--surround{
    &::after{
      border-color: #0698fe;
      border-radius: 8px;
    }
  }

  & .dashboard{
    display: flex;
  }
  & .buy-trigger{
    flex: 1;
    height: 88px;

    & button{
      display: block;
      width: 100%;
      height: 88px;
      line-height: 88px;
      border-radius: 8px;
      background: #0698fe;
      color: #fff;

      &.disabled{
        background: #999;
        color: #fff;
      }
    }
  }
}
p.amount{
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  text-align: right;
  padding: 0 20px;
}

.cost-wrapper{
  background: #fff;
  padding-bottom: 20px;

  & .cost-sum{
    background: #f7f7f7;
    color: #fe0000;
    &::after{
      border-width: 0 !important;
    }
  }
  & .add-cost {
    padding: 30px;

    & .add-trigger{
      display: flex;
      width: 150px;
      height: 150px;
      border: 1px dashed #666;

      & .icon{
        margin: auto;
        font-style: normal;
        font-weight: bolder;
        font-size: 80px;
        color: #666;
      }
    }
    & .label{
      margin-top: 15px;
      font-size: 36px;
      color: #0698ff;
    }
  }
  & .warning{
    padding: 0 30px;
    color: #999;
    font-size: 24px;
  }
  & .dashboard-wrapper{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px 0;
    z-index: 5;
  }
  & .dashboard{
    display: flex;
    padding: 0 10px;

    & button {
      flex: 1;
      display: block;
      /* border: 1px solid #0698ff; */
      color: #fff;
      margin: 0 20px;
      background: #0698ff;
      font-size: 30px;
      height: 90px;
      border-radius: 8px;
    }
    & .van-hairline--surround{
      &::after{
        border-radius: 8px;
        border-color: #0698ff;
      }
    }
  }

  & .cost-item{
    & .inp-field{
      flex:1;
      color: #666;
      margin-right: 20px;
    }
    & .price{
      color: #fe0000;
    }
    & .inp-field{
      line-height: inherit;
      width: 100%;
      color: #fe0000;
    }
    & .item-cell-hd{
      width: 200px;
    }
    & .item-cell-bd{
      display: flex;
      color: #fe0000;
    }
  }
}
</style>
<style lang="css">
.buy-wrapper .van-cell{
  line-height: 1;
  padding: 15px;
  /* font-size: 13px; */
}
.buy-wrapper .van-cell__title{
  /* line-height: 24px; */
}
</style>
