import { useEffect, useState } from 'react'
import { EmptyState } from '../ui/empty-state/EmptyState'
import { Skeleton } from '../ui/skeleton/Skeleton'
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

type LoadStatus = 'loading' | 'success' | 'error'

function GitHubUser({ username }: GitHubUserProps) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [status, setStatus] = useState<LoadStatus>('loading')

  useEffect(() => {
    const controller = new AbortController()
    fetch(`https://api.github.com/users/${username}`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: GitHubProfile) => {
        setProfile(data)
        setStatus('success')
      })
      .catch(() => setStatus('error'))
    return () => controller.abort()
  }, [username])

  if (status === 'error') {
    return (
      <div className="github-user">
        <EmptyState
          title="Couldn't load profile"
          description={`We couldn't fetch ${username}'s GitHub profile.`}
          action={
            <a
              className="github-user__link"
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          }
        />
      </div>
    )
  }

  return (
    <a className="github-user" href={profile?.html_url}>
        {profile?.avatar_url ? (
          <img
            className="github-user__avatar"
            src={profile?.avatar_url}
            alt={profile?.name ?? username}
            loading="lazy"
          />
        ) : (
          <Skeleton width={64} height={64} className="github-user__avatar-skeleton" />
        )}
      {profile?.name || profile?.bio ? (
        <div className="github-user__info">
          <span className="github-user__name">{profile?.name ?? username}</span>
          {profile?.bio && <p className="github-user__bio">{profile.bio}</p>}
        </div>
      ) : (
        <div className="github-user__info">
          <Skeleton width={140} height={17} />
          <Skeleton width={220} height={14} />
        </div>
      )}
    </a>
  )
}

export { GitHubUser }