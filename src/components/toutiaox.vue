<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="goodsList[0]" alt class="img" />
        <div class="neirong">
          <p>{{goodslistx[0]}}</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <img :src="goodsList[1]" alt class="img" />
        <div class="neirong">
          <p>{{goodslistx[1]}}</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <img :src="goodsList[2]" alt class="img" />
        <div class="neirong">
          <p>{{goodslistx[2]}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="nr">
      <div class="a flex">
        <img :src="goodslists.dizhi" />
        <div class="a1">
          <p>{{goodslists.neirong}}</p>
          <div>{{goodslistb[0]}}</div>
        </div>
      </div>
      <div class="a flex">
        <img :src="goodslists2.dizhi" />
        <div class="a1">
          <p>{{goodslists2.neirong}}</p>
          <div>{{goodslistb[1]}}</div>
        </div>
      </div>
      <div class="a flex">
        <img :src="goodslists3.dizhi" />
        <div class="a1">
          <p>{{goodslists3.neirong}}</p>
          <div>{{goodslistb[2]}}</div>
        </div>
      </div>
      <div class="a flex">
        <img :src="goodslists4.dizhi" />
        <div class="a1">
          <p>{{goodslists4.neirong}}</p>
          <div>{{goodslistb[1]}}</div>
        </div>
      </div>
      <div class="a flex">
        <img :src="goodslists5.dizhi" />
        <div class="a1">
          <p>{{goodslists5.neirong}}</p>
          <div>{{goodslistb[1]}}</div>
        </div>
      </div>
      <div class="a flex">
        <img :src="goodslists4.dizhi" />
        <div class="a1">
          <p>{{goodslists4.neirong}}</p>
          <div>{{goodslistb[0]}}</div>
        </div>
      </div>
      <div class="a flex">
        <img :src="goodslists5.dizhi" />
        <div class="a1">
          <p>{{goodslists5.neirong}}</p>
          <div>{{goodslistb[2]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      goodslistx: [],
      goodslists: [],
      goodslistb: [],
      goodslists2: [],
      goodslists3: [],
      goodslists4: [],
      goodslists5: []
    };
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
        this.goodsList = res.data.data.lunbo;
        this.goodslistx = res.data.data.lunbox;
        this.goodslists = res.data.data.xq;
        this.goodslists2 = res.data.data.xq2;
        this.goodslists3 = res.data.data.xq3;
        this.goodslists4 = res.data.data.xq4;
        this.goodslists5 = res.data.data.xq5;
        this.goodslistb = res.data.data.baoshe;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
*{
  box-sizing: border-box;
}
.flex {
  display: flex;
}
.my-swipe .van-swipe-item {
  color: black;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
}
.img {
  width: 100% !important;
}
.van-swipe__indicators {
  left: 76% !important;
}
.van-swipe__indicator {
  background: black !important;
}
.neirong {
  width: 65%;
  position: absolute;
  top: 170px;
  background: black;
  opacity: 0.5;
}
.neirong > p {
  width: 80%;
  color: white;
  font-size: 12px;
}

.a {
  width: 100%;
  height: 100px;
  align-items: center;
  padding-left: 8px;
  border-bottom: 0.2px solid grey;
}
.a > img {
  width: 30%;
  height: 80%;
}
.a1 {
  margin-left: 3%;
}
.a1 > p {
  font-size: 14px;
}
.a1 > div {
  font-size: 14px;
  width: 60px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 25px;
  text-align: center;
}
</style>