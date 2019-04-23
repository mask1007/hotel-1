<template lang="html">
  <div class="home">
    <van-list v-for="item in 2">
111
    </van-list>
    这个是页面
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Button, Icon, Cell, CellGroup, Collapse, CollapseItem, Field, Actionsheet, Picker, Popup, List } from 'vant'

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
    vanList: List
  }
}
</script>

<style lang="css" scoped>

</style>
<style lang="css">
</style>
