<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss" scoped>
img {
    position: absolute;
    height: 200px;
    width: 200px;
}
</style>
