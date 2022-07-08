# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
  
  
### Deploy to production site
the first time you setup the enviroment on your computer you should add the production remote

```
$ git remote add production https://github.com/Plastic-Scanner/documentation-production
```
once you are happy with the development docuementation, you can push it to the production repo
```
$ git push production
```