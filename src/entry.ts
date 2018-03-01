// entry.ts

import ApplicationRoot from './components/ApplicationRoot.vue';
import Vue from 'vue';




document.addEventListener("DOMContentLoaded", e => {
    const vueInstance = new Vue({
        render: h => h(ApplicationRoot)
    });

    console.log("Value of component is: %o", ApplicationRoot);
    
    // This won't work: 
    // TS2339: Property 'options' does not exist on type 'VueConstructor<Record<never, any> & Vue>'.
    console.log("Value of options is: %o", ApplicationRoot.options);

    // Neither will this: 
    // TS2339: Property 'created' does not exist on type 'VueConstructor<Record<never, any> & Vue>'.
    console.log("Value of created hook is: %o", ApplicationRoot.created);

    vueInstance.$mount('#vue-outlet');
});
