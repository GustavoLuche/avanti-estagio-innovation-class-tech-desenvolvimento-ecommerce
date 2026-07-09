const GITHUB_API_URL = 'https://api.github.com/users'

export async function fetchGithubUser(username) {
  const response = await fetch(`${GITHUB_API_URL}/${encodeURIComponent(username)}`)

  if (response.status === 404) {
    throw new Error('not-found')
  }

  if (!response.ok) {
    throw new Error('request-failed')
  }

  const data = await response.json()

  return {
    login: data.login,
    name: data.name || data.login,
    avatarUrl: data.avatar_url,
    bio: data.bio,
    htmlUrl: data.html_url,
  }
}
