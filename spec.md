# 技術規格文件 (spec.md)

## 專案概述
使用 Vanilla JavaScript、SCSS 和 Vite 建立的簡易登入系統網站。包含登入頁面和登入後的歡迎頁面。

## 系統流程圖 (Flow Chart)

```
開始
  ↓
載入登入頁面
  ↓
使用者輸入帳號密碼
  ↓
驗證表單 → 失敗 → 顯示錯誤訊息 → 返回輸入
  ↓ 成功
儲存登入狀態 (LocalStorage)
  ↓
導向歡迎頁面
  ↓
顯示使用者資訊
  ↓
登出 → 清除登入狀態 → 返回登入頁面
  ↓
結束
```

## 循序圖 (Sequence Diagram)

```
使用者 -> 登入頁面: 訪問網站
登入頁面 -> 使用者: 顯示登入表單

使用者 -> 登入頁面: 輸入帳號密碼並提交
登入頁面 -> 驗證模組: 驗證表單資料
驗證模組 -> 驗證模組: 檢查帳號密碼格式
驗證模組 -> 驗證模組: 模擬登入驗證

Alt: 驗證失敗
  驗證模組 -> 登入頁面: 回傳錯誤訊息
  登入頁面 -> 使用者: 顯示錯誤提示

Alt: 驗證成功
  驗證模組 -> 儲存模組: 儲存登入狀態
  儲存模組 -> LocalStorage: 寫入使用者資料
  登入頁面 -> 歡迎頁面: 導向頁面
  歡迎頁面 -> 儲存模組: 讀取使用者資料
  儲存模組 -> LocalStorage: 取得使用者資料
  歡迎頁面 -> 使用者: 顯示歡迎訊息
```

## 類別圖/物件關聯圖 (Class/ER Diagram)

```
┌─────────────────────┐
│   AuthManager       │
├─────────────────────┤
│ - currentUser       │
├─────────────────────┤
│ + login()           │
│ + logout()          │
│ + isAuthenticated() │
│ + getCurrentUser()  │
└─────────────────────┘
         ↓
┌─────────────────────┐
│   StorageManager    │
├─────────────────────┤
│ + save()            │
│ + get()             │
│ + remove()          │
│ + clear()           │
└─────────────────────┘

┌─────────────────────┐
│   FormValidator     │
├─────────────────────┤
│ + validateEmail()   │
│ + validatePassword()│
│ + validateForm()    │
└─────────────────────┘

┌─────────────────────┐
│   Router            │
├─────────────────────┤
│ + navigate()        │
│ + getCurrentPage()  │
└─────────────────────┘

┌─────────────────────┐
│   User (Data)       │
├─────────────────────┤
│ - username          │
│ - email             │
│ - loginTime         │
└─────────────────────┘
```

## API 規格定義

由於本專案為純前端應用，不涉及後端 API。所有驗證在前端進行模擬。

### 模擬登入驗證規則
- **帳號格式**: 電子郵件格式 (example@domain.com)
- **密碼格式**: 至少 6 個字元
- **測試帳號**:
  - Email: `test@example.com`
  - Password: `123456`

## 資料結構設計

### LocalStorage 儲存結構

```javascript
{
  "isAuthenticated": true,
  "user": {
    "email": "test@example.com",
    "username": "測試使用者",
    "loginTime": "2025-11-11T05:40:00.000Z"
  }
}
```

### 表單驗證錯誤訊息

```javascript
{
  "email": {
    "required": "請輸入電子郵件",
    "invalid": "電子郵件格式不正確"
  },
  "password": {
    "required": "請輸入密碼",
    "minLength": "密碼至少需要 6 個字元"
  }
}
```

## 模組架構說明

### 目錄結構

```
foo-bar/
├── index.html              # 登入頁面
├── welcome.html            # 歡迎頁面
├── vite.config.js          # Vite 設定檔
├── package.json            # 專案設定檔
├── src/
│   ├── scripts/
│   │   ├── auth.js         # 認證管理模組
│   │   ├── storage.js      # 儲存管理模組
│   │   ├── validator.js    # 表單驗證模組
│   │   ├── router.js       # 路由管理模組
│   │   ├── login.js        # 登入頁面邏輯
│   │   └── welcome.js      # 歡迎頁面邏輯
│   └── styles/
│       ├── main.scss       # 主要樣式
│       ├── _variables.scss # 變數定義
│       ├── _mixins.scss    # Mixin 定義
│       ├── login.scss      # 登入頁面樣式
│       └── welcome.scss    # 歡迎頁面樣式
├── public/                 # 靜態資源
├── dist/                   # 建置輸出目錄
├── spec.md                 # 技術規格文件
├── todolist.md             # 任務清單
├── report.md               # 完成報告
└── README.md               # 專案說明文件
```

### 核心模組說明

#### 1. auth.js - 認證管理模組
- 負責處理登入、登出功能
- 管理使用者認證狀態
- 提供當前使用者資訊

#### 2. storage.js - 儲存管理模組
- 封裝 LocalStorage 操作
- 提供資料存取介面
- 處理資料序列化與反序列化

#### 3. validator.js - 表單驗證模組
- 驗證電子郵件格式
- 驗證密碼強度
- 提供表單驗證回饋

#### 4. router.js - 路由管理模組
- 處理頁面導向
- 檢查認證狀態
- 保護需認證頁面

#### 5. login.js - 登入頁面邏輯
- 處理登入表單提交
- 顯示驗證錯誤訊息
- 導向歡迎頁面

#### 6. welcome.js - 歡迎頁面邏輯
- 顯示使用者資訊
- 處理登出功能
- 認證檢查與導向

## 樣式設計規範

### 設計系統

#### 色彩配置
- 主色調: `#4F46E5` (靛藍色)
- 次要色: `#10B981` (綠色)
- 背景色: `#F9FAFB` (淺灰)
- 文字色: `#111827` (深灰)
- 錯誤色: `#EF4444` (紅色)

#### 字體設定
- 主要字體: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- 基礎字級: 16px
- 標題字級: 24px, 20px, 18px

#### 間距系統
- 基礎單位: 4px
- 間距倍數: 1x(4px), 2x(8px), 3x(12px), 4x(16px), 6x(24px), 8x(32px)

#### 響應式設計
- 行動裝置: < 768px
- 平板裝置: 768px - 1024px
- 桌面裝置: > 1024px

## 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 效能考量

- 使用 Vite 進行快速開發與建置
- CSS 模組化，避免全域污染
- JavaScript 模組化，按需載入
- 最小化依賴，減少套件大小

## 安全性考量

- 前端表單驗證（注意：實際應用需後端驗證）
- 避免 XSS 攻擊（不使用 innerHTML）
- LocalStorage 僅儲存非敏感資訊
- 實際應用需搭配後端 JWT 或 Session 認證

## 開發流程

1. 初始化專案結構
2. 建立核心模組
3. 實作登入頁面
4. 實作歡迎頁面
5. 整合樣式系統
6. 測試功能
7. 優化程式碼
8. 撰寫文檔
