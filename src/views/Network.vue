<template>
    <div class="net-wrap">
        <div class="net-file-list">
            <el-table
            ref="multipleTable"
            :data="showDevices"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="ip"
            label="IP">
            </el-table-column>
            <el-table-column
            prop="mac"
            label="MAC"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="mask"
            label="子网掩码"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="gate"
            label="网关"
            width="150">
            </el-table-column>
            <el-table-column
            prop="dns"
            label="DNS"
            width="150">
            </el-table-column>
            <el-table-column
            prop="port"
            label="端口号"
            width="150">
            </el-table-column>
            <el-table-column
            prop="device"
            label="设备类型"
            width="150">
            </el-table-column>
            <el-table-column
            label="操作"
            width="150">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </template>
            </el-table-column>
            </el-table>
        </div>
        <ul class="net-file-btn">
            <li class="left">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                layout="slot, total, prev, pager, next, jumper"
                :total="devList.length">
                    <span style="margin-right:20px;">已选{{multipleSelection.length}}条</span>
                </el-pagination>
            </li>
            <li class="right">
                <el-button type="primary" size="small" @click="handleRefresh">刷新</el-button>
                <el-button type="primary" size="small" @click="handleSave">存储</el-button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'loginfo',
    data() {
        return {
            devList: [], // 设备列表
            pageSum: 10, // 每页显示的条数
            multipleSelection: [],
            currentPage: 1, // 当前页码
            currentIndex: 0 // 当前选中的文件在devList中的索引
        };
    },
    mounted() {
        for (let index = 0; index < 320; index++) {
            let info = {
                ip: '172.24.3.' + (index % 254),
                mac: '00:00:00:00:00:0' + (index % 10),
                mask: '255.255.0.0',
                gate: '172.24.3.1',
                dns: '192.168.10.25',
                device: 'type' + index
            }
            if (index == 0) {
                info.ip = '127.0.0.1';
                info.mac = '00:00:00:00:00:00';
                info.mask = '255.0.0.0';
                info.device = 'lo';
            } else if (index == 1) {
                info.ip = '192.168.1.168';
                info.mac = 'b0:22:23:44:55:66';
                info.mask = '255.255.255.0';
                info.device = 'eth0';
            } else {

            }
            this.devList.push(info);
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
        handleRefresh: function() {

        },
        handleSave: function() {

        }
    },
    computed: {
        showDevices: function() {
            var arrList = [];
            var start = (this.currentPage - 1) * this.pageSum, end;
            if (this.devList.length < this.currentPage * this.pageSum) {
                end = this.devList.length;
            } else {
                end = this.currentPage * this.pageSum;
            }
            for (let index = start; index < end; index++) {
                arrList.push(this.devList[index]);
            }
            return arrList;
        }
    }
}
</script>

<style>
    .net-file-list .el-table thead th {
        background-color: #77C4D2;
        color: #fff;
    }
</style>

<style scoped>

    .net-wrap {
        background-color: #FFFFFF;
        height: 100%;
    }

    .net-file-list {
        display: inline-block;
        position: absolute;
        top: 120px;
        bottom: 160px;
        right: 15px;
        left: 270px;
        
    }
    .net-file-list .el-table {
        border: 1px solid #77C4D2;
    }

    .net-file-btn .left {
        position: absolute;
        bottom: 120px;
        left: 280px;
    }
    .net-file-btn .right {
        position: absolute;
        bottom: 120px;
        right: 15px;
    }
    .net-file-btn .el-button {
        width: 100px;
    }

</style>