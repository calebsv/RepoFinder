import { getUser, getRepositories } from "./api.js";
import { renderUser, renderRepositories} from "./ui.js";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = input.value.trim();

    if (!username) return;

    try {
        const user = await getUser(username);
        renderUser(user);

        const repositories = await getRepositories(username);
        console.log("Repositórios:", repositories);
        
        renderRepositories(repositories);

    } catch (error) {
        console.error(error.message);
    }
});