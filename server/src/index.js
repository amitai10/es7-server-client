import http from 'http';

var promise = new Promise(function(resolve, reject) {
  setTimeout(function(){
  resolve();
  }, 5000);
});

function getValue() {

  return new Promise(function(resolve, reject) {
   
   setTimeout(() => {
    console.log("in timeout");
     resolve(33)
   },5000)
  });
  // return 45;
}

async function getMsg() {
  var ret = await getValue();
  console.log('The value is:', ret);
  return ret
}


http.createServer((req, res) => {
let val = getMsg();
val.then((ret) => {
  console.log("after promise");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`${ret}\n`);
});

 
}).listen(3000, '127.0.0.1');

console.log("Server running on 3000");