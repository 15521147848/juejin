<template>
<div id="home" class="mg-b-50">
	<!-- 头部列表 -->
	<div class="my-content">
	<div class="my-row">
	<div class="my-col-12 w100 myFixed t0 l0 headList">
		<ul>
			<li class="colorFFF pd-10">首页</li>
		</ul>
		<span class="myAbsolute t0 pd-10 r0 icon iconfont icon-down colorFFF"></span>
	</div>
	</div>
	</div>
<!-- 热门推荐 -->
	<div class="my-content mg-t-50 pd-b-20 hot">
		<div class="my-row head pd-10 ">
			<div class="my-col-10">
				<span class="icon iconfont icon-huoyan1"></span>
				<span class="mg-l-5">热门推荐</span>
			</div>
			<div class="my-col-1 textRight">
				<span class="loop colorCCC icon iconfont icon-shuaxin"></span>
			</div>
			<div class="my-col-1 textRight">
				<span class="close colorCCC icon iconfont icon-close"></span>
			</div>
		</div>
		<div class="my-row title pd-10 pd-t-5 pd-b-5" v-for="item in message">
			<div class="my-col-10">
				<span class="world">{{item.summ}}</span>
				<span class="icon colorCCC fontS14">
					<i class="icon iconfont icon-aixin"></i><b>{{item.Gv}}</b>
					<i class="icon iconfont icon-presonl mg-l-10"></i><b>{{item.usn}}</b>
					<i class="icon iconfont icon-clock mg-l-10"></i><b>{{item.time}}</b>
				</span>
			</div>
			<div class="my-col-2 textCenter">
				<span class="img">
					<img v-bind:src="item.img" alt="">
				</span>
			</div>
		</div>
		

	</div>
<!-- 文章列表 -->
<div class="article bgFFF mg-t-10 pd-t-10 pd-b-10" v-for="item in main">
<!-- 头部信息 -->
<div class="my-row pd-l-10 pd-r-10 header">
	<div class="my-col-1">
	<span class="useImg">
		<img v-if="item.head" v-bind:src="item.head" alt="">
	</span>
	</div>
	<div class="my-col-11 textLeft pd-l-5">
	<div class="usn">
		<span v-if="item.name">{{item.name}}</span>
	</div>

	<div class="usnOther colorCCC">
		<span v-if="item.job">{{item.job}}</span>
		<span v-if="item.time"><b>·</b>{{item.time}}</span>	
	</div>
	<span class="myAbsolute t0 r10 colorCCC" v-if="item.largeClass">{{item.largeClass}}</span>
	</div>
</div>
<!-- 文章内容 -->
<div class="my-row main pd-b-10 pd-t-10">
<div class="my-col-12" >
	<!-- 文章大图 -->
	<span class="img" v-if="item.Img"><img v-bind:src="item.Img" alt=""></span>
<!--其他内容-->
	<div class="pd-10 pd-b-0 ">
	<!-- 标题 -->
	<div class="title" v-if="item.headLine">
		<h3>{{item.headLine}}</h3>
	</div>
	<!-- 文章概述 -->
	<div class="summ textLeft" v-if="item.summ">
	<span>{{item.summ}}</span>
	<span class="mg-t-10 mg-b-10" v-if="item.summ.length>50"><b>全文</b></span>
	</div>
	<!-- 文章链接 -->
	<a v-bind:href="item.link">
	<div class="link" v-if="item.link">
		<span class="linkImg" v-if="item.linkImg">
			<img v-bind:src="item.linkImg" alt="">
		</span>
		<span class="linkTitle mg-l-5">{{item.linkSumm}}</span>
	</div>
	</a>
	<!-- 点赞和评论 -->
	<div class="gv colorCCC fontS20 pd-t-10">
		<i class="icon iconfont icon-give"></i><span class="fontS12 mg-l-5">{{item.give}}</span>
		<i class="icon iconfont icon-task mg-l-10"></i>
	</div>
	</div>
	
</div>

</div>
</div>
</div>
</template>
<script src="./home.js">
</script>

<style>
@import './home.css'
</style>