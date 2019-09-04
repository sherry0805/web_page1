<template>
  <div class="app-head">
      <ul class="nav-logo">
          <li></li>
      </ul>
      <ul class="nav-opr">
          <li class="nav-back">
              <i @click="handleBack"></i>
          </li>
          <li class="nav-srch">
              <!-- <i></i> -->
              <!-- <input type="text" style="border-radius: 30px"/> -->
                <el-input
                    prefix-icon="el-icon-search"
                    v-model="inputVal"
                    @change="handleInput">
                </el-input>
          </li>
      </ul>
      <ul class="nav-user ml-auto">
          <li>
            <el-avatar :size="38"></el-avatar>
            <span class="nav-name">admin</span>
          </li>
          <li class="nav-ver">
              <i></i>
          </li>
          <li class="nav-set">
              <i></i>
          </li>
      </ul>
      <ul class="nav-detail">
          <li>详细参数</li>
      </ul>
  </div>
</template>


<script>

export default {
    name: 'header',
    data() {
        return {
            circleUrl: "url(../images/main/top_user.png)",
            inputVal: ''
        }
    },
    methods: {
        handleBack: function() {
            console.log(this.$routers);
        },
        handleInput: function(val) {
            console.log(val)
        }
    },
    mounted: function() {
        var _this = this;
        var eleNav = document.getElementsByClassName('nav-srch')[0];
        // 搜索按钮
        var tag = eleNav.getElementsByClassName('el-input__prefix')[0];
        tag.onclick = function() {
            console.log('search', _this.inputVal);
        };
    }
}
</script>

// 这里要更改el-input组件的样式，需要去除掉scoped。避免整个组件样式被修改，再加上一个前置样式
<style>

/* 搜索按钮 */
.nav-srch .el-input__prefix {
    cursor: pointer;
}

/* 输入框圆角和宽度样式 */
.nav-srch .el-input__inner {
    border-radius: 30px;
    width: 300px;
}
</style>

<style scoped>

    .app-head {
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
    }
    .app-head ul {
        /* float: left; */
        display: flex;
        flex-direction: row;
    }
    .nav-logo {
        /* display: inline-block; */
        width: 240px;
        height: 90px;
        background-color: #EA2F4A;
    }
    .nav-logo li {
        width: 126px;
        height: 40px;
        background-image: url(../images/main/logo.png);
        background-repeat: no-repeat;
        margin: 20px 0 0 20px;
    }

    .el-avatar {
        background-image: url(../images/main/top_user.png);
    }
    .ml-auto {
        margin-left: auto!important;
    }

    .nav-user {
        margin-right: 10px;
    }
    .nav-user li {
        min-width: 70px;
        text-align: center;
        line-height: 90px;
    }

    .nav-name {
        display: inline-block;
        /* line-height: 38px; */
        vertical-align: top;
        margin-top: -15px;
        color: #989796;
        font-size: 18px;
        font-weight: 600;
    }

    .nav-back {
        margin-left: 30px;
        line-height: 90px;
    }

    .nav-back i {
        background-image: url(../images/main/top_back_d.png);
        display: inline-block;
        width: 34px;
        height: 34px;
        cursor: pointer;
    }
    .nav-back i:hover {
        background-image: url(../images/main/top_back_n.png);
    }

    .nav-srch {
        margin-left: 30px;
        margin-top: 13px;
    }

    .nav-ver i{
        background-image: url(../images/main/top_about_n.png);
        display: inline-block;
        width: 26px;
        height: 26px;
        cursor: pointer;
    }
    .nav-ver i:hover {
        background-image: url(../images/main/top_about_s.png);
    }

    .nav-set i{
        background-image: url(../images/main/top_set_n.png);
        display: inline-block;
        width: 26px;
        height: 26px;
        cursor: pointer;
    }
    .nav-set i:hover {
        background-image: url(../images/main/top_set_s.png);
    }

    .nav-detail {
        width: 270px;
        background-color: #77C4D2;
    }
    .nav-detail li {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        width: 100%;
        line-height: 90px;
    }

</style>