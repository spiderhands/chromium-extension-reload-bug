document.addEventListener("DOMContentLoaded", function () {
  const reloadButton = document.getElementById("reload-runtime");

  reloadButton.addEventListener("click", function () {
    console.log("Reload Runtime button clicked");

    chrome.runtime.sendMessage(
      { action: "reloadRuntime" },
      function (response) {
        console.log("Response from background script:", response);
      }
    );
  });
});
