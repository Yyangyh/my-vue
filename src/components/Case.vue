<template>
	<div id="case">
		

            <div>
                <panel :list="list" :type="'5'"></panel>
            </div>

	</div>
</template>
<script>
	import { Search, Divider, Panel, LoadMore, XHeader } from 'vux'
	import showdoc from '../assets/showdoc.png'
	import mini from '../assets/mini.png'
	import backstage from '../assets/backstage.png'
	import official from '../assets/official.png'
	import dascomyun from '../assets/dascomyun.jpg'
	export default {
		data() {
			return {
				scrollerStatus: {
					pullupStatus: 'default'
				},
				list: [{
					src: showdoc,
					title: '仿showdoc',
					desc:'jQuery + require.js + ueditor.js'
				}, {
					src: backstage,
					title: '后台管理系统',
					desc:'jQuery + require.js +layui'
				}, {
					src: mini,
					title: '微信小程序',
					desc:'微信小程序API + weui'
				}, {
					src: official,
					title: '得实官网',
					desc:'jQuery + require.js + bootstrap'
				}, {
					src: dascomyun,
					title: '得实打印',
					desc:'jQuery + require.js + 微信JS-SDK'
				}],
			}
		},

		components: {
			Search,
			Panel,
			LoadMore,
			XHeader,
			Divider
		},
	}
</script>
<style lang="less" scoped>
	a {
		text-decoration: none
	}
</style>