export const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
};

export const getCurrentTheme = (): boolean => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("theme");
    
    return (!savedTheme && matchMedia.matches) || (savedTheme === "dark")
}
