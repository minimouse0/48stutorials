const socket=new WebSocket("wss://frp-now.top:34939")
socket.onopen = function(event) {
    console.log('Connection opened', event);
    // 可以在这里发送数据
    socket.send('Hello Server!');
};
