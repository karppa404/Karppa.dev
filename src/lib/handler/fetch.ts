type GhRepo = {
  name: string
  date: string
  link: string
}

export async function getGhRepos(): Promise<GhRepo[]> {
  const response = await fetch('https://api.github.com/users/karppa404/repos', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GH_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const repos = await response.json()

  return repos.map((repo: any) => ({
    name: repo.name,
    date: repo.created_at,
    link: repo.html_url,
  }))
}

export async function getRssFeed() {}
