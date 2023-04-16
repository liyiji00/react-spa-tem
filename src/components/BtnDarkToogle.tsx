import { PhSun, PhMoon } from './Icons'
import useDark from '../hooks/dark'

export default () => {
  const { isDark, toogleDark } = useDark()

  return (
    isDark
      ? <PhMoon onClick={toogleDark} />
      : <PhSun onClick={toogleDark} />
  )
}
