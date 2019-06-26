<template>
  <div class="mobile-header" :style="{ boxShadow: isShadowHidden ? 'none' : ''}">
    <img class="back-img" v-if="Boolean(isBackShown) !== false || isToggle" @click="goBack" src="../../assets/back-line.png"/>
    <p>{{title}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'isBackShown', 'isShadowHidden', 'isToggle'],
  methods: {
    goBack: function () {
      if(this.isToggle) {
        this.$emit('back');
      }
      else {
        history.go(-1)

      }
    }
  }
}
</script>

<style scoped lang="less">
  .mobile-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    background: rgba(155,155,155,0.1);
    box-shadow:0 0.05rem 0.25rem 0 rgba(233,233,233,1);
    z-index: 5;
    font-size: 15px;

    .back-img {
      position: absolute;
      left: 1rem;
      top: 1.25rem;
      width: 0.4rem;
      height: 0.75rem;
    }
  }
</style>
