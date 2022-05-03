import type { NextPage } from 'next'
import css from './index.module.scss' 

const Home: NextPage = () => {
  return (

    <div className={css.homePageWrapper}>
      <div className={css.contentWrapper}>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className={css.logoWrapper}>
            <img className={css.logo} src="/logo.svg" alt="logo" />
          </div>
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Kikaku!</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
