import Index from '@/pages/Index.svelte'
import type { WrappedComponent } from 'svelte-spa-router'
import { wrap } from 'svelte-spa-router/wrap'

export type SimpleUserData = {
  title?: string
  noLogin?: boolean
  needLogin?: boolean
  [name: string]: any
}

export type AndSimpleUserData = {
  userData?: SimpleUserData
}

export type RouterPaths = {
  [path: string]: WrappedComponent & AndSimpleUserData
}

const rr: RouterPaths = {
  '/': wrap({
    component: Index,
    userData: {
      title: 'Home'
    }
  }),
  '/size': wrap({
    asyncComponent: () => import('@/pages/KeySize.svelte'),
    userData: {
      title: 'Key Sizes'
    }
  }),
  '/2': wrap({
    asyncComponent: () => import('@/pages/Page2.svelte'),
    userData: {
      title: 'Page 2'
    }
  }),
}

export const routes = rr