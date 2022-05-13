/* eslint-disable @typescript-eslint/ban-ts-comment */
import App from './App.svelte'
import 'virtual:windi.css'
import './global.css'

const app = new App({
  // @ts-ignore
  target: document.getElementById('app')
})

export default app
