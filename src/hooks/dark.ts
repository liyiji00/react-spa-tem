import { useState } from "react"


export default () => {
  const [isDark, setDark] = useState(false)

  function toogleDark()  {
    setDark(!isDark)
  }

  return { isDark, toogleDark }
}
