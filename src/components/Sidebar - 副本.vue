<template>
  <div class="app-sidebar">
  <el-col class="menu">
    <el-menu
        default-active="1"
        
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :router="isRoute"
      >
        <el-menu-item index="1" :route="{path: '/user_info/preview'}">
          <i class="el-icon-pre"></i>
          <span slot="title">预览</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{path: '/user_info/focus'}">
          <i class="el-icon-fs"></i>
          <span slot="title">调焦</span>
        </el-menu-item>
        <el-menu-item index="3" :route="{path: '/user_info/shutter'}">
          <i class="el-icon-shut"></i>
          <span slot="title">快门</span>
        </el-menu-item>
        <el-menu-item index="4" :route="{path: '/user_info/playback'}">
          <i class="el-icon-pb"></i>
          <span slot="title">回放</span>
        </el-menu-item>
        <el-menu-item index="5" :route="{path: '/user_info/loginfo'}">
          <i class="el-icon-log"></i>
          <span slot="title">日志</span>
        </el-menu-item>
        <el-menu-item index="6" :route="{path: '/user_info/network'}">
          <i class="el-icon-ip"></i>
          <span slot="title">IP</span>
        </el-menu-item>
        <el-menu-item index="7" :route="{path: '/user_info/upgrade'}">
          <i class="el-icon-up"></i>
          <span slot="title">升级</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col class="right_content">
          <div class="tabs">
              <router-view></router-view>
          </div>
      </el-col>
  </div>
</template>


<script>
export default {
  name: "sidebar",
   data() {
      return {
        isCollapse: false,
        isRoute: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted() {
    console.log('sidebar mounted!')
  }
};
</script>

<style scoped>
    .app-sidebar {
      width: 240px;
    }

  .el-menu-item {
      font-size: 16px;
      color: #000;
      font-weight: 550;
  }
  .el-menu-item:focus, .el-menu-item:hover {
      color: #EA2F4A;
  }

  .el-menu-item [class^=el-icon-] {
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }

  .el-icon-pre {
    background-image: url(../images/main/left_1preview.png);
  }
  .el-icon-fs {
    background-image: url(../images/main/left_2focus.png);
  }
  .el-icon-shut {
    background-image: url(../images/main/left_3shutter.png);
  }
  .el-icon-pb {
    background-image: url(../images/main/left_4playback.png);
  }
  .el-icon-log {
    background-image: url(../images/main/left_5diary.png);
  }
  .el-icon-ip {
    background-image: url(../images/main/left_6ip.png);
  }
  .el-icon-up {
    background-image: url(../images/main/left_7up.png);
  }

</style>
