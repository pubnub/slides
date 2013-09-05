(function () {
  var pubnub = null;

  var next = document.querySelector("#next"),
      previous = document.querySelector("#previous"),
      pubKey = document.querySelector("#publish-key");

  function initPubNub() {
    if (!pubnub) {
      pubnub = PUBNUB.init({
        publish_key: pubKey.value,
        subscribe_key: 'sub-c-4c782460-ced1-11e2-9fea-02ee2ddab7fe'
      });
    }
  };

  // Next click handler
  next.addEventListener('click', function (event) {
    initPubNub();

    var message = {
      command: 'next'
    };
    message = JSON.stringify(message);

    pubnub.publish({
      channel: 'slides',
      message: message
    });
  });

  // Previous click handler
  previous.addEventListener('click', function (event) {
    initPubNub();

    var message = {
      command: 'previous'
    };
    message = JSON.stringify(message);

    pubnub.publish({
      channel: 'slides',
      message: message
    });
  });

  pubKey.addEventListener("change", function (event) {
    localStorage["publish-key"] = pubKey.value;
  });

  if (localStorage["publish-key"]) {
    pubKey.value = localStorage["publish-key"];
  }
})();
