// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    buildAssetsDir: 'nuxtAssets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      title: 'Niko Chaffin | Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    },
  },
  experimental: {
    payloadExtraction: false, // Can't load the _payload.json file, so disable it
  },
  nitro: {
    serveStatic: true,
  },
})