const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  // grava vídeo no cypress run
  // opcional
  videosFolder: 'cypress/videos',
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: false,
  videoCompression: 32,
  // videoCompression: 32,      // opcional para comprimir o mp4
  // trashAssetsBeforeRuns: false, // mantém vídeos/screenshots de execuções anteriores
  e2e: {
    baseUrl: 'http://localhost:8000',
    setupNodeEvents(on, config) {
      // listeners
    },
  },
});