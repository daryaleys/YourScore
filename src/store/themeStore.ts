import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const themeStore = defineStore("themeStore", () => {
    const isDarkMode: Ref<boolean> = ref(false);
    return { isDarkMode };
});
