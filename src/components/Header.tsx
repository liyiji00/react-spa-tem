import { useDark } from "~/hooks"
import { classNames } from "~/utils"

export default () => {
  const { isDark, toggleDark } = useDark()

  return (
    <nav className="flex justify-end items-start p4 text-base">
      <a
        className="select-none outline-none absolute left-4 "
        href="/"
        title="Back home"
      >
        <img
          src="/logo-dark.svg"
          className={classNames("w6", isDark ? null : "hidden")}
          alt="logo"
        />
        <img
          src="/logo.svg"
          className={classNames("w6", isDark ? "hidden" : null)}
          alt="logo"
        />
      </a>

      <div className="flex gap6 items-center">
        <a
          className="link i-lucide-github"
          href="https://github.com/llx-00/react-spa-tem"
          target="_blank"
          title="Goto Github"
        />

        <a
          className="link i-lucide-sun dark:i-lucide-moon"
          title={isDark ? "Dark mode" : "Light mode"}
          onClick={e => {
            e.preventDefault()
            toggleDark()
          }}
        />
      </div>
    </nav>
  )
}
