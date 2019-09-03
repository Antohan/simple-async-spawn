const { spawn } = require('child_process');

module.exports = function(cmd) {
  const splitted = cmd.split(' ');
  const command = splitted.shift();
  return new Promise((resolve, reject) => {
    const childProcess = spawn(command, splitted, { stdio: 'inherit'});
    childProcess.on('error', reject);
    childProcess.on('close', exitCode => {
      if (exitCode !== 0) {
        reject(new Error(`Child process was closed with code: ${exitCode}`));
      }
      resolve();
    });
  });
}
