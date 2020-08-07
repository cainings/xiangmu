<template>
  <div>
    <div class="tu">
      <img src="../assets/image/yuan.png" alt />
    </div>
    <div class="denglu">
      <p>欢迎登录</p>
      <div>
        <van-icon name="manager-o" />
        <input type="text" placeholder="请输入您的手机号码" v-model="phone" />
      </div>
      <div>
        <van-icon name="goods-collect-o" />
        <input type="password" placeholder="请输入您的密码" v-model="password" />
      </div>
      <p id="mima">{{error}}</p>
      <button class="d" @click="check">立即登录</button>
      <div class="x flex">
        <p @click="zhu">立即注册</p>
      </div>
    </div>
    <div class="qita flex">
      <div>—————</div>
      <p>其他登陆方式</p>
      <div>—————</div>
    </div>
    <img src="../assets/image/123.png" alt id="di" />
    <tail></tail>
  </div>
</template>

<script>
import tail from "@/components/tail.vue";
export default {
  data() {
    return {
      user: [],
      phone: "",
      password: "",
      error: ""
    };
  },
  components: {
    tail
  },
  created() {
    this.$axios
      .get(
        "https://www.fastmock.site/mock/994be8b7a9aa12f9bf9e59a5312214c7/news/lunbo",
        {
          // 还可以直接把参数拼接在url后边
        }
      )
      .then(res => {
        this.user = res.data.data.user[0];
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    check: function() {
      var re = /^1[3456789]\d{9}$/;
      if (this.phone == "" || this.password == "") {
        this.error = "手机号或密码不能为空";
      } else if (!re.test(this.phone)) {
        this.error = "手机格式错误";
      } else if (
        this.phone != this.user.phone ||
        this.password != this.user.password
      ) {
        this.error = "手机号或密码错误";
      } else if (
        this.phone == this.user.phone &&
        this.password == this.user.password
      ) {
        window.sessionStorage.setItem("user",this.phone)
        this.$router.push({
          path: "/"
        });
      }
      //   if(this.phone==""){
      //       this.haoma = "请输入手机号！"
      //   }else if(!re.test(this.phone)){
      //       this.haoma = "请输入正确的手机号格式！"
      //   }else if(this.phone!=this.user.phone){
      //       this.haoma = "手机号码错误"
      //   }else if(this.phone==this.user.phone){
      //       this.haoma = "手机号正确"
      //   }else if(this.password==""){
      //       this.mima = "请输入密码！"
      //   }else if(this.password!=this.user.password){
      //       this.mima = "密码错误"
      //   }else if(this.password==this.user.password){
      //       this.mima = "密码正确";
      //       this.router.push({
      //           path:'/'
      //       })
      //   }
    },
    zhu:function(){
      this.$router.push({
        path:"/registe"
      })
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
  margin-left: 5px;
}
.denglu {
  margin-top: 30px;
}
.denglu > div:nth-of-type(1) {
  width: 80%;
  margin-left: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}
.denglu > div:nth-of-type(1) > i {
  font-size: 28px;
}
.denglu > div:nth-of-type(2) > i {
  font-size: 28px;
}
.denglu > div:nth-of-type(2) {
  width: 80%;
  margin-left: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}
.denglu > p:nth-of-type(1) {
  font-size: 20px;
  width: 100px;
  font-family: "华文楷体";
  font-weight: bolder;
  margin-left: 10%;
}
.d {
  width: 80%;
  margin-left: 10%;
  background-color: rgba(230, 50, 50, 0.6);
  border: none;
  height: 30px;
  border-radius: 15px;
  color: white;
  font-family: "华文楷体";
}
.x {
  width: 80%;
  margin-left: 10%;
}
.x > p {
  font-size: 15px;
  font-family: "楷体";
  font-weight: bolder;
}
.x > p:nth-of-type(2) {
  margin-left: 40%;
}
.qita {
  width: 80%;
  margin-left: 10%;
  align-items: center;
}
.qita > div {
  color: grey;
}
.qita > p {
  font-size: 14px;
  color: grey;
  font-family: "楷体";
}
#di {
  width: 100%;
}
#haoma,
#mima {
  margin-left: 10%;
  color: red;

}
</style>