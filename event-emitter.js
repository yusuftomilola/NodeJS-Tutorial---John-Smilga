const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// console.log(EventEmitter);
// console.log(customEmitter);

customEmitter.on("response", (name, state) => {
  console.log(`data recieved, my name is: ${name}`);
});

customEmitter.on("response", (name, state) => {
  console.log(`different logic here. I live in ${state}`);
});

customEmitter.emit("response", "tomilola", "kaduna");
