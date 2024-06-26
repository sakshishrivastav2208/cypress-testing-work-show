const { defineConfig } = require("cypress")
module.exports = defineConfig({
  projectId: "voqoq2",
  e2e: {
    setupNodeEvents(on, config) {},
  },
  defaultCommandTimeout: 400000,
  pageLoadTimeout: 1000000,
  requestTimeout: 50000,
})
