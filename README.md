# Simple async spawn

## Description
Runs given command in child process asynchronously

## Usage:
```javascript
const asyncSpawn = require('simple-async-spawn');

asyncSpawn('npm run build').then(console.log);
```