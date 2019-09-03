<template>
  <footer class="app-footer">
    <div class="footer-bar"></div>
    <div class="footer-copyright">
      <span>COPYRIGHT 2017-2018 WWW.GUIDER.CN ALLL RIGHTS RESERVED 武汉高德智感科技有限公司</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>

  .app-footer {
    background-color: #1B1D26;
  }
  .footer-bar {
    height: 75px;
    
    border-bottom: 1px solid #313338
  }
  .footer-copyright {
    width: 100%;
    height: 25px;
    display: inline-block;
    text-align: center;
  }
  .footer-copyright span {
    margin: 0 auto;
    color: #59626C;
    font-weight: 600;
    font-size: 14px;
  }
</style>
