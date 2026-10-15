import './App.scss'
import Layout from './components/Layout'
import Countdown from './components/countdown/Countdown'
import { Card, CardHeader, CardBody, CardFooter } from './components/card/Card'

function App() {
  return (
    <Layout>
      <div className="app">
        <section className="welcome">
          <p className="eyebrow">The right thing to do</p>
          <h1>See Your Fucking <br />Server Everywhere</h1>
          <p className="welcome__description">
            Syfse is a server capacity sharing platform that allows you to share your server capacity with others to play games. 
            Get payed for sharing your server capacity and help others play their favorite games without lag or downtime.
          </p>
          <Card>
            <CardHeader>
              <p>We're building something special.</p>
            </CardHeader>
            <CardBody>
              <Countdown />
            </CardBody>
          </Card>
        </section>
      </div>
    </Layout>
  )
}

export default App
