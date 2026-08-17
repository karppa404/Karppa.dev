import { Octokit } from "octokit"

export const GITHUB_USERNAME = "karppa404"
export const github = new Octokit()

export type PortfolioRepo = {
  id: number
  name: string
  description: string | null
  htmlUrl: string
  homepage: string | null
  language: string | null
  stars: number
  forks: number
  topics: string[]
  updatedAt: string | null
}

export type GithubPortfolio = {
  profile: {
    login: string
    name: string
    avatarUrl: string
    htmlUrl: string
    location: string | null
    followers: number
    publicRepos: number
  }
  repos: PortfolioRepo[]
}

export type ContributionDay = {
  date: string
  count: number
  level: number
}

export type ContributionCalendar = {
  total: number
  contributions: ContributionDay[]
}

type ContributionApiResponse = {
  total: Record<string, number>
  contributions: ContributionDay[]
}

export async function getContributionCalendar(): Promise<ContributionCalendar> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
  )
  if (!response.ok) throw new Error("Unable to load GitHub contributions")

  const data = (await response.json()) as ContributionApiResponse
  return {
    total: Object.values(data.total)[0] ?? 0,
    contributions: data.contributions,
  }
}

export async function getGithubPortfolio(): Promise<GithubPortfolio> {
  const [profileResponse, reposResponse] = await Promise.all([
    github.rest.users.getByUsername({ username: GITHUB_USERNAME }),
    github.rest.repos.listForUser({
      username: GITHUB_USERNAME,
      per_page: 100,
      sort: "updated",
      direction: "desc",
      type: "owner",
    }),
  ])

  const repos = reposResponse.data
    .filter((repo) => !repo.fork && !repo.archived)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      htmlUrl: repo.html_url,
      homepage: repo.homepage || null,
      language: repo.language ?? null,
      stars: repo.stargazers_count ?? 0,
      forks: repo.forks_count ?? 0,
      topics: repo.topics ?? [],
      updatedAt: repo.updated_at ?? null,
    }))

  return {
    profile: {
      login: profileResponse.data.login,
      name: profileResponse.data.name || "Abel Semahegn",
      avatarUrl: profileResponse.data.avatar_url,
      htmlUrl: profileResponse.data.html_url,
      location: profileResponse.data.location,
      followers: profileResponse.data.followers,
      publicRepos: profileResponse.data.public_repos,
    },
    repos,
  }
}
