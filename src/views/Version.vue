<template>
    <div class="ver-wp">
        <AppHeader pageMode="1"></AppHeader>
        <ul class="ver-main">
            <li>
                <label>设备型号</label>
                <span></span>
            </li>
            <li>
                <label>固件版本号</label>
                <span></span>
            </li>
            <li>
                <label>WEB版本号</label>
                <span></span>
            </li>
            <li>
                <label>设备序列号</label>
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>

import AppHeader from '../components/Header.vue';

export default {
    name: 'version',
    components: {
        AppHeader
    }
}
</script>

<style scoped>

    .ver-wp {
        padding: 10px 15px 0;
    }

    .ver-main {
        margin-left: 250px; 
        margin-top: 80px;
    }

    .ver-main li {
        margin-bottom: 80px;
    }

    .ver-main li label {
        display: inline-block;
        width: 120px;
        font-size: 16px;
        line-height: 28px;
        height: 28px;
    }

    .ver-main li span {
        font-size: 15px;
    }

</style>