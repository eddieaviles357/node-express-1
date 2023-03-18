const axios = require('axios');
const fs = require('fs');
const fsp = require('fs/promises')

let path = process.argv[2];

if(!path) process.exit(1);
// seperate \n character 
let fileData = fs.readFileSync( path, 'utf-8', (err, data) => err ? process.kill(1) : data ).split('\n');

// loop through urls in file
// extract hostname from urls
// use the hostname as file name
// save data to the file
fileData.map( async(url) => {
    try {
        let hostname = new URL(url).hostname;
        let {data} = await axios.get(url)
        await fsp.writeFile(hostname, data);
        
    } catch (error) {
        console.log(`${url} is not a valid URL`)
    }
});