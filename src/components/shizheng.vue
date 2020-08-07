<template>
  <div>
    <van-tabs type="card">
      <van-tab title="领导专栏">
        <div class="all">
          <div v-for="(item,index) in goodsshizhengn" :key="index" class="zhuanji">
            <p>{{ item.title }}</p>
            <img :src="item.ImgSrc" />
            <p>{{ item.subTitle }}</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="时政要闻">
        <div class="wo">
          <div v-for="(item,index) in goodsshizhengn" :key="index" class="didi flex">
            <img :src="item.ImgSrc" />
            <div class="lala">
              <p>{{ item.title }}</p>
              <p>{{ item.subTitle }}</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsshizhengn: []
    };
  },
  created() {
    // let than = this;
    this.$axios
      .get(
        "https://www.fastmock.site/mock/994be8b7a9aa12f9bf9e59a5312214c7/news/lunbo",
        {
          // 还可以直接把参数拼接在url后边
        }
      )
      .then(res => {
        for (let i = 0; i < res.data.data.shizhengT.length; i++) {
          let obj = {
            title: res.data.data.shizhengN[i]["neirong"],
            subTitle: res.data.data.shizhengN[i]["baoshe"],
            ImgSrc: res.data.data.shizhengT[i]
          };

          this.goodsshizhengn.push(obj);
          obj = "";
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.van-tab--active {
  background: white !important;
  border: 0;
}
.van-tab .van-tab__text--ellipsis {
  color: black;
}
.van-tab--active .van-tab__text--ellipsis {
  color: red !important;
}
.van-tabs__nav--card {
  margin: 0 !important;
}
.van-tab {
  border: none !important;
}
.van-tabs__nav--card {
  border: none !important;
}
.zhuanji {
  width: 95%;
  margin-left: 8px;
  height: 210px;
  border-bottom: 1px solid grey;
}
.zhuanji > p:nth-of-type(1) {
  padding-top: 10px;
}
.zhuanji > p:nth-of-type(2) {
  font-size: 12px;
  border: 1px solid black;
  border-radius: 15px;
  width: 70px;
  height: 17px;
  text-align: center;
}
.zhuanji > p {
  font-family: "宋体";
}
.zhuanji > img {
  width: 100%;
  height: 120px;
  border-radius: 10px;
}
.didi {
  width: 95%;
  margin-left: 8px;
  height: 120px;
  border-bottom: 1px solid grey;
  align-items: center;
}
.didi>img{
  width: 40%;
  height: 80%;
  border-radius: 5px;
}
.lala{
  margin-left: 8px;
}
.lala>p:nth-of-type(2){
  font-size: 13px;
  border: 1px solid black;
  border-radius: 20px;
  width: 65px;
  height: 20px;
  text-align: center;
  
}
</style>