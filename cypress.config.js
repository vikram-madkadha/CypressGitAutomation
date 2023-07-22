const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kv8h9f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/*.js'
  },
});
