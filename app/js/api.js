const BASE_URL = "https://api.github.com";

export async function getUser(username) {

    const response = await fetch(`${BASE_URL}/users/${username}`);

    if (!response.ok) {
        throw new Error("Usuário não encontrado.");
    }

    return  await response.json();


}

export async function getRepositories(username) {

    const response = await fetch(
        `${BASE_URL}/users/${username}/repos`
    );

    if (!response.ok) {
        throw new Error("Erro ao buscar repositórios.");
    }

    return await response.json();

}