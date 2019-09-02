const { exec } = require('child_process');

module.exports = function(cmd) {
  return new Promise((resolve, reject) => {
    const process = exec(cmd);
    process.stdout.on('data', console.log);
    process.on('error', reject);
    process.on('close', resolve);
  });
}
