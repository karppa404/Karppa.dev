import * as React from "react"
import {
  ArrowUpRight,
  GitFork,
  Star,
  MapPin
} from "lucide-react"
import {
  siGithub,
  siSubstack,
} from "simple-icons"

import { ActivityChart } from "@/components/activity-chart"
import { BrandIcon } from "@/components/brand-icon"
import { BlogCard } from "@/components/blog-card"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  GITHUB_USERNAME,
  getContributionCalendar,
  getGithubPortfolio,
  type ContributionCalendar,
  type GithubPortfolio,
  type PortfolioRepo,
} from "@/lib/octokit"
import {
  getSubstackArticles,
  SUBSTACK_URL,
  type Article,
} from "@/lib/substack"

const OWNER_NAME = "Abel Semahegn"
const LINKEDIN_URL = "https://www.linkedin.com/in/abel-semahegn-2ab5621a3/"
const FALLBACK_AVATAR = "https://avatars.githubusercontent.com/u/67647083?v=4"
const FALLBACK_REPOS: PortfolioRepo[] = [
  {
    id: 1,
    name: "karppa.party",
    description: "A Jackbox-style game built for parties.",
    htmlUrl: "https://github.com/karppa404/karppa.party",
    homepage: "https://karppa-party.vercel.app",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: [],
    updatedAt: "2026-08-14T15:47:36Z",
  },
  {
    id: 2,
    name: "KB2",
    description: "A second attempt at building a Kalshi trading bot.",
    htmlUrl: "https://github.com/karppa404/KB2",
    homepage: null,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: [],
    updatedAt: "2026-05-29T19:03:57Z",
  },
  {
    id: 3,
    name: "KB1",
    description: "A simple first-generation Kalshi bot.",
    htmlUrl: "https://github.com/karppa404/KB1",
    homepage: null,
    language: "Python",
    stars: 0,
    forks: 0,
    topics: [],
    updatedAt: "2026-06-04T17:03:53Z",
  },
]

function formatDate(date: string | null) {
  if (!date) return "Recently"
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date))
}

function ProjectCard({ repo }: { repo: PortfolioRepo }) {
  const projectUrl = repo.homepage || repo.htmlUrl
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-language">
          <span className="language-dot" />
          {repo.language || "Open source"}
        </span>
        <span>{formatDate(repo.updatedAt)}</span>
      </div>
      <div className="project-copy">
        <h3>{repo.name}</h3>
        <p>{repo.description || "A public experiment from my GitHub."}</p>
      </div>
      <div className="project-actions">
        <a href={projectUrl} rel="noreferrer" target="_blank">
          {repo.homepage ? "View project" : "View repository"}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <span className="repo-meta" aria-label={`${repo.stars} stars and ${repo.forks} forks`}>
          <Star aria-hidden="true" /> {repo.stars}
          <GitFork aria-hidden="true" /> {repo.forks}
        </span>
      </div>
    </article>
  )
}

export function App() {
  const [github, setGithub] = React.useState<GithubPortfolio | null>(null)
  const [articles, setArticles] = React.useState<Article[]>([])
  const [calendar, setCalendar] = React.useState<ContributionCalendar | null>(null)
  const [loadingGithub, setLoadingGithub] = React.useState(true)

  React.useEffect(() => {
    let active = true

    getGithubPortfolio()
      .then((data) => active && setGithub(data))
      .catch(() => undefined)
      .finally(() => active && setLoadingGithub(false))

    getContributionCalendar()
      .then((data) => active && setCalendar(data))
      .catch(() => undefined)

    getSubstackArticles().then((data) => active && setArticles(data))

    return () => {
      active = false
    }
  }, [])

  const repos = (github?.repos.length ? github.repos : FALLBACK_REPOS).slice(0, 4)
  const profile = github?.profile

  return (
    <main className="site-shell">
      <div className="page-grid" aria-hidden="true" />

      <header className="hero section-frame">
        <img
          alt="A still life of grapes and a squirrel"
          className="hero-art"
          src="/wallhaven-x8e2lv.png"
        />
        <div className="identity-row">
          <img
            alt={`${OWNER_NAME}'s GitHub profile`}
            className="avatar"
            height="112"
            src={profile?.avatarUrl || FALLBACK_AVATAR}
            width="112"
          />
          <div className="identity-copy">
            <h1>{OWNER_NAME}</h1>
            <p>Developer · builder · writer</p>
          </div>
          <ThemeToggle />
        </div>
<div className="pt-10 pl-5 pr-5">
        <p className="eyebrow" id="intro-title">Hey, I&apos;m Abel</p>
        <p>I share my main projects, quick demonstrations, and random experiments over on <a href="https://github.com/karppa404">GitHub</a>.</p>
        <p>I write about my latest projects and the topics that catch my interest. Most of my long-form pieces live on my <a href="https://substack.com/@karppa404">Substack</a>.</p>
        <div className="quick-stats">
          <span>
            <strong>{profile?.publicRepos ?? repos.length}</strong> public repos
          </span>
    
          <span>
            <MapPin aria-hidden="true" /> {profile?.location || "Earth"}
          </span>
        </div>
    </div>
      </header>

      <section className="chart-section section-frame" aria-label="GitHub activity">
        <ActivityChart calendar={calendar} loading={loadingGithub && !calendar} />
      </section>

      <section className="work-section section-frame" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Things I&apos;ve shipped.</h2>
          </div>
          <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}>
            All repositories <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="project-grid">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </section>

      <section className="writing-section section-frame" aria-labelledby="writing-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Field notes</p>
            <h2 id="writing-title">Thinking out loud.</h2>
          </div>
          <a href={SUBSTACK_URL}>
            Follow on Substack <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="blog-grid">
          {articles.length ? (
            articles.map((article) => <BlogCard article={article} key={article.link} />)
          ) : (
            <div className="article-loading">Loading the latest writing…</div>
          )}
        </div>
      </section>

      <footer className="footer section-frame">
        <div className="footer-card">
          <div>
            <h2>Let&apos;s build something useful.</h2>
            <p className="footer-note">
              Software, experiments, and field notes—kept in sync automatically.
            </p>
          </div>
          <div className="footer-meta">
            <nav aria-label="Social profiles" className="social-links">
              <a
                aria-label={`GitHub @${GITHUB_USERNAME}`}
                href={`https://github.com/${GITHUB_USERNAME}`}
                rel="noreferrer"
                target="_blank"
                title={`GitHub @${GITHUB_USERNAME}`}
              >
                <BrandIcon icon={siGithub} />
              </a>
              <a
                aria-label="LinkedIn"
                href={LINKEDIN_URL}
                rel="noreferrer"
                target="_blank"
                title="LinkedIn"
              >
                <span aria-hidden="true" className="linkedin-mark">in</span>
              </a>
              <a
                aria-label="Substack"
                href={SUBSTACK_URL}
                rel="noreferrer"
                target="_blank"
                title="Substack"
              >
                <BrandIcon icon={siSubstack} />
              </a>
            </nav>
            <p className="footer-credit">
              © {new Date().getFullYear()} {OWNER_NAME}. Crafted with React.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
