/**
 * 表單驗證模組
 * 用途：提供表單欄位驗證功能
 */

/**
 * 驗證電子郵件格式
 * @param {string} email - 要驗證的電子郵件地址
 * @returns {object} - 驗證結果 { valid: boolean, message: string }
 */
export function validateEmail(email) {
  if (!email || email.trim() === '') {
    return {
      valid: false,
      message: '請輸入電子郵件'
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      valid: false,
      message: '電子郵件格式不正確'
    };
  }

  return {
    valid: true,
    message: ''
  };
}

/**
 * 驗證密碼格式
 * @param {string} password - 要驗證的密碼
 * @returns {object} - 驗證結果 { valid: boolean, message: string }
 */
export function validatePassword(password) {
  if (!password || password.trim() === '') {
    return {
      valid: false,
      message: '請輸入密碼'
    };
  }

  if (password.length < 6) {
    return {
      valid: false,
      message: '密碼至少需要 6 個字元'
    };
  }

  return {
    valid: true,
    message: ''
  };
}

/**
 * 驗證登入表單
 * @param {object} formData - 表單資料 { email: string, password: string }
 * @returns {object} - 驗證結果 { valid: boolean, errors: object }
 */
export function validateLoginForm(formData) {
  const errors = {};
  let valid = true;

  // 驗證電子郵件
  const emailResult = validateEmail(formData.email);
  if (!emailResult.valid) {
    errors.email = emailResult.message;
    valid = false;
  }

  // 驗證密碼
  const passwordResult = validatePassword(formData.password);
  if (!passwordResult.valid) {
    errors.password = passwordResult.message;
    valid = false;
  }

  return {
    valid,
    errors
  };
}
