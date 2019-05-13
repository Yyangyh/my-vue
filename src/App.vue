<template>
	<div id="app">
		<div style="height:100%;">
			<view-box ref="viewBox" >
				<x-header style="width:100%;position:fixed;left:0;top:0;z-index:100;">{{$route.meta.title}}
					<a slot="right" @click="handleQrcode">微信</a>
				</x-header>

				<transition :name="transitionName">
					<router-view class="Router"></router-view>
				</transition>

				<tabbar slot="bottom" ref="bottom" style="width:100%;position:fixed;left:0;bottom:0;z-index:100;">
					<tabbar-item :link="{name:'Home'}">
						<img slot="icon" src="./assets/icon_nav_button.png">
						<span slot="label">首页</span>
					</tabbar-item>
					<tabbar-item show-dot :link="{name:'Case'}">
						<img slot="icon" src="./assets/icon_nav_msg.png">
						<span slot="label">案例</span>
					</tabbar-item>
					<tabbar-item :link="{name:'Book'}">
						<img slot="icon" src="./assets/icon_nav_article.png">
						<span slot="label">留言</span>
					</tabbar-item>
					<tabbar-item :link="{name:'Aboutus'}">
						<img slot="icon" src="./assets/icon_nav_cell.png">
						<span slot="label">关于</span>
					</tabbar-item>
				</tabbar>

				<div v-transfer-dom>
					<x-dialog v-model="show" class="dialog-demo" hide-on-blur>
						<div class="img-box">
							<img src="./assets/weixin.jpg" width="200" />
						</div>
						<div @click="show=false">
							<p>关闭</p>
						</div>
					</x-dialog>
				</div>
			</view-box>
		</div>

	</div>
</template>

<script>
	import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Tabbar, TabbarItem,Qrcode, XDialog } from 'vux'
	export default {
		directives: {
			TransferDom
		},
		components: {
			XHeader,
			Actionsheet,
			ButtonTab,
			ButtonTabItem,
			Tabbar,
			TabbarItem,
			Qrcode,
			XDialog
		},
		data() {
			return {
				transitionName: 'slide-right',
				show:false
			}
		},
		methods: {
			handleQrcode() {
				this.show = true
			}
		}
	}
</script>

<style>
	html,
	body {
		height: 100%;
		width: 100%;
		overflow-y: auto;
	}
	
	.Router {
		width: 100%;
		height: 100%;
		transition: all .8s ease;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		padding-top: 46px;
		padding-bottom:28px
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100% 0);
	}
	
	.img-box {
		padding: 20px;
	}
	
	.weui-tabbar__item {
		text-decoration: none
	}
</style>