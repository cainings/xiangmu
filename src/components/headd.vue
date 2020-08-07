<template>
  <div class="aa">
    <div class="tou flex">
      <div>
        岳阳日报
      </div>
      <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
      <van-icon name="scan" />
    </div>
        <div class="aa" style="height:85%;overflow:auto;">
          <van-tabs>
      <!-- <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">内容 {{ index }}</van-tab> -->
      <van-tab :title="'头条'" >
        <toutiaox></toutiaox>
      </van-tab>
      <van-tab :title="'时政'">
        <shizheng></shizheng>
      </van-tab>
      <van-tab :title="'问政'"></van-tab>
      <van-tab :title="'县区'"></van-tab>
      <van-tab :title="'热搜'"></van-tab>
      <van-tab :title="'精选'"></van-tab>
    </van-tabs>
        </div>
  </div>
</template>

<script>
import toutiaox from "@/components/toutiaox.vue";
import shizheng from "@/components/shizheng.vue";
// import tail from "@/components/tail.vue";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    toutiaox,
    shizheng
  }
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.flex {
  display: flex;
}
.van-search {
  background: red !important;
}
.van-search {
  width: 60% !important;
}
.tou{
  background: red;
  align-items: center;

 
}
.tou>div:nth-of-type(1){
  display: flex;
  align-items: center;
  margin-left: 7px;
  color: white;
  font-family: "华文新魏";
  font-size: 20px;
}
.van-icon{
  font-size: 30px !important;
}
</style>