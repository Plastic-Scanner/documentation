/* 
    Configuration overrides for staging version of documentation
    nextdocs.plasticscanner.com
*/

const config = require('./docusaurus.config.production')

config.title   = '(STAGING) Plastic Scanner documentation',
config.tagline = 'Making it simple to work on the plastic scanner',
config.url     = 'https://nextdocs.plasticscanner.com',
config.baseUrl = '/',
config.onBrokenLinks = 'throw',
config.onBrokenMarkdownLinks = 'warn',
config.favicon = '/img/favicon.ico',
config.organizationName = 'Plastic-Scanner',        // Usually your GitHub org/user name.
config.projectName      = 'documentation-next',     // Usually your repo name.

module.exports = config;