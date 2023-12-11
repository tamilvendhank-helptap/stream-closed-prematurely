# stream-closed-prematurely

Reproducing of "stream closed prematurely"

## Installation

```
git clone git@github.com:tamilvendhank-helptap/stream-closed-prematurely.git
cd stream-closed-prematurely
npm install
node index.js
```

## Issue

Visit: http://127.0.0.1:3456 

Logs:
```
{"level":30,"time":1702288078487,"pid":52986,"hostname":"***.local","reqId":"req-1","req":{"method":"GET","url":"/","hostname":"127.0.0.1:3456","remoteAddress":"127.0.0.1","remotePort":56162},"msg":"incoming request"}
{"level":30,"time":1702288078494,"pid":52986,"hostname":"***.local","reqId":"req-1","res":{"statusCode":200},"responseTime":6.509459000080824,"msg":"request completed"}
{"level":30,"time":1702288078498,"pid":52986,"hostname":"***.local","reqId":"req-1","res":{"statusCode":200},"msg":"stream closed prematurely"}
```