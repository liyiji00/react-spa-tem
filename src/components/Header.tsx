import { useDark } from '~/hooks'


export default () => {
  const { isDark, toggleDark } = useDark()

  return (
    <nav className="flex p-4 text-6">
      <a
        className="icon-btn i-lucide-atom"
        href="/"
        title="Back home"
      />
      <div className="flex-1" />
      <div className="flex gap-6">
        <a
          className="icon-btn i-lucide-twitter"
          href="https://twitter.com/lilongxiang2000"
          target="_blank"
          title="Goto Github"
        />
        <a
          className="icon-btn i-lucide-github"
          href="https://github.com/llx-00/react-spa-tem"
          target="_blank"
          title="Goto Github"
        />
        <a
          className="icon-btn i-lucide-sun dark:i-lucide-moon"
          title={isDark ? 'Dark mode' : 'Light mode'}
          onClick={e => { e.preventDefault; toggleDark() }}
        />
      </div>
    </nav>
  )
}

