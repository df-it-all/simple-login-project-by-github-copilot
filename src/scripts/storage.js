/**
 * 儲存管理模組
 * 用途：封裝 LocalStorage 操作，提供資料存取介面
 */

const STORAGE_PREFIX = 'foo-bar-';

/**
 * 儲存資料到 LocalStorage
 * @param {string} key - 儲存鍵名
 * @param {any} value - 要儲存的值（會自動序列化為 JSON）
 * @returns {boolean} - 儲存是否成功
 */
export function save(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(STORAGE_PREFIX + key, serializedValue);
    return true;
  } catch (error) {
    console.error('儲存資料失敗:', error);
    return false;
  }
}

/**
 * 從 LocalStorage 取得資料
 * @param {string} key - 儲存鍵名
 * @param {any} defaultValue - 預設值（當資料不存在時返回）
 * @returns {any} - 取得的資料（自動反序列化）
 */
export function get(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('讀取資料失敗:', error);
    return defaultValue;
  }
}

/**
 * 從 LocalStorage 移除指定資料
 * @param {string} key - 要移除的鍵名
 * @returns {boolean} - 移除是否成功
 */
export function remove(key) {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
    return true;
  } catch (error) {
    console.error('移除資料失敗:', error);
    return false;
  }
}

/**
 * 清除所有應用程式的 LocalStorage 資料
 * @returns {boolean} - 清除是否成功
 */
export function clear() {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(STORAGE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    return true;
  } catch (error) {
    console.error('清除資料失敗:', error);
    return false;
  }
}
