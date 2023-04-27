import { MdiGithub, MdiTwitter, MaterialSymbolsHome } from './Icons'
import BtnDark from './BtnDark'


export default () => {

  return (
    <nav className="flex items-center mb-4 text-6 text-gray-700 dark:text-gray-200">
      <a
        className="icon-btn"
        href="/"
        title="Home"
      >
        <MaterialSymbolsHome />
      </a>
      <div className="flex-1" />
      <div className="flex items-center gap-2 fo">
        <a
          className="icon-btn"
          href="https://github.com/llx-00/react-spa-template"
          target="_blank"
          title="Twitter"
        >
          <MdiTwitter />
        </a>
        <a
          className="icon-btn"
          href="https://github.com/llx-00/react-spa-template"
          target="_blank"
          title="GitHub"
        >
          <MdiGithub />
        </a>

        <a
          className="icon-btn"
          title={"Dark Mode"}
        >
          <BtnDark />
        </a>
    </div>
    </nav>
  )
}
