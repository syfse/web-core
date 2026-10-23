import { GitHubUser } from '../../components/github/GitHubUser'
import './AboutPage.scss'

function AboutPage() {
  return (
    <section className="about">
      <h1>About</h1>
      <div className="about__team">
        <GitHubUser username="RikoxCode" />
        <GitHubUser username="Utigernils" />
      </div>
    </section>
  )
}

export { AboutPage }