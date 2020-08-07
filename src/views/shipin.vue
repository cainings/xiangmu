<template>
  <div>
    <div class="sss">视频</div>
    <van-tabs v-model="activeName" :title-active-color="'orangered'" :color="'orangered'">
      <van-tab title="精选" name="a">
        <div class="st">
          <div class="st-1 flex">
            <img src="../assets/image/1.png" alt @click="tiaozhuan()"/>
            <div class="st-1-1">
              <p>{{goodsnew.title}}</p>
              <p>{{goodsnew.baoshe}}</p>
            </div>
          </div>
          <div class="st-1 flex">
            <img src="../assets/image/2.png" alt @click="tiaozhuan()"/>
            <div class="st-1-1">
              <p>{{goodsnew2.title}}</p>
              <p>{{goodsnew2.baoshe}}</p>
            </div>
          </div>
          <div class="st-1 flex">
            <img src="../assets/image/3.png" alt @click="tiaozhuan()"/>
            <div class="st-1-1">
              <p>{{goodsnew3.title}}</p>
              <p>{{goodsnew3.baoshe}}</p>
            </div>
          </div>
          <div class="st-1 flex">
            <img src="../assets/image/4.png" alt @click="tiaozhuan()"/>
            <div class="st-1-1">
              <p>{{goodsnew4.title}}</p>
              <p>{{goodsnew4.baoshe}}</p>
            </div>
          </div>
          <div class="st-1 flex">
            <img src="../assets/image/2.png" alt @click="tiaozhuan()"/>
            <div class="st-1-1">
              <p>{{goodsnew2.title}}</p>
              <p>{{goodsnew2.baoshe}}</p>
            </div>
          </div>
          <div class="st-1 flex">
            <img src="../assets/image/3.png" alt @click="tiaozhuan()"/>
            <div class="st-1-1">
              <p>{{goodsnew3.title}}</p>
              <p>{{goodsnew3.baoshe}}</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="直播" name="b">
        <div v-for="(item,index) in zhibo" :key="index" class="zhi">
          <img src="../assets/image/zhibo1.png" alt="" @click="zhibojian()">
          <div>
            <p>{{item.biaoti}}</p>
            <p>{{item.baoshe}}</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div style="height:50px;"></div>
    <tail></tail>
  </div>
</template>

<script>
import tail from "@/components/tail.vue";
export default {
  data() {
    return {
      activeName: "",
      goodsnew: [],
      goodsnew2: [],
      goodsnew3: [],
      goodsnew4: [],
      zhibo:[]
    };
  },
  components: {
    tail
  },
  created() {
    let than = this;
    this.$axios
      .get(
        "https://www.fastmock.site/mock/994be8b7a9aa12f9bf9e59a5312214c7/news/shipin",
        {
          // 还可以直接把参数拼接在url后边
        }
      )
      .then(res => {
        than.goodsnew = res.data.shipin[0];
        than.goodsnew2 = res.data.shipin[1];
        than.goodsnew3 = res.data.shipin[2];
        than.goodsnew4 = res.data.shipin[3];
        than.zhibo = res.data.zhibo;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    tiaozhuan(){
        this.$router.push({
          path: "/shipin1"
        });  
    },
    zhibojian(){
      this.$router.push({
        path: "/zhibojian"
      });  
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.flex {
  display: flex;
}
.sss {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background: white;
}
.van-tabs--line{
  margin-top:30px;
  }
.st {
  width: 90%;
  margin-left: 5%;
}
.st-1 {
  width: 100%;
  margin-top: 5%;
  height: 100px;
  border-bottom: 1px solid black;

}
.st-1 > img {
  width: 40%;
  height: 80px;
  border-radius: 10px;
}
.st-1-1 {
  width: 55%;
  margin-left: 5%;
}
p {
  margin: 0;
  padding: 0;
}
.st-1-1 > p:nth-of-type(2) {
  width: 60px;
  margin-top: 35px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  height: 20px;
}
.zhi{
  width: 90%;
  margin-left: 5%;
  height: 100px;
  display: flex;
  padding-top: 10px;
  margin-top: 10px;
}
.zhi>img{
  width: 40%;
  height: 80px;
}
.zhi>div{
  margin-left: 5px;
}
.zhi>div>p:nth-of-type(2){
  margin-top: 15px;
  border: 1px solid black;
  border-radius: 15px;
  width: 70px;
  font-size: 14px;
  text-align: center;
}
</style>