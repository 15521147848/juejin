<template>
<div id="personal">
<div class="my-conent">
	<div class="my-row head">
		<div class="my-col-12">
			<router-link to="/me" class="icon iconfont icon-left"></router-link>
			<span class="mg-l-30 fontS20">个人主页</span>
		</div>	
	</div>
	<!-- 资料编写 -->
	<div class="my-row mg-t-15 data pd-20">
		<div class="my-col-12">
			<span class="userImg dpInBk"></span>
			<span class="mg-l-10 fontS20">15521147848</span>
		</div>
		<div class="my-col-2 mg-t-10">
		<span class="fontS20">16</span><br>
		<i class="colorCCC fontS14">关注</i>
		</div>
		<div class="my-col-2 mg-t-10">
		<span class="fontS20">0</span><br>
		<i class="colorCCC fontS14">关注者</i>
		</div>
		<div class="my-col-8 textRight mg-t-10">
		<span class="compile dpInBk">编辑</span><br>
		</div>
	</div>		
	<!-- 动态 -->
	<div class="my-row pd-15 mg-t-10 dynamic bgFFF">
		<div class="my-col-12 fontS18">
			动态
		</div>
	</div>
	<!-- 收藏集 -->
	<div class="my-row pd-15 mg-t-10 dynamic bgFFF">
		<div class="my-col-12 fontS18">
			收藏集
		</div>
	</div>
	<!-- 喜欢的文章 -->
	<div class="my-row pd-15 mg-t-10 dynamic bgFFF clearAfter">
		<div class="my-col-12 fontS18 ">
			喜欢的文章
		</div>
	</div>
	<div class="my-row pd-15 dynamic bgFFF">
		<div class="my-col-12 fontS18">
			关注的标签
		</div>
	</div>
</div>		
</div>
</template>
<script></script>
<style>
	@import './personal.css'
</style>