<template>
<div id="set">
<div class="my-content pd-t-20">
	<div class="my-row pd-l-20 head myFixed t0 l0">
		<div class="my-col-1">
			<router-link to="/me"><i class="icon iconfont icon-left"></i></router-link>
		</div>
		<div class="my-col-11">
			<span class="fontS20 pd-l-20">设置</span>
		</div>
	</div>
	<div class="my-row pd-10 pd-l-20 pd-r-20 mg-t-50 bgFFF">
		<div class="my-col-8 textLeft">邮箱</div>
		<div class="my-col-4 textRight colorCCC">未设置</div>
	</div>
	<div class="my-row pd-10 pd-l-20 pd-r-20  bgFFF">
		<div class="my-col-8 textLeft">手机号</div>
		<div class="my-col-4 textRight colorCCC">未设置</div>
	</div>
	<div class="my-row pd-10 pd-l-20 pd-r-20  bgFFF">
		<div class="my-col-12 textLeft">修改账户密码</div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 mg-t-10 bgFFF">
		<div class="my-col-10 textLeft fontS20">绑定新浪微博</div>
		<div class="my-col-2 textRight colorCCC"><mt-switch :value.sync="true" class="mt-switch"></mt-switch></div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 bgFFF">
		<div class="my-col-10 textLeft fontS20">绑定微信</div>
		<div class="my-col-2 textRight colorCCC"><mt-switch :value.sync="true" class="mt-switch"></mt-switch></div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 bgFFF">
		<div class="my-col-10 textLeft fontS20">绑定Github</div>
		<div class="my-col-2 textRight colorCCC"><mt-switch :value.sync="true" class="mt-switch"></mt-switch></div>
	</div>
	<div class="my-row pd-10 pd-l-20 pd-r-20 mg-t-10 bgFFF">
		<div class="my-col-8 textLeft">清除缓存</div>
		<div class="my-col-4 textRight colorCCC">3.47MB</div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 bgFFF">
		<div class="my-col-10 textLeft fontS20">向我推送文章</div>
		<div class="my-col-2 textRight colorCCC"><mt-switch :value.sync="true" class="mt-switch"></mt-switch></div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 bgFFF">
		<div class="my-col-10 textLeft fontS20">移动网络下首页不显示图片</div>
		<div class="my-col-2 textRight colorCCC"><mt-switch :value.sync="true" class="mt-switch"></mt-switch></div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 bgFFF">
		<div class="my-col-10 textLeft fontS20">自动检测粘贴板快速分享</div>
		<div class="my-col-2 textRight colorCCC"><mt-switch :value.sync="true" class="mt-switch"></mt-switch></div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 bgFFF">
		<div class="my-col-12 textLeft fontS20">关于</div>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 mg-t-10 bgFFF">
		<a href="./login.html" class="my-col-12 textCenter fontS20 colorRED">退出登录</a>
	</div>
	<div class="my-row opt  pd-l-20 pd-r-20 mg-t-10">
		<div class="my-col-12 textCenter fontS16 colorCCC">掘金4.10·juejin</div>
	</div>
</div>
</div>
</template>
<script></script>
<style>
	@import './set.css'
</style>