const { spawn } = require('child_process');

module.exports = function(cmd, stdio = 'inherit') {
  const splitted = cmd.split(' ');
  const command = splitted.shift();
  return new Promise((resolve, reject) => {
    const process = spawn(command, splitted, { stdio });
    process.on('error', reject);
    process.on('close', resolve);
  });
}
