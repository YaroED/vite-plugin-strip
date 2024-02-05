import { Plugin } from 'vite'

interface VitePluginStripOptions {
  /**
   * 是否启用插件所有功能
   * @default true
   */
  enabled?: boolean

  /**
   * 判断 location.host 是否在 domainList 中，如果是，它将覆盖默认的 console.log 函数，在调用时不执行任何操作
   * @default []
   */
  domainList?: string[]

  /**
   * 开始标记
   * @default 'devBlock:start'
   * @example
   *
   * ```ts
   * // devBlock:start
   * console.log('start')
   * // devBlock:end
   * OR
   * /* devBlock:start * /
   * console.log('start')
   * /* devBlock:end * /
   * ```
   */
  start?: string

  /**
   * 结束标记
   * @default 'devBlock:end'
   */
  end?: string
  enable?: () => void
}

const regexCharsRegex = /[-[\]{}()*+?.,\\^$\\/|#]/g

const escapeRegexChars = (comment?: string) => {
  return comment && regexCharsRegex.test(comment) ? comment.replace(regexCharsRegex, '\\$&') : comment
}

const DEFAULT_OPTIONS: VitePluginStripOptions = {
  enabled: true,
  domainList: [],
  start: 'devBlock:start',
  end: 'devBlock:end'
}

const stripPlugin = (options: VitePluginStripOptions): Plugin => {
  const normalizedOptions: VitePluginStripOptions = {
    ...DEFAULT_OPTIONS,
    ...options
  }
  return {
    name: 'vite-plugin-strip',
    enforce: 'pre',
    transform(code, id) {
      // if not enabled then bypass is not 'js, jsx, ts, tsx' file then bypass
      if (!normalizedOptions.enabled || !/\.([jt]sx?)$/.test(id)) {
        return code
      }

      // Check if the current file is an entry file
      if (/\/src\/main\.(js|ts)/.test(id)) {
        // Insert a line of code at the ending of the code to check if the current domain is in the domainList and disable console.log if true
        const domainList = normalizedOptions.domainList
        if (Array.isArray(domainList) && domainList.length > 0) {
          const disableStr = JSON.stringify(domainList)
          code = `${code}\n if (${disableStr}.indexOf(location.host) !== -1) { console.log = function () {} }`
        }
      }

      const startComment = escapeRegexChars(normalizedOptions.start)
      const endComment = escapeRegexChars(normalizedOptions.end)

      const startWhitespaceMatcher = ''
      const endWhitespaceMatcher = ''

      const regexPattern = new RegExp(
        startWhitespaceMatcher +
          '\\/\\* ?' +
          startComment +
          ' ?\\*\\/[\\s\\S]*?\\/\\* ?' +
          endComment +
          ' ?\\*\\/' +
          endWhitespaceMatcher,
        'g'
      )

      return code.replace(regexPattern, '')
    }
  }
}

export default stripPlugin
