const WebSocket = require('ws');

module.exports = (function () {
    let ws = null;
    let _messageHandler = (message) => { console.warn('messageHandler not defined')};

    const handlers = {
        open : () => {
            console.log('open server');
            ws.send(`{"command":"subscribe","channel":"1002"}`);
        },
        message: (message) => {
            _messageHandler(message);
            //console.log('message',message)
        }
    };

    const reconnect = () => {
        console.log('reconnecting...');
        setTimeout(connect, 100);
    };

    const connect = () => {
        ws = new WebSocket('wss://api2.poloniex.com');
        ws.on('open', handlers.open);
        ws.on('message', handlers.message);
        ws.on('close', reconnect);
    };

    return {
        set attachOnMessageHandler(messageHandler){
            _messageHandler = messageHandler;
        },
        connect,
        get getClient(){
            return ws;
        }
    }
})();


