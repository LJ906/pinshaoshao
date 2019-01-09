<template>
  <div class="cell" @click="clickCell(leftTitle)">
    <div class="cell-left" :style="{color: leftTitleColor}">
      <i :class="leftIcon" v-show="leftIcon"></i>
      <span v-show="leftTitle">{{leftTitle}}</span>
    </div>
    <div class="cell-right">
      <span>{{rightTitle}}</span>
      <i class="itlike-uniE909" v-show="isShowRightArrow"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeCommonCell',
  props: {
    leftTitle: { type: String, default: ''},
    leftIcon: {type: String, defalut: ''},
    rightTitle: { type: String, default: ''},
    leftTitleColor: {type: String, default:''},
    rightTitleColor: {type: String, default:''},
    isShowRightArrow: {type: Boolean, default: true},
    clickCell: {type: Function, default:()=>{}},
  }
}
</script>

<style scoped>
.cell {
  height: 1.173333rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .266667rem;
  border-bottom: .026667rem solid #ececec;
  font-size: .426667rem;
}

.cell-left, 
.cell-right {
  display: flex;
  align-items: center;
}

.cell i {
  margin-right: .133333rem;
}

</style>
