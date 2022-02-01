import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  framework: 'react',
  ssr: false,
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en', 'zh-CN', 'pt-BR'],
  }
}