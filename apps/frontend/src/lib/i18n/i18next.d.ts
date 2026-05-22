import { resources, DEFAULT_LOCALE } from './i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: (typeof resources)[typeof DEFAULT_LOCALE]
  }
}
