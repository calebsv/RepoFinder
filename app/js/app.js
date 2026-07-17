import { getUser, getRepositories } from "./api.js";
import {renderUser, renderRepositories, renderCounter} from "./ui.js";

const form = document.getElementById("search-form");
let repositories = [];
const input = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = input.value.trim();

    if (!username) return;

    try {
        const user = await getUser(username);
        renderUser(user);

        repositories = await getRepositories(username);
        sortSelect.classList.remove("hidden");
        renderRepositories(repositories);
        renderCounter(repositories.length);
        
    } catch (error) {
        console.error(error.message);
    }
});

sortSelect.addEventListener("change", () => {
    if (repositories.length === 0) return;
    const sortedRepositories = [...repositories];
    const criterio = sortSelect.value;

    switch (criterio) {
        case "stars":
            sortedRepositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
            break;

        case "forks":
            sortedRepositories.sort((a, b) => b.forks_count - a.forks_count);
            break;

        case "recent":
            sortedRepositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            break;

        case "oldest":
            sortedRepositories.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            break;

        case "az":
            sortedRepositories.sort((a, b) => a.name.localeCompare(b.name));
            break;

        case "za":
            sortedRepositories.sort((a, b) => b.name.localeCompare(a.name));
            break;

        default:
            break;
    }

    renderRepositories(sortedRepositories);
    renderCounter(sortedRepositories.length);
});