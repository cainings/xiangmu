<template>
  <div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/" icon="description">新闻</van-tabbar-item>
      <van-tabbar-item replace to="/shipin" icon="play-circle-o" >视频</van-tabbar-item>
      <van-tabbar-item icon="new-o">读报</van-tabbar-item>
      <van-tabbar-item icon="friends-o">服务</van-tabbar-item>
      <van-tabbar-item replace to="/login" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
</style>