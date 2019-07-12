<template>
    <div class="app-container">
        <mt-header fixed title="固定在顶部"></mt-header>
        <h1>123</h1>
        <nav class="mui-bar mui-bar-tab">
            <a id="defaultTab" class="mui-tab-item mui-active" href="template/head.html">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="template/chat.html">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <span class="mui-tab-label">列表</span>
            </a>
            <a class="mui-tab-item" href="template/contact.html">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="template/my.html">
                <span class="mui-icon mui-icon-person"></span>
                <span class="mui-tab-label">我的</span>
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
.app-container{
    padding-top: 40px;
}
</style>