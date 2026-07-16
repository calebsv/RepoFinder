const profile = document.getElementById("profile");
const results = document.getElementById("results");

export function renderUser(user) {
    profile.innerHTML = `
        <div class="flex flex-col items-center text-center">

            <img
                src="${user.avatar_url}"
                class="w-28 h-28 rounded-full border-4 border-lime-400">

            <h2 class="mt-5 text-3xl font-bold text-white">
                ${user.name ?? user.login}
            </h2>

            <p class="text-zinc-400">
                @${user.login}
            </p>

        </div>
    `;
}

   function createRepositoryCard(repo, index) {
    return `
        <article
            class="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 card-animation"
            style="animation-delay:${index * 100}ms">

            <div class="flex items-center justify-between">

                <h3 class="text-xl font-bold text-white">
                    ${repo.name}
                </h3>

                <span class="rounded-full bg-lime-500/10 px-3 py-1 text-xs text-lime-400">
                    ${repo.language ?? "Sem linguagem"}
                </span>

            </div>

            <p class="mt-4 text-sm leading-relaxed text-zinc-400">
                ${repo.description ?? "Este repositório não possui descrição."}
            </p>

            <div class="mt-6 flex items-center justify-between">

                <div class="flex gap-5 text-zinc-300">

                    <span>⭐ ${repo.stargazers_count}</span>

                    <span>🍴 ${repo.forks_count}</span>

                </div>

                <a
                    href="${repo.html_url}"
                    target="_blank"
                    class="font-semibold text-lime-400 hover:text-lime-300">

                    Abrir →

                </a>

            </div>

        </article>
    `;
}

export function renderRepositories(repositories) {
    results.innerHTML = "";

    repositories.forEach((repo,index) => {
        const card = createRepositoryCard(repo,index);
        results.innerHTML += card;
    });


}