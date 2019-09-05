//用户信息

<template>
  <div class="app">
    <div class="app-wrap">
      <AppHeader></AppHeader>
      <div class="app-body">
        <div class="app-sidebar">
          <Sidebar></Sidebar>
        </div>
        <div class="app-main">
          <router-view></router-view>
        </div>
      </div>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script>

import AppHeader from './Header.vue';
import Sidebar from './Sidebar.vue';
// import Sidebar from './Test/Sidebar.vue';
import AppFooter from './Footer.vue';

export default {
    name: 'mainPage',
    components: {
        AppHeader,
        Sidebar,
        AppFooter
    },
    data() {
      return {
        
      };
    },
    computed: {
        name () {
            return this.$route.name
        },

        list () {
            return this.$route.matched
        }
    },
    mounted: function() {
      // this.$router.push('/preview/');
    }
}
</script>

<style scoped>
    .app {
        padding: 10px 15px 0;
    }
    .app-wrap {
      background-color: #EAEAEA;
    }

    .app-sidebar {
      width: 240px;
    }

    .app-body {
      height: 720px;
    }

    .app-main {
      background-color: #000;
      margin-left: 240px;
      /* margin-right: 270px; */
      height: 100%;
      /* padding: 0 115px; */
      /* height: 90%; */
    }

</style>