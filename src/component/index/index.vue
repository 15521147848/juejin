<template>
  <div id="index">
	<router-view></router-view>
	<!-- 选项卡 -->
	<div class="my-content myFixed b0 l0 ">
		<div class="my-row option">
			<router-link to="/home" class="my-col-3 textCenter">
				<span class="dpInBk icon iconfont icon-home"></span>
			</router-link>
			<router-link to="/search" class="my-col-3 textCenter">
				<span class="dpInBk icon iconfont icon-glass"></span>
			</router-link>
			<router-link to="/message" class="my-col-3 textCenter lingdang">
				<span class="dpInBk icon iconfont icon-lingdang"></span>
			</router-link>
			<router-link to="/me" class="my-col-3 textCenter">
				<span class="dpInBk icon iconfont icon-presonl"></span>
			</router-link>
		</div>
	</div>
  </div>
</template>
<script>

</script>

<style>
@import './index.css';
</style>