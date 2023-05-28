import { useI18n } from '~/hooks/i18n'

export default () => {
  const { lang, setLang } = useI18n()

  function toggleLang() {
    setLang(lang === 'zh-cn' ? 'en' : 'zh-cn')
  }

  return (
    <a
      className="icon-btn i-carbon-ibm-watson-language-translator"
      title={lang === 'zh-cn' ? 'English' : 'Chinses'}
      onClick={e => { e.preventDefault; toggleLang() }}
    />
  )
}
