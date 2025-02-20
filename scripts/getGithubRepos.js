document.addEventListener("DOMContentLoaded", function () {
    async function fetchRepositories(username) {
        const url = `https://api.github.com/users/${username}/repos`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch repositories: ${response.status} ${response.statusText}`);
            }
            const repositories = await response.json();
            return repositories;
        } catch (error) {
            console.error('Error fetching repositories:', error);
            return [];
        }
    }

    function displayRepositories(repositories) {
        const container = document.querySelector('#all-projects');
        if (!container) return;

        container.innerHTML = ''; 

        if (repositories.length === 0) {
            container.innerHTML = '<p>No repositories found.</p>';
            return;
        }

        repositories.forEach(repo => {
            const portfolioItem = createPortfolioItem(repo);
            container.appendChild(portfolioItem);
        });
    }

    function displayHighlightedRepositories(repositories) {
        const highlightedContainer = document.querySelector('#highlighted-projects');
        if (!highlightedContainer) return;

        highlightedContainer.innerHTML = '';

        const highlightedRepos = ["Critter", "OtakuStyle", "greenTech", "KyotoInc"];

        const filteredRepos = repositories.filter(repo => highlightedRepos.includes(repo.name));

        if (filteredRepos.length === 0) {
            highlightedContainer.innerHTML = '<p>No highlighted repositories found.</p>';
            return;
        }

        filteredRepos.forEach(repo => {
            const portfolioItem = createPortfolioItem(repo);
            highlightedContainer.appendChild(portfolioItem);
        });
    }

    function createPortfolioItem(repo) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';

        const githubIcon = document.createElement('i');
        githubIcon.className = 'fa-brands fa-github fa-5x';

        const projectName = document.createElement('p');
        projectName.textContent = repo.name;

        portfolioItem.appendChild(githubIcon);
        portfolioItem.appendChild(projectName);

        portfolioItem.addEventListener('click', () => {
            window.open(repo.html_url, '_blank');
        });

        return portfolioItem;
    }

    const username = 'maxberglund2';
    fetchRepositories(username).then(repos => {
        displayRepositories(repos);
        displayHighlightedRepositories(repos);
    });
});