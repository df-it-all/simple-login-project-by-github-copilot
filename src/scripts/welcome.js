/**
 * 歡迎頁面邏輯
 * 用途：處理歡迎頁面的互動與邏輯
 */

import { logout, getCurrentUser } from './auth.js';
import { navigate, requireAuth } from './router.js';

/**
 * 初始化歡迎頁面
 */
function init() {
  // 檢查認證狀態，未登入則導向登入頁
  requireAuth();
  
  // 載入並顯示使用者資訊
  loadUserInfo();
  
  // 設定登出按鈕事件
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
}

/**
 * 載入並顯示使用者資訊
 */
function loadUserInfo() {
  const user = getCurrentUser();
  
  if (!user) {
    // 如果無法取得使用者資訊，返回登入頁
    navigate('/index.html');
    return;
  }
  
  // 顯示使用者名稱
  const usernameElement = document.getElementById('username');
  if (usernameElement) {
    usernameElement.textContent = user.username;
  }
  
  // 顯示電子郵件
  const emailElement = document.getElementById('userEmail');
  if (emailElement) {
    emailElement.textContent = user.email;
  }
  
  // 顯示登入時間
  const loginTimeElement = document.getElementById('loginTime');
  if (loginTimeElement) {
    loginTimeElement.textContent = formatDateTime(user.loginTime);
  }
}

/**
 * 處理登出功能
 */
function handleLogout() {
  // 執行登出
  const success = logout();
  
  if (success) {
    // 登出成功，導向登入頁
    navigate('/index.html');
  }
}

/**
 * 格式化日期時間
 * @param {string} isoString - ISO 格式的日期時間字串
 * @returns {string} - 格式化後的日期時間字串
 */
function formatDateTime(isoString) {
  const date = new Date(isoString);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 當 DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', init);
