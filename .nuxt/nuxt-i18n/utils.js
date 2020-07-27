import {
  LOCALE_CODE_KEY,
  LOCALE_FILE_KEY,
  MODULE_NAME
} from './options'

/**
 * Asynchronously load messages from translation files
 * @param  {Context}  context  Nuxt context
 * @param  {String}   locale  Language code to load
 */
export async function loadLanguageAsync (context, locale) {
  const { app } = context

  if (!app.i18n.loadedLanguages) {
    app.i18n.loadedLanguages = []
  }

  if (!app.i18n.loadedLanguages.includes(locale)) {
    const langOptions = app.i18n.locales.find(l => l[LOCALE_CODE_KEY] === locale)
    if (langOptions) {
      const file = langOptions[LOCALE_FILE_KEY]
      if (file) {
        // Hiding template directives from eslint so that parsing doesn't break.
        /*  */
        try {
          const module = await import(/* webpackChunkName: "lang-[request]" */ '~/lang/' + file)
          const messages = module.default ? module.default : module
          const result = typeof messages === 'function' ? await Promise.resolve(messages(context)) : messages
          app.i18n.setLocaleMessage(locale, result)
          app.i18n.loadedLanguages.push(locale)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
        }
        /*  */
      } else {
        // eslint-disable-next-line no-console
        console.warn(`[${MODULE_NAME}] Could not find lang file for locale ${locale}`)
      }
    }
  }
}
