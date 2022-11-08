const http = require('http');
const data = {
    firstName:'Ayush',
    lastName:'Sharma',
    Age:23,
    desig:"Certified Ethical Hacker"
}
const server = http.createServer((req,res)=>{
    res.write('<h1>Details</h1>');
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000);