<template>
<div id="me">
<div class="my-content " >
<div class="my-row head">
	<div class="mt-col-12 fontS20 textCenter colorFFF">
	我
	</div>
</div>
<router-link to="/personal" class="my-row user mg-t-10 pd-10">
	<div class="my-col-2 userImg">
	</div>
	<div class="my-col-9">
		<strong class="phoneNum">15521147848</strong>
		<br>
		<a class="job">添加职位@添加公司</a>
	</div>
	<div class="my-col-1 textRight">
	<i class=" icon iconfont icon-right"></i>
	</div>
	
</router-link>
<!-- 我喜欢的 -->
<router-link to="/myLike" class="my-row list myLike pd-10 mg-t-10">
		<div class="my-col-1 textLeft icon iconfont icon-aixin colorGREEN"></div>
		<div class="my-col-10">我喜欢的</div>
		<div class="my-col-1 textRight colorCCC"><i>5</i>篇</div>
</router-link>
<!-- 收藏集 -->
<router-link to="/collect" class="my-row list myLike pd-10">
		<div class="my-col-1 textLeft icon iconfont icon-scji colorBLUE"></div>
		<div class="my-col-10">收藏集</div>
		<div class="my-col-1 textRight colorCCC"><i>0</i>个</div>
</router-link>
<!-- 阅读过的文章 -->
<router-link to="history" class="my-row list myLike pd-10">
		<div class="my-col-1 textLeft icon iconfont icon-yanjing colorCCC"></div>
		<div class="my-col-10">阅读过的文章</div>
		<div class="my-col-1 textRight colorCCC"><i>103</i>篇</div>
</router-link>
<!-- 标签管理 -->
<router-link to="label" class="my-row list myLike pd-10 ">
		<div class="my-col-1 textLeft icon iconfont icon-biaoqian colorCCC"></div>
		<div class="my-col-10">标签管理</div>
		<div class="my-col-1 textRight colorCCC"><i>34</i>个</div>
</router-link>
<!-- 掘金周榜 -->
<div class="my-row list myLike pd-10 mg-t-10">
		<div class="my-col-1 textLeft icon iconfont icon-tubiaozhizuomoban colorRED"></div>
		<div class="my-col-11">掘金周榜</div>
		
</div>
<!-- 意见反馈 -->
<div class="my-row list myLike pd-10 ">
		<div class="my-col-1 textLeft icon iconfont icon-yjfk colorCCC"></div>
		<div class="my-col-11">意见反馈</div>
		
</div>
<!-- 设置 -->
<router-link to="/set" class="my-row list myLike pd-10 ">
		<div class="my-col-1 textLeft icon iconfont icon-option colorCCC"></div>
		<div class="my-col-11">设置</div>
</router-link>
</div>
</div>
</template>
<script></script>
<style>
	@import './me.css'
</style>