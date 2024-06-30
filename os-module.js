const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
const systemUptime = os.uptime();
console.log("The system uptime is", systemUptime, "in seconds");

// Info about the current system os
const currentOS = {
  name: os.type(),
  username: os.userInfo().username,
  release: os.release(),
  system_uptime: os.uptime(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
