// 初始化插件安装时的状态
chrome.storage.local.set({
    base_url: "https://20tools.net",
});

// 接收信号后操作
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "syncAddresses") {
        console.log("同步亚马逊地址");
        sendResponse({ status: "已同步亚马逊地址" });
    }

    if (request.action === "syncOrders") {
        console.log("同步亚马逊订单");
        sendResponse({ status: "已同步亚马逊订单" });
    }
});
