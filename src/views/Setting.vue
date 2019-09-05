<template>
  <div>
    <AppHeader pageMode="2"></AppHeader>
    <div class="set-wrap">
      <div class="set-menu">
        <!-- <ul class="el-timeline">
          <li class="el-timeline-item">
            <div class="el-timeline-item__tail"></div>
            <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
            <div class="el-timeline-item__wrapper">
              <div class="el-timeline-item__content">存储位置</div>
              <div class="el-timeline-item__timestamp is-bottom"></div>
            </div>
          </li>
          <li class="el-timeline-item">
            <div class="el-timeline-item__tail"></div>
            <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
            <div class="el-timeline-item__wrapper">
              <div class="el-timeline-item__content">系统设置</div>
              <div class="el-timeline-item__timestamp is-bottom"></div>
            </div>
          </li>
        </ul> -->
        <el-timeline>
          <el-timeline-item v-for="(menu, index) in menuList" :key="index">{{menu.content}}</el-timeline-item>
        </el-timeline>
      </div>
      <div class="set-main">
        <ul>
          <li class="set-title marb40">设置</li>
          <li class="set-title2">图片存储路径</li>
          <li class="marb40">
            <el-input class="input-path" v-model="picPath" size="small" :disabled="true"></el-input>
            <el-button slot="trigger" size="small" type="primary" @click="browserPicPath">浏览</el-button>
          </li>
          <li class="set-title2">视频存储路径</li>
          <li class="marb40">
            <el-input class="input-path" v-model="picPath" size="small" :disabled="true"></el-input>
            <el-button slot="trigger" size="small" type="primary" @click="browserRecPath">浏览</el-button>
          </li>
          <li class="set-title2">报警触发图片存储路径</li>
          <li class="marb40">
            <el-input class="input-path" v-model="picPath" size="small" :disabled="true"></el-input>
            <el-button slot="trigger" size="small" type="primary" @click="browserAlmPicPath">浏览</el-button>
          </li>
          <li class="set-title2">报警触发视频存储路径</li>
          <li class="marb40">
            <el-input class="input-path" v-model="picPath" size="small" :disabled="true"></el-input>
            <el-button slot="trigger" size="small" type="primary" @click="browserAlmRecPath">浏览</el-button>
          </li>
          <li class="set-title2">定时拍照</li>
          <li class="li-wrap">
            <ul>
              <li>拍照时间间隔(s)</li>
              <el-select v-model="picInterval" size="mini">
                <el-option
                v-for="item in picSelList"
                :key="item.value"
                :label="item.value"
                :value="item.value">
                </el-option>
            </el-select>
            </ul>
            <ul>
              <li>拍照起始时间</li>
                <el-time-picker
                v-model="picStartTime"
                size="mini">
                </el-time-picker>
            </ul>
            <ul>
              <li>拍照结束时间</li>
              <el-time-picker
                v-model="picEndTime"
                size="mini">
                </el-time-picker>
            </ul>
          </li>
          <li class="set-title2">定时视频拍摄</li>
          <li class="li-wrap marb40">
            <ul>
              <li>拍照起始时间</li>
              <el-time-picker
                v-model="recStartTime"
                size="mini">
                </el-time-picker>
            </ul>
            <ul>
              <li>拍照结束时间</li>
              <el-time-picker
                v-model="recStartTime"
                size="mini">
                </el-time-picker>
            </ul>
          </li>
          <li class="marb40">
              <label>报警触发图片存储开关</label>
              <el-switch
                v-model="picSwitch">
            </el-switch>
          </li>
          <li class="marb40">
              <label>报警触发视频存储开关</label>
            <el-switch
                v-model="recSwitch">
            </el-switch>
          </li>
          <li class="set-divi-line"></li>
          <li class="set-title2">语言设置</li>
          <li>
              <el-radio v-model="curLang" label="cn">中文</el-radio>
          </li>
          <li class="marb40">
            <el-radio v-model="curLang" label="en">英文</el-radio>
          </li>
          <li class="set-title2">全屏高低温报警设置</li>
          <li>
              <el-checkbox v-model="checkedFullUp">高温报警（℃）</el-checkbox>
              <el-input v-model="inputFullUp" size="mini" style="width: 100px;"></el-input>
          </li>
          <li class="marb40">
              <el-checkbox v-model="checkedFullDown">低温报警（℃）</el-checkbox>
              <el-input v-model="inputFullDown" size="mini" style="width: 100px;"></el-input>
          </li>
          <li class="set-title2">分析对象高低温报警设置</li>
          <li>
              <el-checkbox v-model="checkedCalcUp">高温报警（℃）</el-checkbox>
              <el-input v-model="inputCalcUp" size="mini" style="width: 100px;"></el-input>
          </li>
          <li class="marb40">
              <el-checkbox v-model="checkedCalcDown">低温报警（℃）</el-checkbox>
              <el-input v-model="inputCalcDown" size="mini" style="width: 100px;"></el-input>
          </li>
          <li class="set-title2">端口号设置</li>
          <li class="marb40">
              <el-input v-model="inputPort" size="mini" style="width: 200px;"></el-input>
          </li>
          <li class="set-title2">串口波特率设置</li>
          <li class="marb40">
              <el-input v-model="inputBaudrate" size="mini" style="width: 200px;"></el-input>
          </li>
          <li class="set-title2">串口解码器类型</li>
          <li>
              <el-radio v-model="curDecoder" label="pd">PD</el-radio>
          </li>
          <li class="marb40">
            <el-radio v-model="curDecoder" label="mod">Modbus</el-radio>
          </li>
          <li class="set-title2">发射率</li>
          <li class="marb40">
              <el-input v-model="inputPort" size="mini" style="width: 200px;"></el-input>
          </li>
          <li class="set-title2">距离</li>
          <li class="marb40">
              <el-input v-model="inputPort" size="mini" style="width: 200px;"></el-input>
          </li>
          <li class="set-title2">相对湿度</li>
          <li class="marb40">
              <el-input v-model="inputPort" size="mini" style="width: 200px;"></el-input>
          </li>
          <li class="set-title2">背景湿度</li>
          <li class="marb40">
              <el-input v-model="inputPort" size="mini" style="width: 200px;"></el-input>
          </li>
          <li>
              <el-button size="small" type="primary">恢复出厂设置</el-button>
          </li>
          <li>
              <el-button size="small" type="success">保存</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/Header.vue";

export default {
  name: "setting",
  data() {
    return {
      menuList: [
        {
          content: "存储位置",
          timestamp: "2018-04-12 20:46"
        },
        {
          content: "系统设置",
          timestamp: "2018-04-11 20:46"
        }
      ],
      picInterval: '30',
      picSelList: [
        {value: '10'},
        {value: '20'},
        {value: '30'},
        {value: '40'},
        {value: '50'},
        {value: '60'}
      ],
      picStartTime: '',
      picEndTime: '',
      recStartTime: '',
      recEndTime: '',
      picSwitch: false,
      recSwitch: false,
      curLang: 'cn',
      checkedFullDown: false,
      checkedFullUp: false,
      inputFullDown: '',
      inputFullUp: '',
      checkedCalcDown: false,
      checkedCalcUp: false,
      inputCalcDown: '',
      inputCalcUp: '',
      inputPort: 3,
      inputBaudrate: 115200,
      curDecoder: 'pd'
    };
  },
  components: {
    AppHeader
  },
  methods: {
    changesData: function() {
      console.log(this.$refs.file.files);
    },
    handleFile: function(e) {
      // console.log('change----', e.target.webkitEntries);
      e.target.webkitEntries.forEach(function(entry) {
        console.log("webkitEntries", entry);
        /* do stuff with the entry */
      });
    },
    handleFiles: function(file, event) {
      console.log("fileadd", file, event);
    },
    handleAdd: function(files, fileList, event) {
      console.log("files added", files, fileList, event);
    }
  }
};
</script>

<style>
.set-wrap .el-timeline-item__node {
  background-color: #989898;
}
.set-wrap .el-timeline-item__tail {
  border-color: #a7a7a7;
}
/* radio */
.el-radio__inner {
	width: 16px;
    height: 16px;
}
.set-wrap .el-radio__label {
    font-size: 16px;
}
</style>


<style scoped>
.set-wrap {
  padding: 10px 15px 0;
  background-color: #eaeaea;
}

.set-menu {
  float: left;
  width: 250px;
  position: fixed;
}

.set-main {
  margin-left: 250px;
  margin-top: 10px;
}

.set-main li {
  margin-bottom: 10px;
  color: #5f5e49;
}
.set-main li.marb40 {
  margin-bottom: 40px;
}
.set-main li ul {
  float: left;
  margin-right: 80px;
}

.set-title {
  font-size: 22px;
  font-weight: 500;
}

.set-title2 {
  font-size: 18px;
  font-weight: 500;
  clear: both;
}

.li-wrap {
    height: 55px;
}

.set-main li label {
  display: inline-block;
  width: 230px;
  font-size: 16px;
  line-height: 28px;
  height: 28px;
}

.set-main li span {
  font-size: 15px;
}

.set-divi-line {
    width: 600px;
    height: 2px;
    border-bottom: 1px solid #A3A3A3; 
}

.set-main .el-select, .set-main .el-date-editor {
    width: 150px;
}

.set-wrap li .input-path {
  float: left;
  margin-right: 50px;
  width: 340px;
}
.set-wrap li .el-button {
  width: 120px;
}

.set-wrap li .el-button.el-button--primary {
    background-color: #77C4D2;
    border-color: #77C4D2;
}
.set-wrap li .el-button.el-button--success {
    background-color: #EA2F4A;
    border-color: #EA2F4A;
}

</style>