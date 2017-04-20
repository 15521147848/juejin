import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './component/index/index.vue'
import Home from './component/HomePage/home.vue' //引入首页组件
import Search from './component/search/search.vue' //引入搜索组件
import Message from './component/message/message.vue' //引入消息动态组件
import Mess from './component/message/mess.vue' // 引入消息组价
import Dyna from './component/message/dyna.vue' // 引入动态组件
import Me from './component/me/me.vue' //引入个人主页组件
import myLike from './component/myLike/myLike.vue'
import Personal from './component/personal/personal.vue' //引入个人主页组件
import History from './component/history/history.vue' //引入阅读过的文章组件
import Collect from './component/collect/collect.vue' //引入收藏集组件
import Est from './component/collect/est.vue' //引入收藏集子路由
import Att from './component/collect/att.vue' //引入收藏集子路由
import Label from './component/label/label.vue' //引入标签管理组件
import Yet from './component/label/yet.vue' //引入标签管理子路由
import All from './component/label/all.vue' //引入标签管理子路由
import Setting from './component/set/set.vue' //引入设置组件
Vue.use(VueRouter)
// 配置路由
const router = new VueRouter({
	routes:[
	{
		path:'/',
		redirect:'/home' //默认首页
	},
	{
		path:'/index',
		component:Index, //主页
		children:[
			{
		path:'/home',
		component:Home //子主页
		},
		{
			path:'/search',
			component:Search //搜索页
		},
		{
			path:'/message',
			component:Message, //动态和消息页
			children:[
			{
				path:"/",
				redirect:"/mess"
			},
			{
				path:"/mess",
				component:Mess //消息组件
			},
			{
				path:"/dyna",
				component:Dyna //动态组件
			}
			]
		},
		{
			path:'/me',
			component:Me //个人中心页
		}
			]
		},
	{
		path:"/personal",
		component:Personal //个人主页
	},
	{
		path:"/myLike",
		component:myLike //我喜欢的页面
	},
	{
		path:"/collect",
		component:Collect, //收藏集
		children:[
		{
			path:"/",
			redirect:"/est"
		},
		{
			path:"/est",
			component:Est //创建的
		},
		{
			path:"/att",
			component:Att //关注的
		}
		]
	},
	{
		path:"/history",
		component:History //阅读过的文章页面
	},
	{
		path:"/label",
		component:Label, //标签管理页面
		children:[
		{
			path:"/",
			redirect:"/yet"
		},
		{
			path:"/yet",
			component:Yet //已关注标签
		},
		{
			path:"/all",
			component:All //所有标签
		}
		]
	},
	{
		path:"/set",
		component:Setting //设置页面
	}
	]
})
export default router;