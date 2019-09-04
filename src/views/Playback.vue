<template>
    <div class="pb-wrap">
        <div class="pb-config">
            <ul>
                <li>
                    <span>{{fileList[currentIndex].src | getPath}}</span>
                </li>
                <li>
                    <label>拍摄日期：</label>
                    <span>{{fileList[currentIndex].time}}</span>
                </li>
                <li>
                    <label>分辨率：</label>
                    <span>{{fileList[currentIndex].width + 'x' +  fileList[currentIndex].height}}</span>
                </li>
                <li>
                    <label>大小：</label>
                    <span>{{fileList[currentIndex].size}}</span>
                </li>
                <li>
                    <label>色带：</label>
                    <span>{{fileList[currentIndex].color}}</span>
                </li>
                <li>
                    <el-button type="primary" size="mini">预览</el-button>
                </li>
                <li>
                    <el-button type="primary" size="mini">生成报告</el-button>
                </li>
            </ul>
        </div>
        <div class="pb-main">
            <div class="pb-menu">
                <el-menu
                default-active="1"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#DDDDDD"
                text-color="#000"
                active-text-color="#EA2F4A"
                >
                    <el-menu-item index="1">全部</el-menu-item>
                    <el-menu-item index="2">图片</el-menu-item>
                    <el-menu-item index="3">视频</el-menu-item>
                </el-menu>
                <ul class="pb-menu-btn">
                    <li>
                        <el-button type="primary" size="small" @click="handleFileDel">删除</el-button>
                    </li>
                    <li>
                        <el-button type="primary" size="small" @click="handleFileOpen">打开文件</el-button>
                    </li>
                </ul>
            </div>
            <div class="pb-body">
                <ul class="pb-file-list">
                    <li v-for="i in showFiles" :key="i" @click="handleFileSel($event, i - 1)">
                        <img/>
                    </li>
                </ul>
                <ul class="pb-file-btn">
                    <li class="left">
                        <el-button type="primary" size="small" @click="handleChkAll">{{selectedIndexs.length==pageSum ? '取消全选':'全选'}}</el-button>
                    </li>
                    <li class="right">
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        layout="slot, total, prev, pager, next, jumper"
                        :total="fileList.length">
                            <span style="margin-right:20px;">已选{{selectedIndexs.length}}条</span>
                        </el-pagination>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'playback',
    data() {
        return {
            pageSum: 10, // 每页显示的条数
            selectedIndexs: [], // 当前选中的索引
            currentPage: 1, // 当前页码
            currentIndex: 0, // 当前选中的文件在fileList中的索引
            fileList: [], // 文件列表
            currentFile: {
                src: '/home/list/IMG000112.jpg',
                time: '2019-08-13 16:00:00',
                width: 1600,
                height: 1200,
                size: '2048',
                color: 'red'
            }
        };
    },
    mounted() {
        // data for test
        var pad100 = function(val) {
            if (val < 10) {
                return '00' + val;
            } else if (val < 100) {
                return '0' + val;
            } else {
                return val;
            }
        };
        var addDate = function(str, day) {
            if (day) {
                var time = new Date(new Date(str).getTime() + 24 * day * 3600 * 1000);
                return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
            } else {
                return str;
            }
        };
        for (let index = 0; index < 649; index++) {
            let info = {
                src: '/home/list/IMG000'+ pad100(index) + '.jpg',
                time: addDate('2017-08-01 16:10:20', index),
                width: 1600,
                height: 1200,
                size: '2048',
                color: 'red'
            }
            this.fileList.push(info);
        }
        console.log(this.fileList);
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSum = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        this.selectedIndexs = [];
      },
      handleFileSel: function(e, index) {
          var ele = e.target.tagName.toUpperCase() == 'IMG' ? e.target.parentNode : e.target;
          if (ele.className == 'current') {
              ele.className = '';
              var idx = this.selectedIndexs.indexOf(index);
              this.selectedIndexs.splice(idx, 1);
          } else {
              ele.className = 'current';
              this.selectedIndexs.push(index);
          }
          this.currentIndex = (this.currentPage - 1) * this.pageSum + (index - 1);
          console.log('file sel', index, this.currentIndex);
      },
      handleFileDel: function() {
          var _this = this;
          _this.fileList = _this.fileList.filter(function(item, i) {
              return (_this.selectedIndexs.indexOf(i) === -1);
          });
      },
      handleFileOpen: function() {

      },
      handleChkAll: function() {
          if (this.selectedIndexs.length == this.pageSum) {
              this.selectedIndexs = [];
              for (let index = 0; index < this.pageSum; index++) {
                  const element = array[index];
                  
              }
          } else {
              this.selectedIndexs = [];
              for (let i = 0; i < this.pageSum; i++) {
                  this.selectedIndexs.push(i);
              }
          }
      }
    },
    filters: {
        getPath: function(src) {
            var idx = src.lastIndexOf('/') + 1;
            return src.substring(idx);
        }
    },
    computed: {
        showFiles: function() {
            return this.fileList.length < this.currentPage * this.pageSum ? (this.fileList.length - (this.currentPage - 1) * this.pageSum) : this.pageSum;
        }
    }
}

</script>

<style>
    .pb-menu .el-menu {
        height: 60px;
        display: inline-block;
    }
    .pb-menu .el-menu-item {
        margin: 0 30px;
        font-size: 15px;
    }
    .pb-menu .el-menu.el-menu--horizontal {
        border: none;
    }
</style>

<style scoped>

    .pb-wrap {
        background-color: #FFFFFF;
        height: 100%;
    }

    .pb-config {
        float: right;
        width: 270px;
    }
    .pb-main {
        margin-right: 270px;
    }
    .pb-config label {
        display: inline-block;
        width: 100px;
        color: #7F7F7F;
        font-size: 15px;
        font-weight: 600;
    }

    .pb-config ul {
        margin: 15px;
    }
    .pb-config li {
        margin-top: 20px;
    }
    .pb-config .el-button {
        width: 90px;
        margin-left: 80px;
    }
    
    .pb-menu {
        text-align: center;
        background-color: #DDDDDD;
    }

    .pb-menu-btn {
        float: right;
        margin-right: 20px;
    }
    .pb-menu-btn li {
        float: left;
        margin-left: 20px;
        margin-top: 15px;
    }
    .pb-menu-btn .el-button {
        width: 110px;
        
    }
    .pb-file-list {
        display: inline-block;
        position: absolute;
        top: 160px;
        bottom: 160px;
        right: 280px;
        left: 250px;
    }
    .pb-file-list li {
        float: left;
        margin-left: 35px;
        margin-top: 35px;
        padding: 10px;
        cursor: pointer;
    }
    .pb-file-list li img {
        width: 190px;
        height: 140px;
        background-color: #E8DA09;
    }
    .pb-file-list li.current {
        border: 2px solid #EA2F4A;
        margin-top: 30px; /* 这里要改下margin-top，否则底下的li会跑偏 */
    }
    .pb-file-btn .right {
        position: absolute;
        bottom: 120px;
        right: 280px;
    }
    .pb-file-btn .el-button {
        width: 100px;
    }
    .pb-file-btn .left {
        position: absolute;
        bottom: 120px;
        left: 280px;
    }
</style>