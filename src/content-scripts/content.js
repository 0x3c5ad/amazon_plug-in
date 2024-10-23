// 模拟发送信号的集合
const signals = [
    { action: "syncOrders" },
    { action: "syncAddresses" },
];

function sendSignal() {
    const signal = signals[Math.floor(Math.random() * signals.length)];
    console.log(`发送信号: ${signal.action}`);

    // 发送消息给后台脚本
    chrome.runtime.sendMessage({ action: signal.action }, (response) => {
        if (chrome.runtime.lastError) {
            console.error("发送消息失败:", chrome.runtime.lastError.message);
        } else {
            console.log("响应:", response.status);
        }
    });
}

// 每隔5秒发送一次信号
setInterval(() => {
    console.log("发送信号...");
    sendSignal();
}, 5000);
