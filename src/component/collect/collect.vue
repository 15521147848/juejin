<template>
<div id="collect">
<div class="my-conect">
	<div class="my-row head colorFFF pd-b-0 ">
		<div class="my-col-10 pd-20">
			<router-link to="/me" class="icon iconfont icon-left colorFFF"></router-link>
			<span class="fontS20 mg-l-30">收藏集</span>
		</div>
		<div class="my-col-1  pd-r-20  textCenter" style="font-size:.55rem">
			+
		</div>
	
	<div class="my-row">
		<router-link to="/est" class="my-col-2 pd-t-10 pd-b-10 list">
			创建的
		</router-link>
		<router-link to="/att" class="my-col-2 pd-t-10 pd-b-10 list">
			 关注的
		</router-link>
	</div>
	</div>
	</div>
<div class="textCenter colorCCC">
	<router-view></router-view>
</div>
</div>
</template>
<script></script>
<style>
	@import './collect.css'
</style>