<template>
  <div>
    <div class="tu">
      <img src="../assets/image/yuan.png" alt />
    </div>
    <div class="zhuce">
      <p>手机号注册</p>
      <div class="a">
        <van-icon name="manager-o" />
        <input type="text" placeholder="请输入您的手机号码" v-model="phone" />
        <p @click="yanzheng">验证码</p>
      </div>
      <div class="b">
        <van-icon name="envelop-o" />
        <input type="text" placeholder="请输入您的验证码" v-model="yan" />
      </div>
      <div class="c">
        <van-icon name="goods-collect-o" />
        <input type="password" placeholder="请输入您的密码" v-model="password" />
      </div>
      <p class="cuowu">{{error}}</p>
      <button class="z" @click="checkZ">注册</button>
      <div class="d flex">
        <input type="checkbox" v-model="cc"/>
        <p>
          我已阅读同意
          <span>服务条款</span>和
          <span>隐私政策</span>
        </p>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import tail from "@/components/tail.vue";
export default {
  data() {
    return {
      phone: "",
      yan: "",
      password: "",
      code: "",
      error: "",
      cc:false
    };
  },
  components: {
    tail
  },
  methods: {
    yanzheng() {
      console.log(this.cc)
      var code = "";
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 4;

      //设置随机字符
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
        //设置随机数范围,这设置为0 ~ 36
        var index = Math.floor(Math.random() * 9);

        //字符串拼接 将每次随机的字符 进行拼接
        code += random[index];
      }

      //将拼接好的字符串赋值给展示的code
      this.code = code;
      alert(this.code);
    },
    checkZ: function() {
      var re = /^1[3456789]\d{9}$/;
      if (!re.test(this.phone)) {
        this.error = "手机格式错误！";
      } else if (this.code != this.yan) {
        this.error = "验证码错误!";
      }else if(this.cc!=true){
        this.error = "请先阅读并同意条款！"
      } else {
        alert("注册成功！");
        this.$router.push({
          path:"/login"
        })
      }

    }
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
.tu {
  display: flex;
  justify-content: center;
}
.tu > img {
  width: 140px;
  height: 140px;
  margin-top: 30px;
}
input {
  border: none;
  font-size: 14px !important;
}
.zhuce > div:nth-of-type(1) > i {
  font-size: 28px;
}
.zhuce > div:nth-of-type(2) > i {
  font-size: 28px;
  margin-left: 6px;

}
.zhuce > div:nth-of-type(3) > i {
  font-size: 28px;
  margin-left: 6px;

}
.zhuce {
  width: 80%;
  margin-left: 10%;
}
.zhuce > p:nth-of-type(1) {
  font-size: 20px;
  width: 120px;
  font-family: "华文楷体";
  font-weight: bolder;
  margin-left: 5%;
}
.a {
  width: 90%;
  margin-left: 5%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}
.a > p:nth-of-type(1) {
  font-size: 13px;
}
.b {
  width: 90%;
  margin-left: 5%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}
.c {
  width: 90%;
  margin-left: 5%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}
.a > input {
  width: 150px;
}
.a > p {
  width: 60px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
}
.z {
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  background-color: rgba(230, 50, 50, 0.6);
  border: none;
  height: 30px;
  border-radius: 15px;
  color: white;
  font-family: "华文楷体";
}
.d {
  align-items: center;
}
.d > p {
  font-size: 14px;
}
.d > p > span {
  color: red;
  text-decoration: underline;
}
.cuowu{
  font-size: 15px;
  margin-left: 5%;
  color: red;
  font-family: "楷体";
}
</style>