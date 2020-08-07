<template>
  <div>
    <h2>评论列表</h2>
    <div class="list">
      <div v-for="(item,index) in listx" :key="index">
        <div class="yonghu flex">
          <img src="../assets/image/touxiang.png" alt />
          <p>{{item.phone}}</p>
          <div class="dian flex">
            <van-icon name="good-job-o" @click="dianzan(item)" />
            <p>{{item.zan}}</p>
          </div>
        </div>
        <p id="nr">{{item.neirong}}</p>
      </div>
    </div>
    <div style="height:40px;"></div>
    <div class="shuo flex">
      <span style="font-size:38px;" @click="hui()">&lt;</span>
      <input type="text" placeholder="我来说一说" v-model="wo" />
      <p @click="fasong()">发送</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listx: [],
      wo: ""
    };
  },
  methods: {
    dianzan(obj) {
      obj.zan = obj.zan + 1;
    },
    fasong() {
      this.listx.push({
        phone: "137***6",
        neirong: this.wo,
        zan: 0
      });
      this.wo = "";
    },
    hui(){
        window.history.back()
    }
  },
  created() {
    let than = this;
    this.$axios
      .get(
        "https://www.fastmock.site/mock/994be8b7a9aa12f9bf9e59a5312214c7/news/zan"
      )
      .then(res => {
        than.listx = res.data.list;
      });
  }
};
</script>

<style scoped>
h2{
    display:flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    height: 40px;
    background: white;
    margin: 0;
    padding-top: 10px;
}
.felx {
  display: flex;
}
.list {
  width: 90%;
  margin-left: 5%;
  margin-top: 70px;
}
.yonghu > img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 20px;
}
.list > div {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
}
.yonghu {
  margin-top: 20px;
}
.yonghu>p{
    margin-left: 10px;
}
.shuo {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  align-items: center;
  z-index: 99;
  background: white;
}
.shuo>span{
    margin-left: 5px;
}
.shuo>input{
    border: none;
    border-bottom: 1px solid black;
    width: 70%;
    text-indent: 1em;
}
.shuo>p{
    margin-left: 10px;
}
.dian{
    align-items: center;
    margin-left: 100px;
}
#nr{
    margin-left: 15px;
}
</style>