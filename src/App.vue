<template>
  <el-container id="app" class="is-vertical containerMain" >
    <router-view/>
  </el-container>
</template>
<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  @import "./assets/less/common.less";

  .containerMain {
    min-width: 1190px;
    height: 100%;
  }
  .el-container.is-vertical {
    flex-direction: column;
  }
</style>
