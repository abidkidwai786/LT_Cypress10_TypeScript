import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.t-mobile.com/',
    experimentalRunAllSpecs: true
    // userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML like Gecko) Mobile/15E148'
  },
})
