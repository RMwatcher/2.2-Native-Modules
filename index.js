const fs = require("fs");

// write message into message.txt
// fs.writeFile("message.txt", "Hello again from Node.js", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

// read what's on message.txt instead of writing in message.txt
fs.readFile("message.txt", "utf-8", (err, data) =>{
    if (err) throw err;
    console.log(data);
});