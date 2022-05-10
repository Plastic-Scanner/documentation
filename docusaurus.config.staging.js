/* 
    Configuration overrides for staging version of documentation
    nextdocs.plasticscanner.com
*/

const config = require('./docusaurus.config.production')

config.title   = '(STAGING) Plastic Scanner documentation',
config.tagline = 'Making it simple to work on the plastic scanner',
config.url     = 'https://nextdocs.plasticscanner.com',
config.baseUrl = '/',
config.organizationName = 'Plastic-Scanner',        // Usually your GitHub org/user name.
config.projectName      = 'documentation',     // Usually your repo name.

module.exports = config;