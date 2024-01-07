const http = require('http');
const app = require('../index'); // Import your server

describe('Server', () => {
    let server;
  
    beforeAll((done) => {
      server = http.createServer(app);
      server.listen(done); // Start server
    }, 10000);
  
    afterAll((done) => {
      server.close(done); // Close server after tests
    }, 10000);
  
    test('server is running', () => {
      expect(server.listening).toBe(true);
    }, 10000);
  
    test('responds to / with status 200', (done) => {
        http.get({ port: server.address().port }, (res) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      }, 10000);
  });