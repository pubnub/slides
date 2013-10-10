(function () {
  function initController() {
    console.log("Connecting controller...");

    var pubnub = PUBNUB.init({
      subscribe_key: 'sub-c-4c782460-ced1-11e2-9fea-02ee2ddab7fe'
    });

    pubnub.subscribe({
      channel: 'slides',
      connect: function () {
        console.log("Controller connected!");
      },
      callback: function (message) {
        var data = JSON.parse(message);
        console.log("Got message", message);

        if (data.command === 'next') {
          window.shower._turnNextSlide();
        } else if (data.command === 'previous') {
          window.shower._turnPreviousSlide();
        }
      }
    });
  };

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 67) {
      initController();
    }
  });
})();