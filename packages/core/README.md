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
    disableLogHosts: ['xxx.com']
  })],
})
```


### Options


```ts
interface VitePluginStripOptions {
  /**
   * 是否启用插件
   */
  enabled?: boolean

  /**
   * 判断 当前的域名 是包含在 disableLogHosts 中，则禁用console.log
   */
  disableLogHosts?: string[]

  /**
   * 开始标记
   * @default 'devBlock:start'
   * @example
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
