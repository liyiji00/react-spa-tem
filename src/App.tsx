import Header from '~/components/Header'
import Demo from './components/Demo'

import './App.scss'


export default () => {

  return (
    <>
      <Header />
      <div className='max-w-1280px box-border mx-auto p-4 text-5'>
        <Demo />
      </div>
    </>
  )
}
