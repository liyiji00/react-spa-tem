import { useEffect, useState } from "react"


function useDark() {
  const [isDark, setDark] = useState<boolean>()
  const _HTML = document.children[0]

  useEffect(() => {
    if (isDark !== undefined) {
      if (isDark) {
        _HTML.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        _HTML.classList.remove('dark')
        localStorage.removeItem('theme')
      }
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
        setDark(false)
      } else {
        setDark(_localTheme === 'dark')
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

// const { isDark, toggleDark } = useDark()

export { useDark }
