<template>
  <div id="app">
  <transition name="fade">
	<router-view></router-view>
  </transition>
	<!-- 选项卡 -->
	
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import './app.css';
</style>
