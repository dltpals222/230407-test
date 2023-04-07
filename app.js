import http from 'http'
import fs from 'fs'
import path, { resolve } from 'path'
import dateTime from './dateTime.js'

class Server {
  constructor(data){
    this.data = data
  }

  get clockinit(){
    `${date}`
  }


  start(){
    http.createServer((req,res)=>{
      const url = req.url;
      const method = req.method;
      console.log(url);

      fs.readFile(path.join(resolve(),'index.html'),(data,err) => {
        if(err){
          res.writeHead(500, {'content-type':'text/html; charset=utf-8'});
          res.write('500 인터넷에 문제가 있습니다');
          res.end();
        } else {
          res.writeHead(200, {'content-type':'text.html; charset=utf-8'})
          res.end(data)
        }
      })//fs.readFile끝
    }).listen(3050, (err) => {
      if(err){
        console.error('3050포트 에러',err)
      } else {
        console.log('3050 포트 정상작동중')
      }
    }) //httpcreateserver 끝
  } //start 끝
} //server 끝

const server = new Server(123);
server.start();