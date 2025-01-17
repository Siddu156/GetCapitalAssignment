// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // config.env = config.env[process.env.NODE_ENV];
  config.env = require('../../config/preprod.json');
  config.baseUrl = config.env.host;
  config.defaultCommandTimeout = 60000;
  on('task', {
    log (message) {
      console.log(message)
      return null
    }
  })

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--disable-dev-shm-usage')
    }

    return launchOptions
  })
  return config;
}