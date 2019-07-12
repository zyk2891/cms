<template>
    <!--<h1>home</h1>-->
    <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
</style>