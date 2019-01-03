/**2018.12.24  布局页**/
<template>
  <el-container class="is-vertical">
    <HeaderBar></HeaderBar>
    <el-container>
      <el-aside style="width:15%; min-width:270px" class="mainAside">
        <LeftBar :options="leftOptions"></LeftBar>
      </el-aside>
      <router-view/>
    </el-container>
  </el-container>
</template>
<script>
import HeaderBar from '../components/header/Header.vue';
import LeftBar from '../components/leftbar/LeftBar.vue';
export default{
  name: 'layout',
  components: {
    HeaderBar,
    LeftBar
  },
  data () {
    return {
      leftOptions:{
        data:[
            {
              "id": 1,
              "name": "数据接入管理",
              "icon": '',
              "url": "/dataImport/apisource",
              "parentId": 0,
              "subMenu": [
                {
                  "id": 2,
                  "name": "API源接入",
                  "icon": "",
                  "url": "/dataImport/apisource",
                  "parentId": 1
                }
              ]
            },
            {
              "id": 3,
              "name": "数据服务管理",
              "icon": '',
              "url": "/dataImport/apisource",
              "parentId": 0,
              "subMenu": [
                {
                  "id": 4,
                  "name": "API列表",
                  "icon": "",
                  "url": "/dataImport/apisource",
                  "parentId": 3
                },
                {
                  "id": 5,
                  "name": "API分类",
                  "icon": "",
                  "url": "/dataImport/apisource",
                  "parentId": 3
                },
              ]
            }
          ]
      }

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style>
.el-aside {
		background: #f4f4f4;
	}
</style>
