import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import ErrorMessage from './components/ErrorMessage'
import { fetchGithubUser } from './api/github'
import './App.css'

const NOT_FOUND_MESSAGE =
  'Nenhum perfil foi encontrado com esse nome de usuário.\nTente novamente'
const GENERIC_ERROR_MESSAGE =
  'Não foi possível buscar o perfil agora.\nTente novamente em instantes'

function App() {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const trimmedUsername = username.trim()
    if (!trimmedUsername) {
      return
    }

    setLoading(true)
    setError(null)
    setProfile(null)

    try {
      const user = await fetchGithubUser(trimmedUsername)
      setProfile(user)
    } catch (err) {
      setError(
        err.message === 'not-found' ? NOT_FOUND_MESSAGE : GENERIC_ERROR_MESSAGE,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <div className="page__glow" aria-hidden="true" />
      <div className="page__dots" aria-hidden="true" />

      <main className="page__content">
        <header className="brand">
          <svg
            className="brand__icon"
            viewBox="0 0 16 16"
            width="40"
            height="40"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
            />
          </svg>
          <h1 className="brand__title">
            Perfil <strong>GitHub</strong>
          </h1>
        </header>

        <SearchBar
          value={username}
          onChange={setUsername}
          onSubmit={handleSubmit}
          disabled={loading}
        />

        {error && <ErrorMessage message={error} />}
        {profile && !error && <ProfileCard profile={profile} />}
      </main>
    </div>
  )
}

export default App
