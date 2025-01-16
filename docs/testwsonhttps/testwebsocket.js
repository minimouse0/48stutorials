const socket=new WebSocket("ws://192.168.101.96:6848")
socket.onopen = function(event) {
    console.log('Connection opened', event);
    // 可以在这里发送数据
    socket.send('Hello Server!');
};
