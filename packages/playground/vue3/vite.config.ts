import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Strip from 'vite-plugin-strip'

export default defineConfig({
  plugins: [Vue(), VueJsx(), Strip({})]
})
