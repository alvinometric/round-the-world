export async function GET() {
  const response = await fetch('https://api.github.com/orgs/sveltejs/repos')

  if (response.ok) {
    const json = await response.json()

    const repos = json.map((repo) => {
      const { name, description, stargazers_count, html_url } = repo
      return {
        name,
        description,
        stars: stargazers_count,
        url: html_url,
      }
    })

    repos.sort((a, b) => b.stars - a.stars)

    return {
      body: {
        repos,
      },
    }
  }

  return {
    status: 404,
  }
}
