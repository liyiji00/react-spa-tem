import BtnDark from '~/components/BtnDark'


export default () => {

  return (
    <nav className="flex items-center mb-4 text-6 text-gray-700 dark:text-gray-200">
      <a
        className="icon-btn i-carbon-home"
        href="/"
        title="Back home"
      />
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <a
          className="icon-btn i-carbon-logo-github"
          href="https://github.com/llx-00/react-spa-template"
          target="_blank"
          title="Github"
        />
        <BtnDark />
    </div>
    </nav>
  )
}
