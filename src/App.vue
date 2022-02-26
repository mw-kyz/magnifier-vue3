<template>
  <div class="wrapper">
    <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'App',
  setup () {
    const state = reactive({
      imgUrl: 'http://qqpublic.qpic.cn/qq_public/0/0-2667158452-876D876AD5F6B194DE53F1CAEEE8A0B6/0?fmt=jpg&size=168&h=848&w=600&ppv=1/0',
      imgAlt: '哦内撒嘛',
      link: 'https://baidu.com',
      blank: true,
      imgWidth: 375,
      imgHeight: 530,
      magWidth: 150,
      magHeight: 150
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    width: 300px;
    margin: 100px auto;
  }
</style>
