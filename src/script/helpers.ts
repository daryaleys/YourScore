export const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
};

export const getImageUrl = (name: string) => {
    return new URL(name, import.meta.url).href;
};
