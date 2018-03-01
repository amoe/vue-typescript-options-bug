// entry.ts

import ApplicationRoot from './components/ApplicationRoot.vue';
import Vue from 'vue';




document.addEventListener("DOMContentLoaded", e => {
    const vueInstance = new Vue({
        render: h => h(ApplicationRoot)
    });

    console.log("Value of component is: %o", ApplicationRoot);
    console.log("Value of options is: %o", ApplicationRoot.options);
    console.log("Value of created hook is: %o", ApplicationRoot.created);

    vueInstance.$mount('#vue-outlet');
});
