//TypeScript File
const user: HTMLElement = document.getElementById('user');
const apiKey: string = "https://api.github.com/users/";
const submit: HTMLElement = document.getElementById('submit');
async function fetchData() {
    let data: Response = await fetch(`${apiKey}${(<HTMLInputElement>user).value}`);
    let response = await data.json();
    document.querySelector(".hero-wrapper").innerHTML = `
            <div class="hero-image">
                <img src="${response.avatar_url}" alt="image">
            </div>
            <div class="hero__login">#${response.login}</div>
            <div class="hero__name">${response.name}</div>
            <div class="hero-testimonial">
                <div class="repo">Repos: ${response.public_repos}</div>
                <div class="gist">Gists: ${response.public_gists}</div>
                <div class="followers">Followers: ${response.followers}</div>
                <div class="following">Following: ${response.following}</div>
            </div>
`;
}

submit.addEventListener("click", (event: Event) => fetchData())

