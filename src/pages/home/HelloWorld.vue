<template>
  <div class="hello">
    <div @click="indexClick" style="margin-top:52px">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '登录'
    }
  },
  methods: {
    indexClick () {
      this.$router.push({path: '/manage'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  min-width: 1190px;
  height: 100%;
  font-weight: bold;
  text-align: center;
}
</style>
