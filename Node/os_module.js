const { log } = require("console"); //Autamically Created by Javascript
const os = require("os");

let mySystemArch = os.arch();
// console.log(mySystemArch);

let myCPUinfo = os.cpus();
// console.log(myCPUinfo);

let hostName = os.hostname();
// console.log(hostName);

let networkINFO = os.networkInterfaces();
// console.log(networkINFO);

// Returns the operating system as a string
let operatingsystem = os.release();
// console.log(operatingsystem);

// Returns the total memory of the system memory as an integer
let TotalMemory = os.totalmem();
// console.log(TotalMemory);

// Returns the system uptime in number of seconds
console.log(os.uptime());

// Returns information about the currently effective user
console.log(os.userInfo());

// Returns the operating system's default directory for temporary files as a string
console.log(os.tmpdir());
