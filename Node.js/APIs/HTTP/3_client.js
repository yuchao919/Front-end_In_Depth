const http = require('http');

const options = {
  hostname: 'localhost',
  port: 8080,
  method: 'GET'
};

const req = http.request(options, res => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', chunk => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', e => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write('I am a fish.');
req.end();
