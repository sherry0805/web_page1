<template>
    <div class="ug-wrap">
        <ul>
            <li>
                <h2>升级ARM</h2>
                <el-upload
                    class="upload-demo"
                    ref="uploadArm"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChangeArm"
                    :before-upload="handleBeforeUploadArm"
                    :file-list="arm.fileList"
                    :show-file-list="false"
                    :auto-upload="false"
                    :limit="2">
                    <el-input v-model="arm.path" size="small" :disabled="true"></el-input>
                    <el-button slot="trigger" size="small" type="primary">浏览</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUploadArm">升级</el-button>
                </el-upload>
            </li>
            <li>
                <h2>升级FPGA</h2>
                <el-upload
                    class="upload-demo"
                    ref="uploadFpga"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChangeFpga"
                    :before-upload="handleBeforeUploadFpga"
                    :file-list="fpga.fileList"
                    :show-file-list="false"
                    :auto-upload="false"
                    :limit="2">
                    <el-input v-model="fpga.path" size="small" :disabled="true"></el-input>
                    <el-button slot="trigger" size="small" type="primary">浏览</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUploadFpga">升级</el-button>
                </el-upload>
            </li>
            <li>
                <h2>升级WEB</h2>
                <el-upload
                    class="upload-demo"
                    ref="uploadWeb"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChangeWeb"
                    :before-upload="handleBeforeUploadWeb"
                    :file-list="web.fileList"
                    :show-file-list="false"
                    :auto-upload="false"
                    :limit="2">
                    <el-input v-model="web.path" size="small" :disabled="true"></el-input>
                    <el-button slot="trigger" size="small" type="primary">浏览</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUploadWeb">升级</el-button>
                </el-upload>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'upgrade',
    data() {
        return {
            arm: {
                fileList: [],
                path: ''
            },
            fpga: {
                fileList: [],
                path: ''
            },
            web: {
                fileList: [],
                path: ''
            }
        };
    },
    methods: {
      submitUploadArm() {
        this.$refs.uploadArm.submit();
      },
      handleChangeArm(file, fileList) {
          console.log('change', file.name, fileList);
          this.arm.path = file.name;
          this.arm.fileList = fileList.slice(-1); // 限制点击升级按钮时，只上传最新浏览的那个文件
      },
      handleBeforeUploadArm(file) {
          console.log('before upload', file);
      },
      submitUploadFpga() {
        this.$refs.uploadFpga.submit();
      },
      handleChangeFpga(file, fileList) {
          this.fpga.path = file.name;
          this.fpga.fileList = fileList.slice(-1); // 限制点击升级按钮时，只上传最新浏览的那个文件
      },
      handleBeforeUploadFpga(file) {

      },
      submitUploadWeb() {
        this.$refs.uploadWeb.submit();
      },
      handleChangeWeb(file, fileList) {
          console.log('change', file.name, fileList);
          this.web.path = file.name;
          this.web.fileList = fileList.slice(-1); // 限制点击升级按钮时，只上传最新浏览的那个文件
      },
      handleBeforeUploadWeb(file) {

      }
    }
}
</script>

<style scoped>

    .ug-wrap {
        background-color: #FFFFFF;
        height: 100%;
    }

    .ug-wrap ul {
        padding: 30px;
    }
    .ug-wrap ul li {
        margin-bottom: 50px;
    }
    .ug-wrap ul li h2 {
        margin-bottom: 15px;
    }

    .ug-wrap li .el-input {
        float: left;
        margin-right: 50px;
        width: 340px;
    }
    .ug-wrap li .el-button {
        width: 100px;
    }
    .ug-wrap li .el-button.el-button--primary {
        background-color: #77C4D2;
        border-color: #77C4D2;
    }
    .ug-wrap li .el-button.el-button--success {
        background-color: #EA2F4A;
        border-color: #EA2F4A;
    }

</style>