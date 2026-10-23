import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GitHubUser } from '../../components/github/GitHubUser'
import './AboutPage.scss'

function AboutPage() {
  return (
    <section className="about">
      <Link to="/" className="about__back">
        <ArrowLeft aria-hidden="true" />
        Back
      </Link>
      <h1>About</h1>
      <div className="about__team">
        <GitHubUser username="RikoxCode" />
        <GitHubUser username="Utigernils" />
      </div>
    </section>
  )
}

export { AboutPage }