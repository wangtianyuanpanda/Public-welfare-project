<template>
    <div class="container">
      <div class="top-panel">
        <a-input-search
        placeholder="input search text"
        style="width: 80%; margin-bottom: 20px;"
        @search="onSearch"></a-input-search>
        <a-carousel autoplay>
          <div>p1</div>
          <div>p2 </div>
          <div>p3</div>
        </a-carousel>
      </div>
      <div class="main-panel">
        
      </div>
      <div class="bottom-panel">
        <p>浏览量：{{ PV }}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
          return {
            PV: 888
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

<style lang="less" scoped>

  .container {
    padding: 20px 10px;

    .top-panel {
        :global(.slick-slide) {
              text-align: center;
              height: 260px;
              line-height: 260px;
              background: #364d79;
              overflow: hidden;
              color: #fff
            }
    }

    .bottom-panel {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    }
</style>
