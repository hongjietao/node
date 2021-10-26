const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

// fs.readFile('./conf.js', (err, d) => {
//   if (err) throw err;
//   console.log(d.toString());
// });

process.nextTick(async () => {
  const data = await readFile('./conf.js');
  console.log(data.toString());
});
