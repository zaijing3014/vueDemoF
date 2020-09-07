<template>
  <div>
    <p>{{helloWorld}}</p>
    <div>
      <el-col :span="24">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="https://www.baidu.com" target="_blank">百度管理</a>
          </el-menu-item>
          <el-menu-item index="6">
            <a href="https://www.taobao.com">淘宝管理</a>
          </el-menu-item>
          <el-menu-item index="7">
            <a href="https://www.wy.com" target="_blank">网易管理</a>
          </el-menu-item>
          <el-menu-item index="8">
            <a href="https://www.jd.com" target="_blank">京东管理</a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <firstPage :hellText='hellText'></firstPage>
  </div>
</template>

<script>
import firstPage from './pageChildren/firstPage';
export default {
  name:'homePage',
  components:{
    firstPage
  },
  data() {
    return {
      hellText:'滚。。。！',
      activeIndex: '2',
      helloWorld: '欢迎'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>