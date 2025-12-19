export const load = async ({ fetch }) => {
  const res = await fetch('/api/ghRepo')
  return { repos: await res.json() }
}
