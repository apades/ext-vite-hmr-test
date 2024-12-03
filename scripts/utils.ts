import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

export const port = Number.parseInt(process.env.PORT || '') || 3303
export const r = (...args: string[]) => resolve(dirname(fileURLToPath(import.meta.url)), '..', ...args)
export const isDev = process.env.NODE_ENV !== 'production'
export const isWin = process.platform === 'win32'
export const isFirefox = process.env.FIREFOX === 'true'
export const isSafari = process.env.SAFARI === 'true'
