A proof of concept of web3 (Ethereum Dapps) integration with react-native to enable the interaction of decentralized applications on the ethereum main network (via infura).

This is a barebones example of web3 implementation and simply logs the amount for any wallet in the console.

##Web3 CRNA Proof of Concept
Using '"web3": "^0.19.1"', I was able to "port" the node.js library over to react native. Currently it uses the infura HttpProvider. It would be great to implement a local light node in the future (to avoid issues regarding DNS attacks, proxies, etc).

##'Usage'
1. 'yarn install' or 'npm install'
2. 'yarn start' or 'npm start'

### 'Not tested for production & disclaimer'
I would not use 'web3' and this project in production without conducting regression testing. In addition, by downloading my software, you agree there exists absolutely no warranty and the developer in use of the software is liable for any consequences.

##License
Copyright 2017 Mogen Cheng

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.