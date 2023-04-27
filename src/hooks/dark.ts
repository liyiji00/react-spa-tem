import { useState } from "react"


export default () => {
  const [isDark, setDark] = useState(false)

  function toogleDark()  {
    setDark(!isDark)

    const el = document.querySelectorAll('html')[0]
    if (el) {
      if (isDark) el.classList.add('dark')
      else el.classList.remove('dark')
    }
  }

  return { isDark, toogleDark }
}
