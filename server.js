const http = require('http');
const renderContent = require('./routes');

const server = http.createServer(renderContent);

server.listen(3000, () => {
  console.log('Server running at port 3000');
});