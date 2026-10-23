import { useEffect, useState } from 'react'
import './GitHubUser.scss'

type GitHubUserProps = {
  username: string
}

type GitHubProfile = {
  avatar_url: string
  name: string | null
  bio: string | null
  html_url: string
}

function GitHubUser({ username }: GitHubUserProps) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch(`https://api.github.com/users/${username}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setProfile)
      .catch(() => undefined)
    return () => controller.abort()
  }, [username])

  const name = profile?.name ?? username
  const avatar = profile?.avatar_url ?? `https://github.com/${username}.png`

  return (
    <a className="github-user" href={profile?.html_url ?? `https://github.com/${username}`}>
      <img className="github-user__avatar" src={avatar} alt={name} loading="lazy" />
      <div className="github-user__info">
        <span className="github-user__name">{name}</span>
        {profile?.bio && <p className="github-user__bio">{profile.bio}</p>}
      </div>
    </a>
  )
}

export { GitHubUser }