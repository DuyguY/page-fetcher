const request = require('request');
const fs = require('fs');
let content = process.argv.slice(2);

let url = content[0]
let path = content[1]


request(url, (error, response, body) => {
  
  if (!error){
    fs.writeFile(path, body,(errorFile)=> {
        if (!errorFile){
            console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}`)
        }
        else{
            console.log("error relatives writing to file" + errorFile)
        }
    })
  }
  else{
      console.log("error relatives http req" + error)
  }
});  