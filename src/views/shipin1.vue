<template>
  <div>
    <div class="shit">
      <span @click="tuihui()">&lt;</span>
      <van-icon name="star-o" />
    </div>
    <video controls>
      <source src="../assets/video/sp1.mp4" type="video/mp4" />
    </video>
    <h3></h3>
    <div class="timu flex">
      <van-icon name="bullhorn-o" />
      <p>04月17日 11:14</p>
    </div>
    <div class="flex" style="justify-content:center;margin-top: 30px;">
      <p>分享至:</p>
    </div>
    <div class="fx">
      <img src="../assets/image/fx.png" alt />
    </div>
    <div class="pl flex">
      <input type="text" placeholder="我来说两句..." />
      <van-icon name="more-o" @click="shuo()" />
      <p style="margin-left:5px;">4</p>
      <van-icon name="good-job-o" />
      <p>789</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    tuihui() {
      window.history.back();
    },
    shuo() {
      this.$router.push({
        path: "/pinglunList"
      });
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
}
* {
  box-sizing: border-box;
}
video {
  width: 100%;
  height: 200px;
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
.timu {
  width: 90%;
  height: 70px;
  align-items: center;
  margin-left: 5%;
  border-bottom: 1px solid black;
}
.timu > i {
  font-size: 30px;
  color: white;
  background: red;
  border-radius: 20px;
  margin-left: 10px;
}
.timu > p {
  font-size: 18px;
  margin-left: 10px;
  color: gray;
}
.fx {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.fx > img {
  width: 80%;
}
.pl {
  position: fixed;
  bottom: 0px;
  align-items: center;
  width: 100%;
  height: 40px;
}
.pl > i:nth-of-type(1) {
  font-size: 28px;
  margin-left: 8px;
}
.pl > i:nth-of-type(2) {
  font-size: 28px;
  margin-left: 15px;
}
.pl > input {
  border-radius: 20px;
  width: 180px;
  height: 30px;
  margin-left: 5px;
  text-indent: 1em;
}
</style>