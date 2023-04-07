import http from 'http'
import fs from 'fs'
import url from 'url'

function serverReadFile (res, path, contenttype, resCode){
  fs.readFile(path,(err,data) => {
    if(err){
      res.writeHead(500, {'content-type':'text/html; charset=utf-8'});
      res.write('500 인터넷에 문제가 있습니다');
      res.end();
    } else {
      res.writeHead(resCode, {'content-type':`${contenttype}; charset=utf-8`});
      res.write(data);
      res.end();
    }
})}


class Server {
  constructor(port){
    this.port = port
  }

  start(){
    http.createServer((req,res)=>{
      const serverurl = url.parse(req.url, true);
      const urlPathName = serverurl.pathname;
      
      switch(urlPathName){
        case '/':
          serverReadFile(res,'index.html','text/html',200);
        break;
        case '/index.js':
          serverReadFile(res,'index.js','text/javascript',200);
        break;
        case '/favicon.ico':
          err => {if(err){throw err}};
        break;
        default:
          console.log(serverurl);
        break;
      }
    
    }).listen(this.port, err => {
      if(err){
          console.error('3050포트 에러',err);
        } else {
          console.log('3050 포트 정상작동중');
        };
    });
    
  };
};

const server = new Server(3050);
server.start();
