<template>
<div id="search" class="mg-b-50">
<!-- 搜索框 -->
<div class="my-content">
	<div class="my-row pd-l-10 pd-r-10  myFixed t0 l0 searchbar" >
		<div class="my-col-12">
			<input type="text" class="w100 search">
		<i class="icon iconfont icon-glass myAbsolute l-10 t0"></i>

		</div>
	</div>
</div>
<div class="my-content style="visitily:hidden>
	<div class="my-row  pd-10 searchbar" >
		<div class="my-col-12 ">
			<input type="text" class="w100 search">
		</div>
	</div>
</div>
<!-- 轮播图 -->
<div class="my-content"  >
<div class="my-row">
	<mt-swipe :auto="4000" class="swipe" :show-indicators="false">
		<mt-swipe-item class="fontS20" v-for="item in adv"><img v-bind:src="item.src" alt="">
		</mt-swipe-item>
	
	</mt-swipe>
</div>
<!-- 四个分栏 -->
<div class="my-row four">
	<div class="my-col-3">
	<span class="lcon"></span>
	<span class="name">本周最热</span>
	</div>
	<div class="my-col-3">
	<span class="lcon"></span>
	<span class="name">收藏集</span>
	</div>
	<div class="my-col-3">
	<span class="lcon"></span>
	<span class="name">线下活动</span>
	</div>
	<div class="my-col-3">
	<span class="lcon"></span>
	<span class="name">专栏</span>
	</div>			
</div>
<!-- 沸点 -->
<div class="my-row mg-t-10 boiling">
<div class="my-col-10 pd-10">
	<i class="boilingImg"></i>
	<span class="head">沸点</span>
</div>
<div class="my-col-1 textCenter pd-t-10 ">
<i class="icon iconfont icon-right"></i>
</div>
</div>
<!-- 滚动图 -->
<div class="row roll" >
	<div class="roller">
		<span class="mod" v-for="item in boil">
			<span class="title" v-bind:style="{background:'url('+item.src+')'}">{{item.title}}</span>
		</span>
		
		<span class="all">
			<i>></i>
			<br>
			<span class="fontS16">查看全部</span>
		</span>
	</div>
</div>
<!-- 热门文章 -->
<div class="my-row mg-t-10 hotArticle">
<div class="my-col-8 pd-10">
	<i class="hotImg"></i>
	<span class="head">热门文章</span>
</div>
<div class="my-col-3 textCenter lcon pd-t-10">
	<i class="icon iconfont icon-option"></i>
	<span>定制热门</span>
</div>
</div>
<!-- 文章列表 -->
<div class="my-row pd-10 articleList" v-for="item in active">
<div class="my-col-12" v-if="item.Img"> 
	<span class="title mg-b-5 " style="padding-right:1.4rem">{{ item.Active }}
	</span>
	<span class="colorCCC fontS14">
	<b>{{ item.NofP }}</b>人喜欢·
	<b>{{ item.usn }}</b>·
	<b>{{ item.time }}</b>
	</span>	
	<img class="Img" v-if="item.Img" v-bind:src="item.Img" alt="">
	
</div>
<div class="my-col-12" v-else="item.Img"> 
	<span class="title mg-b-5 " style="width:100%">{{ item.Active }}
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
<script src="./search.js"></script>
<style>
@import './search.css'
</style>