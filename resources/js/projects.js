async function fetchRepos() {
    const username = 'hsal-o';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const reposContainer = document.getElementById('repos-box');
    repos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'repo';
        repoDiv.onclick = () => {
            window.open(repo.html_url, '_blank');
        };

        const repoTitle = document.createElement('h2');
        repoTitle.textContent = repo.name;
        repoDiv.appendChild(repoTitle);

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description || 'No description provided';
        repoDiv.appendChild(repoDescription);

        reposContainer.appendChild(repoDiv);
    });
}

fetchRepos();
