import path from 'node:path'
import url from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

export default (new FlatCompat({
  baseDirectory: path.dirname(url.fileURLToPath(import.meta.url)),
}).config({
  extends: [
    'next/core-web-vitals'
  ],
}))
