const path = require('path')
const ROOT =path.resolve(__dirname,'..');
const Dist =path.resolve(ROOT,'dist');
const Isomorphic =path.resolve(Dist,'assets');
const Build =path.resolve(Dist,'build');
const nodeModules =path.resolve(ROOT,'node_modules');
const Client =path.resolve(ROOT,'src','client');
const Server =path.resolve(ROOT,'src','server');
const Styles =path.resolve(Client,'static','styles');
const APP =path.resolve(Client,'client.js');
const Views =path.resolve(Server,'views');


const configPath = {
  ROOT: ROOT,
  app: APP,
  client: Client,
  build: Build,
  style: [path.resolve(Styles, 'Main.scss')],
  isomorphic: Isomorphic,
  views: Views
}



module.exports= configPath
