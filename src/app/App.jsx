import { Card, CardBody, CardHeader } from '../components/ui/card/Card'
import { Layout } from '../components/layout/Layout'
import { Countdown } from '../features/countdown/Countdown'
import './App.scss'

function App() {
  return (
    <Layout>
      <section className="welcome">
        <p className="welcome__eyebrow">The right thing to do</p>
        <h1>See Your Fucking<br />Server Everywhere</h1>
        <p className="welcome__description">
          Syfse is a server capacity sharing platform that allows you to share
          your server capacity with others to play games. Get paid for sharing
          your server capacity and help others play their favorite games
          without lag or downtime.
        </p>
        <Card>
          <CardHeader>
            <p>We&apos;re building something special.</p>
          </CardHeader>
          <CardBody>
            <Countdown />
          </CardBody>
        </Card>
      </section>
    </Layout>
  )
}

export { App }
