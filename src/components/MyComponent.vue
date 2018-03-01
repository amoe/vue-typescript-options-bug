<template>
  <p>I am a paragraph provided by the template of MyComponent.</p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    created() {
        console.log("I am inside the created hook");
    }
});
</script>

