<template>
	<div>
		<header>
			<img src="../assets/face.png" class="face" />
			<h2>杨宇航</h2>
		</header>

		<tab v-model="index">
			<tab-item selected @on-item-click="onItemClick">个人简介</tab-item>
			<tab-item @on-item-click="onItemClick">技能特长</tab-item>
		</tab>
		<div class="tab-content">
			<div v-show="index==0">
				1996年07月出生，大专学历，计算机系，软件设计专业，2018年毕业于广东邮电职业技术学院。<br/><br/> 2017年07月参加工作，进入佛山亿动网络有限公司，职位：web前端。
				<br/><br/> 主要负责公司产品前端JS交互及开发，HTML静态页面编写，并确保浏览器兼容性，并与设计人员、后台工程师配合完成系统前后端整合。
				<br/><br/> 2018年01月因个人原因离职，03月份进入广州得实电子科技有限公司，职位：web前端。
				<br/><br/> 主要负责：维护及优化网站前端性能，优化前端开发模式和规范，修复测试发现的bug,确保质量。通过禅道项目管理工具，按规范执行并按时完成任务，开发任务完成时需提交版本及提交测试任务给测试人员，按时提交工作周报汇报工作进展及下周计划等给项目经理掌握项目情况。
				<br/><br/>
			</div>
			<div v-show="index==1">
				<p :key="index" v-for="(item, index) in skill">
					{{item.name}}
					<x-progress :percent="parseInt(item.value)" :show-cancel="false" :class="item.style"></x-progress><span>{{item.label}}</span>
				</p>

			</div>
		</div>
		<a href="tel://17724229315" class="my-btn">
			<x-button :gradients="['#1D62F0', '#19D5FD']" style="width:60%">CALL ME</x-button>
		</a>
	</div>
</template>
<script>
	import { Tab, TabItem, XProgress, XButton } from 'vux'

	export default {
		components: {
			Tab,
			TabItem,
			XProgress,
			XButton
		},
		data() {
			return {
				index: 0,
				intro: '',
				skill: [{
					"name": "HTML,CSS,JavaScript",
					"label": "熟练",
					"value": "80",
					"style": "success"
				}, {
					"name": "jQuery，bootstrap",
					"label": "熟练",
					"value": "80",
					"style": "success"
				}, {
					"name": "ES6语法",
					"label": "熟练",
					"value": "80",
					"style": "success"
				}, {
					"name": "微信小程序,vue.js",
					"label": "良好",
					"value": "70",
					"style": "info"
				}, {
					"name": "require.js前端模块化",
					"label": "良好",
					"value": "70",
					"style": "info"
				}, {
					"name": "Git，Svn等版本控制工具",
					"label": "良好",
					"value": "70",
					"style": "warning"
				}]
			}
		},
		methods: {
			onItemClick(index) {
				//console.log(index)
				this.index = index
			},
		},
	}
</script>
<style>
	header {
		text-align: center;
		padding: 20px;
	}
	
	header .face {
		border-radius: 50%;
		border: 1px solid #cccccc;
	}
	
	header h2 {
		font-size: 14px;
		margin: 0;
		padding: 0;
	}
	
	.tab-content {
		padding: 20px;
		line-height: 150%;
		font-size: 14px;
	}
	
	.weui-progress__bar {
		height: 10px !important;
	}
	
	.success .weui-progress__inner-bar {
		background-color: green !important;
	}
	
	.warning .weui-progress__inner-bar {
		background-color: greenyellow !important;
	}
	
	.danger .weui-progress__inner-bar {
		background-color: coral !important;
	}
	
	p span {
		color: grey;
	}
	
	.my-btn {
		text-decoration: none;
		cursor: hand;
	}
</style>