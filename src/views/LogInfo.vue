<template>
    <div class="lg-wrap">
        <div class="lg-config">
            <ul>
                <li>
                    <h2>日历</h2>
                </li>
                <li>
                    <h2>开始时间</h2>
                    <el-date-picker
                    v-model="startTime"
                    type="datetime"
                    size="mini"
                    placeholder="选择日期时间">
                    </el-date-picker>
                </li>
                <li>
                    <h2>结束时间</h2>
                    <el-date-picker
                    v-model="endTime"
                    type="datetime"
                    size="mini"
                    placeholder="选择日期时间">
                    </el-date-picker>
                </li>
                <li>
                    <el-button type="primary" size="small" @click="handleSearch">查找</el-button>
                </li>
            </ul>
        </div>
        <div class="lg-main">
            <div class="lg-file-list">
                  <el-table
                    ref="multipleTable"
                    :data="showLogs"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    label="序号"
                    type="index"
                    :index="indexMethod"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="title"
                    label="日志标题"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="日期">
                    </el-table-column>
                    <el-table-column
                    prop="time"
                    label="时间"
                    width="150">
                    </el-table-column>
                </el-table>
            </div>
            <ul class="lg-file-btn">
                <li class="left">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    layout="slot, total, prev, pager, next, jumper"
                    :total="logList.length">
                        <span style="margin-right:20px;">已选{{multipleSelection.length}}条</span>
                    </el-pagination>
                </li>
                <li class="right">
                    <el-button type="primary" size="small" @click="handleExport">导出日志</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loginfo',
    data() {
        return {
            logList: [], // 日志列表
            pageSum: 10, // 每页显示的条数
            multipleSelection: [],
            currentPage: 1, // 当前页码
            currentIndex: 0, // 当前选中的文件在logList中的索引
            startTime: '',
            endTime: ''
        };
    },
    mounted() {
        for (let index = 0; index < 320; index++) {
            let info = {
                title: 'ws' + index + '.log',
                date: '1970-01-01',
                time: '00:05:48'
            }
            this.logList.push(info);
        }
    },
    methods: {
        indexMethod: function(index) {
            var ret = index + 1;
            ret += (this.currentPage - 1) * this.pageSum;
            return (ret < 10) ? '0' + ret : ret;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSum = val;
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.multipleSelection = [];
        },
        handleSelectionChange: function(val) {
            this.multipleSelection = val;
        },
        handleSearch: function() {

        },
        handleExport: function() {

        }
    },
    computed: {
        showLogs: function() {
            var arrList = [];
            var start = (this.currentPage - 1) * this.pageSum, end;
            if (this.logList.length < this.currentPage * this.pageSum) {
                end = this.logList.length;
            } else {
                end = this.currentPage * this.pageSum;
            }
            for (let index = start; index < end; index++) {
                arrList.push(this.logList[index]);
            }
            return arrList;
        }
    }
}
</script>

<style>
    .lg-file-list .el-table thead th {
        background-color: #77C4D2;
        color: #fff;
    }
</style>

<style scoped>

    .lg-wrap {
        background-color: #FFFFFF;
        height: 100%;
    }

    .lg-config {
        float: right;
        width: 270px;
    }

    .lg-main {
        margin-right: 270px;
    }

    .lg-config ul {
        margin: 15px;
    }
    .lg-config li {
        margin-top: 20px;
    }
    .lg-config li h2 {
        margin-bottom: 10px;
    }
    .lg-config .el-button {
        width: 220px;
    }

    .lg-file-list {
        display: inline-block;
        position: absolute;
        top: 100px;
        bottom: 160px;
        right: 285px;
        left: 270px;
        
    }
    .lg-file-list .el-table {
        border: 1px solid #77C4D2;
    }


    .lg-file-btn .left {
        position: absolute;
        bottom: 120px;
        left: 280px;
    }
    .lg-file-btn .right {
        position: absolute;
        bottom: 120px;
        right: 280px;
    }

</style>