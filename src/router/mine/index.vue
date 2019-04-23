<template lang="html">
  <div class="home">
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Button, Icon, Cell, CellGroup, Collapse, CollapseItem, Field, Actionsheet, Picker, Popup } from 'vant'
export default {
  data () {
    return {
      isFetching: false
    }
  },
  async created () {
    this.$$title('个人中心')
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
  }
}
</script>

<style lang="css" scoped>

</style>
<style lang="css">
</style>
