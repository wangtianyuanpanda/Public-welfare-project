<template>
  <div class="main-con">
    <div class="top-panel">
      <a-input-search
        placeholder="input search text"
        style="width: 80%"
        @search="onSearch"></a-input-search>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainContainer',
  data () {
    return {
    }
  },
  methods: {
    onSearch: function () {
      // TODO
      this.$message.info('searching')
    }

  }
}
</script>

<style lang="less">
  .main-con {
    width: 100%;
    height: 100%;
    .top-panel {

    }
  }
</style>
