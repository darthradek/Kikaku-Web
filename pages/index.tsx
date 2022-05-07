import type { NextPage } from 'next'
import Link from "next/link";
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

      <div className={css.background}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your planing today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-10 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/login">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <h2>Login</h2>
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/register">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                <h2>Register</h2>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
