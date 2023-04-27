import { useState } from "react"


export default () => {
  const _el = document.querySelector('html')
  const [isDark, setDark] = useState([...(_el?.classList || [])].includes('dark'))

  function toogleDark()  {
    setDark(() => {
      if (_el) {
        if (isDark) _el.classList.remove('dark')
        else _el.classList.add('dark')
      } else {
        const __el = document.querySelector('html')
        if (isDark) __el?.classList.remove('dark')
        else __el?.classList.add('dark')
      }

      return !isDark
    })
  }

  return { isDark, toogleDark }
}
