import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components/ui/button/Button'
import './NotFoundPage.scss'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1>Page not found</h1>
      <p className="not-found__description">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <PrimaryButton onClick={() => navigate('/')}>Back to home</PrimaryButton>
    </section>
  )
}

export { NotFoundPage }