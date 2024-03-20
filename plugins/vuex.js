import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            language: 'En',
        };
    },
    mutations: {
        clearGlobalVuex(state) {
            state.language = null;
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});