# vite-plugin-strip

## 📖 Introduction

vite-plugin-strip is a Vite plugin that allows you to remove or strip specific code from your JavaScript or TypeScript project during the build process. It provides an easy and efficient way to remove unnecessary code, such as console.log statements or debug code, before deploying your application.


## 📦 Installation

```bash

# vite-plugin-strip 

pnpm install vite-plugin-strip -D
# OR
npm install vite-plugin-strip -D

```

## 🦄 Usage

### Configuration Vite

```ts
// devBlock:start
console.log('start')
// devBlock:end

/* devBlock:start */
console.log('start')
/* devBlock:end */

```

```ts
// for Vue3

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Strip from 'vite-plugin-strip'

export default defineConfig({
  plugins: [Vue(), Strip({
    domainList: ['abc.com']
  })],
})
```


### Options


```ts
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
```
