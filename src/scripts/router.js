/**
 * 路由管理模組
 * 用途：處理頁面導向與路由保護
 */

import { isAuthenticated } from './auth.js';

/**
 * 導向到指定頁面
 * @param {string} path - 目標頁面路徑
 */
export function navigate(path) {
  window.location.href = path;
}

/**
 * 檢查並保護需要認證的頁面
 * 如果使用者未登入，自動導向登入頁面
 * @param {string} loginPath - 登入頁面路徑（預設為 '/index.html'）
 */
export function requireAuth(loginPath = '/index.html') {
  if (!isAuthenticated()) {
    navigate(loginPath);
  }
}

/**
 * 檢查已登入使用者是否訪問登入頁
 * 如果已登入，自動導向歡迎頁面
 * @param {string} welcomePath - 歡迎頁面路徑（預設為 '/welcome.html'）
 */
export function redirectIfAuthenticated(welcomePath = '/welcome.html') {
  if (isAuthenticated()) {
    navigate(welcomePath);
  }
}

/**
 * 取得當前頁面路徑
 * @returns {string} - 當前頁面路徑
 */
export function getCurrentPage() {
  return window.location.pathname;
}
