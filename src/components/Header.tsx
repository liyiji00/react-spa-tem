import BtnDark from '~/components/BtnDark'
import BtnLang from './BtnLang'


export default () => {

  return (
    <nav className="flex items-center mb-4 text-6">
      <a
        className="icon-btn i-carbon-home"
        href="/"
        title="Back home"
      />
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <BtnLang />
        <a
          className="icon-btn i-carbon-logo-github"
          href="https://github.com/llx-00/react-spa-tem"
          target="_blank"
          title="Goto Github"
        />
        <BtnDark />
      </div>
    </nav>
  )
}
