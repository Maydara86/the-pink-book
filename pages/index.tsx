import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <article>One</article>
        <article>Two</article>
        <article>Three</article>
      </main>

      <Footer />
    </div>
  )
}

export default Home
