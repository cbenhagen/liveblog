module.exports = {
    options: {
          keepAlive: true,
          noColor: false,
          args: {}
        },
        mock: {
          options: {
            configFile: "protractor-conf.js",
            args: {}
          }
        },
        performance: {
          options: {
            configFile: "protractor-performance-conf.js",
            args: {}
          }
        }
};
