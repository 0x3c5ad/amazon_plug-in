// apiRequest.js
const API_BASE_URL = 'https://xxx/api';  // 后端API基础URL

export async function apiRequest(endpoint, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API请求错误:', error);
        throw error;
    }
}
