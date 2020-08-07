<template>
  <div class="aa">
      <headd></headd>
      <tail></tail>
  </div>
</template>

<script>
import headd from '@/components/headd.vue'
import tail from '@/components/tail.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        headd,
        tail
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box
}
</style>