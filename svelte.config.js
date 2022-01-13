import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          'components': resolve('./src/components'),
        },
      },
    },
  },
}

export default config
