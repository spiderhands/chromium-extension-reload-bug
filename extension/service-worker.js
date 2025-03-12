console.log(
  "This prints to the console of the service worker (background script)"
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in service worker:", message);

  if (message.action === "reloadRuntime") {
    console.log("Reloading runtime...");

    // Reload the extension runtime
    // This is causing the bug
    chrome.runtime.reload();

    sendResponse({ success: true, message: "Runtime reload initiated" });
    return true;
  }

  // For unhandled messages
  sendResponse({ success: false, message: "Unknown action" });
  return false;
});
