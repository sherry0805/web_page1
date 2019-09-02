<template>
    <div class="pre-wrap">
        <h1>这是预览界面</h1>
        <div class="pre-video"></div>
    </div>
</template>

<script>
export default {
    name: 'preview',
    data() {
        return {

        }
    },
    mounted: function() {
        console.log('preview mounted!');
    }
}
</script>

<style scoped>

    .pre-wrap {
        background-color: #000;
        padding: 20px;
    }

    .pre-video {
        width: 100%;
        height: 100%;
    }

</style>