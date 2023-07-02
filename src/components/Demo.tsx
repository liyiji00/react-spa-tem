import reactLogo from '~/assets/react.svg'
import viteLogo from '/vite.svg'


export default (props: any) => {


  return (
    <>
      <div className='text-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Logo Vite" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo rotation" alt="Logo React" />
        </a>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit dignissimos possimus asperiores ullam mollitia. Aliquam aliquid neque iste saepe ea, architecto amet, esse iusto ducimus fugiat illum eos voluptates?</p>
    </>
  )
}
