<template>
	<div id="home">
		<swiper :list="demo01_list" auto loop></swiper>
		<group :title="news">
			<cell :title="item.title" :key="index" is-link v-for="(item,index) in news_list" :link="{name:'Detail',query:{ id:item.id }}">
				<img slot="icon" width="40" style="display:block;margin-right:5px;" :src="'https://images.weserv.nl/?url='+item.image" />
			</cell>
		</group>
	</div>
</template>

<script>
	import { Swiper, SwiperItem, Cell, CellBox, Group, Badge, Search, Grid, GridItem } from 'vux'
	import showdoc from '../assets/showdoc.png'
	import mini from '../assets/mini.png'
	import backstage from '../assets/backstage.png'
	import official from '../assets/official.png'
	export default {
		name: 'Home',
		data() {
			return {
				news: '',
				news_list: [],
				demo01_list: [{
					url: 'javascript:',
					img: showdoc,
					title: '仿showdoc'
				}, {
					url: 'javascript:',
					img: backstage,
					title: '后台管理系统'
				}, {
					url: 'javascript:',
					img: mini,
					title: '微信小程序',
				}, {
					url: 'javascript:',
					img: official,
					title: '得实官网',
				}]

			}
		},
		components: {
			Swiper,
			SwiperItem,
			Group,
			Cell,
			CellBox,
			Badge,
			Search,
			Grid,
			GridItem
		},
		methods: {
			getNews() {
				this.axios.get('/zhihu/api/4/news/latest').then(resp => {
					console.log(resp.data.top_stories)
					this.news = '知乎 ' + resp.data.date
					this.news_list = resp.data.top_stories
				}).catch(err => {
					console.log(err);
				})
			}
		},
		created() {
			this.getNews()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>