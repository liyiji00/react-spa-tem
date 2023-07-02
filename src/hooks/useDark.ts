import { useEffect, useState } from "react"


export default function () {
  const [isDark, setDark] = useState(false)
  const _HTML = document.children[0]

  useEffect(() => {
    if (isDark) {
      _HTML.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      _HTML.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }, [isDark])

  useEffect(() => {
    const _localTheme = localStorage.getItem('theme')
    const _mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      setDark(e.matches)
    }
    _mediaQuery.addEventListener('change', handleChange)

    if (_mediaQuery.matches) {
      if (_localTheme === null) {
        setDark(true)
      } else {
        setDark(_localTheme === 'light' ? false : true)
      }
    } else {
      setDark(_localTheme === 'dark')
    }

    return () => {
      _mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  function toggleDark() {
    setDark(!isDark)
  }

  return { isDark, toggleDark }
}
