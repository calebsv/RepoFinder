import { initScrollReveal } from "./observerScroll.js";
const profile = document.getElementById("profile");
const results = document.getElementById("results");

export function renderUser(user) {
    profile.innerHTML = `
        <div class="flex flex-col items-center text-center">

            <img
                src="${user.avatar_url}"
                class="w-28 h-28 rounded-full border-4 border-gr dark:border-lime-400">

            <h2 class="font-ragick mt-5 text-3xl font-bold text-gr dark:text-white">
                ${user.name ?? user.login}
            </h2>

            <p class="text-zinc-400">
                @${user.login}
            </p>

            <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

    <div class="rounded-2xl bg-black/5 dark:bg-white/5 p-4 text-center border border-black/20 dark:border-white/10">
        <p class="text-2xl font-bold text-gr dark:text-lime-400">${user.public_repos}</p>
        <span class="text-sm text-zinc-400">Repositórios</span>
    </div>

    <div class="rounded-2xl bg-black/5 dark:bg-white/5 p-4 text-center border border-black/20 dark:border-white/10">
        <p class="text-2xl font-bold text-gr  dark:text-lime-400">${user.followers}</p>
        <span class="text-sm text-zinc-400">Seguidores</span>
    </div>

    <div class="rounded-2xl bg-black/5 dark:bg-white/5 p-4 text-center border border-black/20 dark:border-white/10">
        <p class="text-2xl font-bold text-gr  dark:text-lime-400">${user.following}</p>
        <span class="text-sm text-zinc-400">Seguindo</span>
    </div>

    <div class="rounded-2xl bg-black/5 dark:bg-white/5 p-4 text-center border border-black/20 dark:border-white/10">
        <p class="text-2xl font-bold text-gr  dark:text-lime-400">${user.public_gists}</p>
        <span class="text-sm text-zinc-400">Gists</span>
    </div>

 </div>

        </div>
    `;
}
function createRepositoryCard(repo, index) {
    return `
        <article
            class="mt-10 rounded-3xl border border-gr dark:border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 card-animation"
            style="animation-delay:${index * 800}ms">

            <div class="flex items-center justify-between">

                <h3 class="text-xl font-bold text-zinc-500 dark:text-white">
                    ${repo.name}
                </h3>

                <span class="rounded-full bg-gr/5 dark:bg-lime-500/10 px-3 py-1 text-xs dark:text-lime-400 text-gr border dark:border-limao border-gr">
                    ${repo.language ?? "Sem linguagem"}
                </span>

            </div>

            <p class="mt-4 text-sm leading-relaxed text-zinc-400">
                ${repo.description ?? "Este repositório não possui descrição."}
            </p>

            <div class="mt-6 flex items-center justify-between">

                <div class="flex gap-5 text-zinc-500">

                    <span>⭐ ${repo.stargazers_count}</span>

                    <span>🍴 ${repo.forks_count}</span>

                </div>

                <a
                    href="${repo.html_url}"
                    target="_blank"
                    class="font-semibold text-gr dark:text-lime-400 hover:text-lime-300">

                    Abrir →

                </a>

            </div>

        </article>
    `;
}

export function renderRepositories(repositories) {
    results.innerHTML = "";

    repositories.forEach((repo, index) => {
        results.innerHTML += createRepositoryCard(repo, index);
    });

    const cards = document.querySelectorAll(".reveal");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("active");
        }, index * 80);
    });
}

const counter = document.getElementById("repository-count");

export function renderCounter(total) {
    counter.textContent = `${total} repositórios encontrados`;
}
