<template>
  <div>
    <div class="shit">
      <span @click="tuihui()">&lt;</span>
      <van-icon name="star-o" />
    </div>
    <img src="../assets/image/zz1.jpg" alt id="tupain1" />
    <div class="zbj">
      <div class="zbj-1">
        <p>正在为你直播</p>
        <h3>岳阳中院庭审直击：驾车追小偷致其受伤，要不要陪？</h3>
      </div>
      <van-tabs @click="onClick">
        <van-tab title="图文直播间">
          <p>主持人：岳阳日报</p>
          <p>06月11日</p>
          <img src="../assets/image/zz2.jpg" alt />
        </van-tab>
        <van-tab title="聊起来">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {};
  },
  methods: {
    tuihui() {
      window.history.back();
    },
    onClick(name, title){
        Toast(title);
    }
  }
};
</script>

<style scoped>

* {
  box-sizing: border-box;
}
.shit {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background: black;
  opacity: 0.3;
}
.shit > span {
  font-size: 35px;
  margin-left: 5%;
  color: white;
}
.shit > i {
  font-size: 25px;
  margin-left: 75%;
  color: white;
}

.zbj {
  width: 90%;
  margin-left: 5%;
}
img {
  width: 100%;
  height: 220px;
}
</style>