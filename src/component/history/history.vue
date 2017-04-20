<template>
<div id="history">
<div class="my-content mg-t-50">
	<div class="my-row pd-15 pd-l-20 head myFixed t0 l0">
		<div class="my-col-12 ">
			<router-link to="/me" class="icon iconfont icon-left colorFFF"></router-link>
			<span class="colorFFF fontS20 mg-l-30">阅读过的文章</span>
		</div>
	</div>
	<!-- 我喜欢的文章 -->
<div class="my-row pd-10 articleList"   v-for="item in active">
	<div class="my-col-12"> 
	<span class="title mg-b-5" v-if="item.Img" style="padding-right:1.4rem">{{ item.Active }}
	</span>
	<span class="title mg-b-5" v-else style="width:100%">{{ item.Active }}
	</span>
	<span class="colorCCC fontS14">
	<b>{{ item.NofP }}</b>人喜欢·
	<b>{{ item.usn }}</b>·
	<b>{{ item.time }}</b>
	</span>	
	<img class="Img" v-if="item.Img" v-bind:src="item.Img" alt="">
	</div>
</div>

</div>
</div>
</template>
<script src="./history.js"></script>
<style>
	@import './history.css'
</style>