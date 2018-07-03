<template>
  <el-header>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2"><router-link to="/action">活动中心</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/admin">商城</router-link></el-menu-item>
      <el-menu-item index="4">修炼</el-menu-item>
      <el-menu-item index="5">冒险</el-menu-item>
      <el-submenu index="6">
        <template slot="title">个人中心</template>
        <el-menu-item index="6-1">我的门派</el-menu-item>
        <el-menu-item index="6-2">我的家</el-menu-item>
        <el-menu-item index="6-3">我的家乡</el-menu-item>
      </el-submenu>
      <div style="float: right;">
        <el-menu-item index="7"><a href="" target="_blank"><span class="icon-font">&#xe611;</span>登录</a></el-menu-item>
        <el-menu-item index="8"><a href="" target="_blank"><span class="icon-font">&#xe61c;</span>注册</a></el-menu-item>
      </div>
    </el-menu>
  </el-header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
