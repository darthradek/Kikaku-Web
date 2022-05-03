import type { NextPage } from 'next'
import Link from 'next/link'
import css from './index.module.scss' 

const Home: NextPage = () => {
  return (
    <div>
      /homepage
      <h1>Routing</h1>
        <div className={css.nav}>
          <Link href="/register">
            <a>
              <h2>Register</h2>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <h2>Login</h2>
            </a>
          </Link>
        </div>
    </div>
  )
}

export default Home
