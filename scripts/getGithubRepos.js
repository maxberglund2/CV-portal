document.addEventListener("DOMContentLoaded", function () {
    async function fetchRepositories(username, token) {
        const url = `https://api.github.com/users/${username}/repos`;
        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const repositories = await response.json();
            return repositories;
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    const username = 'maxberglund2';
    const token = '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';
    fetchRepositories(username, token).then(repos => {
        displayRepositories(repos);
        displayHighlightedRepositories(repos);
    });

    function displayRepositories(repositories) {
        const container = document.querySelector('#all-projects');
        container.innerHTML = '';

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

        repositories.forEach(repo => {
            if (highlightedRepos.includes(repo.name)) {
                const portfolioItem = createPortfolioItem(repo);
                highlightedContainer.appendChild(portfolioItem);
            }
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
});
