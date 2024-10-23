const syncAddresses = document.getElementById("syncAddresses");
const syncOrders = document.getElementById("syncOrders");



syncOrders.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "syncOrders" });
});

syncAddresses.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "syncAddresses" });
});
