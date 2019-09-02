//用户信息

<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-body">
      <Sidebar></Sidebar>
      <main class="main">
        <div class="container-fluid" style="height:calc(90% )">
          <router-view></router-view>
        </div>
      </main>
      <AppAside></AppAside>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from './Header.vue';
import Sidebar from './Sidebar.vue';
// import Sidebar from './Test/Sidebar.vue';
import AppAside from './Aside.vue';
import AppFooter from './Footer.vue';

export default {
    name: 'camera',
    components: {
        AppHeader,
        Sidebar//,
        // AppAside,
        // AppFooter
    },
    data() {
        return {
            isHead: true
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
      console.log('id=',this.$route.params.id);
    }
}
</script>

<style scoped>
    .app {
        padding: 10px 15px 0;
        min-height: 770px;
    }

</style>