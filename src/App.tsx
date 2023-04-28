import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from '~/components/Header'

import './App.scss'


export default () => {

  return (
    <>
      <Header />
      <div className='font-sans text-left text-gray-700 dark:text-gray-200'>
        <div className='text-center'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit dignissimos possimus asperiores ullam mollitia. Aliquam aliquid neque iste saepe ea, architecto amet, esse iusto ducimus fugiat illum eos voluptates?</p>
      </div>
    </>
  )
}
