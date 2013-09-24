// Listen for events
PUBNUB.subscribe({
  channel: "my_channel",
  message: function (message) {
    console.log(message);
  }
});