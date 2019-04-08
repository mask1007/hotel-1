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
</style>
<style lang="css">

</style>
