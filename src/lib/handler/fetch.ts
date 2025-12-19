// src/handler/fetch.ts
import { octokit } from '@/hooks/octokit'

export async function getGhRepos() {
  const res = await octokit.request('GET /users/{username}/repos', {
    username: 'karppa404',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return res.data.map((repo) => ({
    name: repo.name,
    description: repo.description ?? '',
    link: repo.html_url
  }))
}
