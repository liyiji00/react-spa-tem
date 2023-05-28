import { useEffect, useState } from "react"


function checkLang(lang: string) { // todo: 语言缩写检查
  return !!lang
}

export function useI18n() {
  const _localLang = localStorage.getItem('lang')
  const [_lang, _set] = useState<string>((_localLang && checkLang(_localLang)) ? _localLang : 'default')
  const [langData, setLangData] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    localStorage.setItem('lang', _lang)
  }, [_lang])

  function setLang(lang: string) {
    if (checkLang(lang)) {
      _set(lang)
    }
  }

  return { lang: _lang, setLang, langData }
}
