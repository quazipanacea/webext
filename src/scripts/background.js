import ext from "./utils/ext";

console.log("fooooo");

ext.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "perform-save") {
    console.log("Extension Type: ", "/* @echo extension */");
    console.log("PERFORM AJAX", request.data);

    sendResponse({ action: "saved" });
  }
});
