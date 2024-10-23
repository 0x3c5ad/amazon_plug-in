// src/content-scripts/test.js

// 等待 DOM 完全加载
document.addEventListener('DOMContentLoaded', () => {
    // 获取输入框元素（假设有一个输入框存在）
    const inputField = document.querySelector('input[type="text"]'); // 根据实际情况调整选择器

    // 确保输入框存在
    if (inputField) {
        // 为输入框添加输入事件监听器
        inputField.addEventListener('input', () => {
            const inputValue = inputField.value; // 获取输入框的值
            alert(`输入的内容是: ${inputValue}`); // 弹出输入框内容
        });
    } else {
        console.error('未找到输入框，请检查选择器。');
    }
});
