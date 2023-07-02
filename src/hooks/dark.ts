import { useState } from "react"


export default () => {
  const _HTML = document.children[0]
  const [isDark, setDark] = useState(localStorage.getItem('theme') === 'dark')
  if (isDark) {
    _HTML.classList.add('dark')
  }

  function toggleDark() {
    setDark(() => {
      if (isDark) _HTML.classList.remove('dark')
      else _HTML.classList.add('dark')

      localStorage.setItem('theme', isDark ? '' : 'dark')
      return !isDark
    })
  }

  return { isDark, toggleDark }
}
