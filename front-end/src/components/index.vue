<template>
  <el-container>
    <heade></heade>
    <el-main>
      <el-row>
        <el-col :span="24"><div class="grid-content"><img src="../assets/img/banner.jpg" alt=""></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="15">
          <div>
            <el-carousel :interval="4000" type="card" height="300px">
              <el-carousel-item v-for="item in cf" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="9">
          <el-header style="padding-right: 0;">
            <div class="myself icc">ᠦᠳᠡᠰᠢ ᠶᠢᠨ ᠮᠡᠨᠳᠦ  </div>
          </el-header>
          <el-main style="padding-right: 0;">
            <ul class="myself_content">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </el-main>
        </el-col>
      </el-row>
    </el-main>
    <el-footer><div class="icc">ᠦᠳᠡᠰᠢ ᠶᠢᠨ ᠮᠡᠨᠳᠦ</div></el-footer>
  </el-container>
</template>

<script>
  import heade from './public/header.vue'
  export default {
    data() {
      return {
        activeIndex: '1',
        cf:[
          '','','',''
        ]
      };
    },
    components: {
      'heade': heade
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  a{
    text-decoration: none;
  }
  a span{
    margin-right: 5px;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 554182 */
    src: url('//at.alicdn.com/t/font_554182_b6a3pmfo5e8f47vi.eot');
    src: url('//at.alicdn.com/t/font_554182_b6a3pmfo5e8f47vi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_554182_b6a3pmfo5e8f47vi.woff') format('woff'),
    url('//at.alicdn.com/t/font_554182_b6a3pmfo5e8f47vi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_554182_b6a3pmfo5e8f47vi.svg#iconfont') format('svg');
  }
  .icon-font{
    font-family: 'iconfont';
  }
  .el-row {
    margin-bottom: 20px;
  }
  .grid-content{
    height: 400px;
    overflow: hidden;
  }
  .myself{
    height: 100%;
    line-height: 60px;
    background: #f60;
    color: #fff;
    padding-left: 30px;
    font-size: 18px;
  }
  .myself_content{
    height: 229px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .myself_content li{
    width: 32.5%;
    height: 67px;
    background: #ddd;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
    color: #fff;
  }
  .el-carousel__item{
    background-color: red;
  }

  .el-carousel__item:nth-child(3) {
    background: url("../assets/img/timg (2).jpg") no-repeat center;
    background-size: cover;
  }
  .el-carousel__item:nth-child(4) {
    background: url("../assets/img/timg (1).jpg") no-repeat center;
    background-size: cover;
  }
  .el-carousel__item:nth-child(5) {
    background: url("../assets/img/timg (3).jpg") no-repeat center;
    background-size: cover;
  }
  .el-carousel__item:nth-child(6) {
    background: url("../assets/img/timg.jpg") no-repeat center;
    background-size: cover;
  }

</style>
