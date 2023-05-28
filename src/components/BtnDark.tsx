import useDark from '~/hooks/dark'


export default () => {
  const { isDark, toggleDark } = useDark()

  return (
    <a
      className="icon-btn i-carbon-sun dark:i-carbon-moon"
      title={isDark ? 'Dark mode' : 'Light mode'}
      onClick={e => { e.preventDefault; toggleDark() }}
    />
  )
}
