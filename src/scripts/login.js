/**
 * 登入頁面邏輯
 * 用途：處理登入頁面的互動與邏輯
 */

import { login } from './auth.js';
import { validateLoginForm } from './validator.js';
import { navigate, redirectIfAuthenticated } from './router.js';

/**
 * 初始化登入頁面
 */
function init() {
  // 如果已登入，導向歡迎頁面
  redirectIfAuthenticated();
  
  // 取得表單元素
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitBtn = document.getElementById('submitBtn');
  
  // 監聽表單提交
  form.addEventListener('submit', handleSubmit);
  
  // 監聽輸入變化以清除錯誤訊息
  emailInput.addEventListener('input', () => clearError('email'));
  passwordInput.addEventListener('input', () => clearError('password'));
}

/**
 * 處理表單提交
 * @param {Event} event - 表單提交事件
 */
function handleSubmit(event) {
  event.preventDefault();
  
  // 清除所有錯誤訊息
  clearAllErrors();
  
  // 取得表單資料
  const formData = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };
  
  // 驗證表單
  const validation = validateLoginForm(formData);
  
  if (!validation.valid) {
    // 顯示驗證錯誤
    showErrors(validation.errors);
    return;
  }
  
  // 執行登入
  const result = login(formData.email, formData.password);
  
  if (result.success) {
    // 登入成功，導向歡迎頁面
    navigate('/welcome.html');
  } else {
    // 登入失敗，顯示錯誤訊息
    showError('password', result.message);
  }
}

/**
 * 顯示多個欄位的錯誤訊息
 * @param {object} errors - 錯誤訊息物件
 */
function showErrors(errors) {
  Object.keys(errors).forEach(field => {
    showError(field, errors[field]);
  });
}

/**
 * 顯示單一欄位的錯誤訊息
 * @param {string} field - 欄位名稱
 * @param {string} message - 錯誤訊息
 */
function showError(field, message) {
  const errorElement = document.getElementById(`${field}Error`);
  const inputElement = document.getElementById(field);
  
  if (errorElement && inputElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
    inputElement.classList.add('error');
  }
}

/**
 * 清除單一欄位的錯誤訊息
 * @param {string} field - 欄位名稱
 */
function clearError(field) {
  const errorElement = document.getElementById(`${field}Error`);
  const inputElement = document.getElementById(field);
  
  if (errorElement && inputElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
    inputElement.classList.remove('error');
  }
}

/**
 * 清除所有錯誤訊息
 */
function clearAllErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  const inputElements = document.querySelectorAll('input.error');
  
  errorElements.forEach(element => {
    element.textContent = '';
    element.classList.remove('show');
  });
  
  inputElements.forEach(element => {
    element.classList.remove('error');
  });
}

// 當 DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', init);
