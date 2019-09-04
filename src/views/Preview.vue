<template>
    <div class="pre-wrap">
        <div class="pre-config">
            <ul class="pre-list main" v-if="menuMode==1">
                <li>
                    <h2>数据格式</h2>
                    <span>纯视频码流</span>
                </li>
                <li>
                    <h2>色带切换</h2>
                </li>
                <li>
                    
                </li>

                <li>
                    <h2>分析对象</h2>
                    <ul>
                        <li>
                            <el-button plain size="mini">点</el-button>
                            <el-button plain size="mini">线</el-button>
                            <el-button plain size="mini">矩形</el-button>
                        </li>
                        <li>
                            <el-button plain size="mini">多边形</el-button>
                            <el-button plain size="mini">圆</el-button>
                        </li>
                        <li>
                            <el-button type="primary" size="mini">删除</el-button>
                            <el-button type="primary" size="mini">清除</el-button>
                        </li>
                    </ul>
                    
                    
                </li>
                <li>
                    <h2>字符叠加</h2>
                    <ul class="pre-char">
                        <li>
                            <span>X:</span>
                            <el-input v-model="main.inputX" size="small"></el-input>
                        </li>
                        <li>
                            <span>Y:</span>
                            <el-input v-model="main.inputY" size="small"></el-input>
                        </li>
                        <li>
                            <span>字符串:</span>
                            <el-input v-model="main.inputStr" size="small"></el-input>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="pre-list focus" v-if="menuMode==2">
                <li>
                    <el-button plain size="mini">红外远焦</el-button>
                    <el-button plain size="mini">远焦微调</el-button>
                </li>
                <li>
                    <el-button plain size="mini">红外近焦</el-button>
                    <el-button plain size="mini">近焦微调</el-button>
                </li>
                <li>
                    <el-button plain size="mini">自动调焦</el-button>
                </li>
                <li>
                    <h2>设置电机位置</h2>
                    <ul style="margin-left: 40px;">
                        <li>
                            <el-input v-model="focus.inputPos" size="small"></el-input>
                        </li>
                        <li>
                            <el-button type="primary" size="mini">获取</el-button>
                            <el-button type="primary" size="mini">设置</el-button>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="pre-list shut" v-if="menuMode==3">
                <li>
                    <h2>自动快门</h2>
                    <el-checkbox v-model="shut.checkAuto">打开自动快门</el-checkbox>
                </li>
                <li>
                    <h2>自动快门时间（min）</h2>
                    <el-select v-model="shut.timeAuto" size="mini">
                        <el-option
                        v-for="item in shut.timeRange"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <el-button type="primary" size="mini">快门闭合</el-button>
                </li>
                <li>
                    <el-button type="primary" size="mini">快门弹开</el-button>
                </li>
            </ul>
        </div>
        <div class="pre-main">
            <div class="pre-video"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'preview',
    data() {
        return {
            menuMode: 1,
            main: {
                inputX: 0,
                inputY: 0,
                inputStr: ''
            },
            focus: {
                inputPos: 0
            },
            shut: {
                timeAuto: 1,
                checkAuto: false,
                timeRange: [{
                    value: 1,
                    label: 1
                },{
                    value: 2,
                    label: 2
                },{
                    value: 3,
                    label: 3
                },{
                    value: 4,
                    label: 4
                },{
                    value: 5,
                    label: 5
                }]
            }
        }
    },
    watch: {
        "$route": function() {
            var path = this.$route.path;
            if (path.indexOf('focus') > -1) {
                // 调焦
                this.menuMode = 2;
            } else if (path.indexOf('shut') > -1) {
                // 快门
                this.menuMode = 3;
            } else {
                // 预览
                this.menuMode = 1;
            }
            console.log(this.menuMode);
        },
        "main.inputX": function(val, prev) {
            // 现在的值是val
            console.log(val, prev);
        },
        "main.inputY": function(val, prev) {
            // 现在的值是val
        },
        "main.inputStr": function(val, prev) {
            // 现在的值是val
        }
    },
    mounted: function() {
        
        console.log('preview mounted!', this.$router.options.routes);
    }
}
</script>

<style scoped>

    .pre-wrap {
        height: 100%;
    }

    .pre-main {
        color: #fff;
        padding: 0 115px;
        height: 100%;
        margin-right: 270px;
    }

    .pre-video {
        width: 100%;
        height: 100%;
        background-color: #F86807;
    }

    .pre-config {
        float: right;
        width: 270px;
        height: 100%;
        background-color: #EAEAEA;
    }

    .pre-list {
        margin: 15px;
    }

    .pre-list h2 {
        line-height: 28px;
        height: 28px;
    }

    .pre-list li {
        margin-top: 20px;
    }
    .pre-list.main .is-plain {
        width: 70px;
    }
    .pre-char span {
        display: inline-block;
        width: 60px;
        color: #7F7F7F;
        font-size: 15px;
        font-weight: 600;
    }
    .el-input {
        width: 160px;
    }
    .pre-list.focus .is-plain {
        width: 80px;
    }

</style>