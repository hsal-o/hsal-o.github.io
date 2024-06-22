async function fetchRepos() {
    const username = 'hsal-o';
    const [reposResponse, colorsResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}/repos`),
        fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
    ]);

    const repos = await reposResponse.json();
    const colors = await colorsResponse.json();

    const reposContainer = document.getElementById('repos-box');
    repos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'repo';
        repoDiv.onclick = () => {
            window.open(repo.html_url, '_blank');
        };

        // Create repo content
        const repoContent = document.createElement('div');

        const repoTitle = document.createElement('h2');
        repoTitle.textContent = repo.name;  
        repoContent.appendChild(repoTitle);

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description || 'No description provided';
        repoContent.appendChild(repoDescription);

        // Create repo footer
        const repoFooter = document.createElement('div');

        const repoLanguage = document.createElement('span');
        repoLanguage.textContent = repo.language;
        repoLanguage.className = 'language'

        const languageColor = document.createElement('span');
        languageColor.className = 'language-color';
        languageColor.style.backgroundColor = colors[repo.language]?.color || '#000';
        repoLanguage.prepend(languageColor);

        repoFooter.appendChild(repoLanguage);

        // Add repo content + footer to main div container
        repoDiv.appendChild(repoContent)
        repoDiv.appendChild(repoFooter)

        reposContainer.appendChild(repoDiv);
    });
}

fetchRepos();
