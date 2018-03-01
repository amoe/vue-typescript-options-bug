<template>
<div class="page">
  <my-component></my-component>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyComponent from './MyComponent.vue';

export default Vue.extend({
    components: {
        MyComponent
    },
 });
</script>

<style>
</style>
