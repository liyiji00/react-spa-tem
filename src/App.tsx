import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'

import './App.css'


export default () => {

  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit dignissimos possimus asperiores ullam mollitia. Aliquam aliquid neque iste saepe ea, architecto amet, esse iusto ducimus fugiat illum eos voluptates?</p>
      </div>
    </>
  )
}
