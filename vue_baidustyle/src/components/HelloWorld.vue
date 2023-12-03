<template>
  <div class="conter">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="baidu"></baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      // 经度
      this.center.lng = 116.404
      // 维度
      this.center.lat = 39.915
      // 地图放大等级
      this.zoom = 15
      // 个性化样式
      map.setMapStyleV2({
        styleId: 'd0f429384b5c8d944ef0181704a23d2e'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.conter {
  margin: 0 30px;
  height: 827px;
  background-color: #fff;
  margin-top: 35px;

  .baidu {
    width: 100%;
    height: 100%;

    // 去除百度地图样式
    ::v-deep .anchorBL {
      display: none !important;
    }
  }
}
</style>