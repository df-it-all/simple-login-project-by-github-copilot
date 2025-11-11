/**
 * 認證管理模組
 * 用途：處理使用者登入、登出及認證狀態管理
 */

import { save, get, remove } from './storage.js';

const AUTH_KEY = 'auth';
const USER_KEY = 'user';

// 測試用帳號密碼
const TEST_CREDENTIALS = {
  email: 'test@example.com',
  password: '123456'
};

/**
 * 執行登入
 * @param {string} email - 使用者電子郵件
 * @param {string} password - 使用者密碼
 * @returns {object} - 登入結果 { success: boolean, message: string, user?: object }
 */
export function login(email, password) {
  // 模擬登入驗證（實際應用應由後端處理）
  if (email === TEST_CREDENTIALS.email && password === TEST_CREDENTIALS.password) {
    const user = {
      email: email,
      username: '測試使用者',
      loginTime: new Date().toISOString()
    };

    // 儲存認證狀態
    save(AUTH_KEY, { isAuthenticated: true });
    save(USER_KEY, user);

    return {
      success: true,
      message: '登入成功',
      user: user
    };
  }

  return {
    success: false,
    message: '帳號或密碼錯誤'
  };
}

/**
 * 執行登出
 * @returns {boolean} - 登出是否成功
 */
export function logout() {
  remove(AUTH_KEY);
  remove(USER_KEY);
  return true;
}

/**
 * 檢查使用者是否已登入
 * @returns {boolean} - 是否已登入
 */
export function isAuthenticated() {
  const auth = get(AUTH_KEY);
  return auth && auth.isAuthenticated === true;
}

/**
 * 取得當前登入的使用者資訊
 * @returns {object|null} - 使用者資訊物件，未登入時返回 null
 */
export function getCurrentUser() {
  if (!isAuthenticated()) {
    return null;
  }
  return get(USER_KEY);
}
