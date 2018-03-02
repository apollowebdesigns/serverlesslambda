const launch = require('@serverless-chrome/lambda')

const handler = require('./v85za31jcep___version.js')
const options = {"flags":["--window-size=1280x1696","--hide-scrollbars"],"chromePath":"/var/task/headless-chromium"}

module.exports.default = function ensureHeadlessChrome (event, context, callback) {
  (typeof launch === 'function' ? launch : launch.default)(options)
    .then((instance) => {
      handler.default(event, context, callback, instance)
    })
    .catch((error) => {
      console.error(
        'Error occured in serverless-plugin-chrome wrapper when trying to ' +
          'ensure Chrome for default() handler.',
        options,
        error
      )
    })
}