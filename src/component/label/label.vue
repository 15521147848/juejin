<template>
<div id="label">
<div class="my-conect">
	<div class="my-row head  pd-b-0 color000">
		<div class="my-col-12 pd-20">
			<router-link to="/me" class="icon iconfont icon-left color000"></router-link>
			<span class="fontS20 mg-l-30">标签管理</span>
		</div>
		
		<router-link to="/yet" class="my-col-3 pd-t-10 pd-b-10 list colorCCC">
			已关注的标签
		</router-link>
		<router-link to="/all" class="my-col-3 pd-t-10 pd-b-10 list colorCCC">
			 所有标签
		</router-link>
	</div>

		<router-view></router-view>		
	
	
</div>

</div>
</template>
<script></script>
<style>
	@import './label.css'
</style>