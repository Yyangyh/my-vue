<template>
    <div id="detail">
        <header><img :src='img' /><h2>{{title}}</h2></header>
        <article v-html="content"></article>
    </div>
</template>
<script>
export default {
  data () {
    return {
      content:'',
      title:'',
      img:''
    }
  },
  methods:{
    getInfo() {
      let id = this.$route.query.id
      this.axios.get('zhihu/api/4/news/'+id).then(resp => {
           console.log(resp)
          this.title = resp.data.title
          this.img = resp.data.image
          this.content = resp.data.body
      }).catch(err => {
          console.log(err);
      })
    }
  },
  mounted() {
     this.getInfo()
  }    
}
</script>
<style lang="less" scoped>
header {
  position: relative; height: 10rem; overflow: hidden;  
  img { 
    width: 100%; position: absolute; top:0; left: 0; z-index: 1; 
  }
  h2 { 
    position: absolute; width: 100%; text-align:center; left: 0; bottom: 0; z-index: 2; color: #ffffff; background: rgba(0, 0, 0, 0.5); padding: 10px; margin: 0; font-size: 18px
    }
}

article  {
  padding: 10px; 
}
</style>
