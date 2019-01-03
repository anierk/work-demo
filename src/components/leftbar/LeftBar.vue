/**2018.11.26  左侧导航页**/
<template>
  <el-menu
      default-active=""
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <template v-for="item in options.data">
			<!-- <MItems :item='item' :indexp="item.id"></MItems> -->
      	<el-submenu :index="item.id.toString()">
          <template slot="title">
            <router-link :to="{ path:item.url }">
            {{item.name}}
            </router-link>

          </template>
           <template v-for="itemChild in item.subMenu">
              <!-- <router-link :to="{ path:itemChild.url}"> -->
                <!-- <items :item="itemChild" :indexp="itemChild.id.toString()"></items> -->
                {{item.name}}
              <!-- </router-link> -->
          </template>
        </el-submenu>
		 </template>
    </el-menu>
</template>
<script>
export default {
  name: 'LeftBar',
  props:['options'],
  components:{},
  data () {
    return {
       isCollapse: true
    }
  },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

</style>
