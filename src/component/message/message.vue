<template>
<div id="message">
<div class="my-content">
<div class="my-row head">
	<router-link to="/mess" class="my-col-6 textCenter ">
		消息
	</router-link>
	<router-link to="/dyna" class="my-col-6 textCenter ">
		动态
	</router-link>
</div>
<div class="my-row ">
	<router-view ></router-view>
</div>
</div>
</div>
</template>
<script>
	
</script>
<style>
@import './message.css'
</style>