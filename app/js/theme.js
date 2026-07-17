const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

function applyTheme(theme) {
    if (theme === "light") {
        html.classList.remove("dark");
        themeIcon.classList.replace("bi-moon-stars", "bi-sun");
    } else {
        html.classList.add("dark");
        themeIcon.classList.replace("bi-sun", "bi-moon-stars");
    }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});