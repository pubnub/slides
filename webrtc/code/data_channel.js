var peerConnection = new RTCPeerConnection();

var dataChannel = peerConnection.createDataChannel("myLabel");

dataChannel.onerror = function (err) {
  console.log("Channel Error:", err);
};

dataChannel.onmessage = function (event) {
  console.log("Got Message:", event.data);
};

dataChannel.send("Hello World!");
