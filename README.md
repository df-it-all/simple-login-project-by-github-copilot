# 使用 Github Copilot 建置的「登入系統網站」

![](https://img.shields.io/badge/Creator-Github%20Copilot-gray?logo=githubcopilot&logoColor=black&labelColor=white)

使用 Vanilla JavaScript、SCSS 和 Vite 建立的簡易登入系統網站。

## 專案描述與目標

本專案是一個純前端的登入系統示範，展示如何使用現代化的前端工具建立一個簡潔、功能完整的使用者認證介面。主要目標包括：

- 使用原生 JavaScript 實作，不依賴任何 JS 框架
- 採用 SCSS 進行樣式管理，實現模組化的樣式架構
- 使用 Vite 作為建置工具，提供快速的開發體驗
- 實現完整的表單驗證與錯誤處理
- 提供良好的使用者體驗與介面設計

## 專案檔案結構

```
/
├── index.html              # 登入頁面（主要入口）
├── welcome.html            # 歡迎頁面（登入後頁面）
├── vite.config.js          # Vite 設定檔
├── package.json            # 專案設定與依賴管理
├── .gitignore              # Git 忽略檔案設定
├── README.md               # 專案說明文件
├── spec.md                 # 技術規格文件
├── todolist.md             # 任務清單
├── report.md               # 完成報告
├── src/
│   ├── scripts/            # JavaScript 模組目錄
│   │   ├── auth.js         # 認證管理模組
│   │   ├── storage.js      # 儲存管理模組
│   │   ├── validator.js    # 表單驗證模組
│   │   ├── router.js       # 路由管理模組
│   │   ├── login.js        # 登入頁面邏輯
│   │   └── welcome.js      # 歡迎頁面邏輯
│   └── styles/             # SCSS 樣式目錄
│       ├── main.scss       # 主要樣式檔
│       ├── _variables.scss # 變數定義
│       ├── _mixins.scss    # Mixin 定義
│       ├── login.scss      # 登入頁面樣式
│       └── welcome.scss    # 歡迎頁面樣式
├── public/                 # 靜態資源目錄
├── dist/                   # 建置輸出目錄（由 Vite 生成）
└── node_modules/           # npm 套件目錄
```

## 使用的技術棧

### 核心技術
- **JavaScript (ES6+)**: 原生 JavaScript，使用模組化設計
- **SCSS (Sass)**: CSS 預處理器，支援變數、Mixin 等功能
- **Vite**: 現代化前端建置工具

### 開發工具
- **npm**: 套件管理工具
- **Terser**: JavaScript 壓縮工具

### 瀏覽器 API
- **LocalStorage**: 用於儲存使用者登入狀態
- **ES Modules**: 原生 JavaScript 模組系統

## 檔案清單與說明

### HTML 檔案
- **index.html**: 登入頁面，包含登入表單與測試帳號資訊
- **welcome.html**: 歡迎頁面，顯示使用者資訊與登出功能

### JavaScript 模組
- **auth.js**: 認證管理模組，處理登入、登出及認證狀態
- **storage.js**: 儲存管理模組，封裝 LocalStorage 操作
- **validator.js**: 表單驗證模組，提供電子郵件與密碼驗證
- **router.js**: 路由管理模組，處理頁面導向與認證保護
- **login.js**: 登入頁面邏輯，處理表單提交與錯誤顯示
- **welcome.js**: 歡迎頁面邏輯，顯示使用者資訊與登出功能

### SCSS 樣式檔
- **main.scss**: 全域基礎樣式，包含重置樣式與工具類別
- **_variables.scss**: SCSS 變數定義（色彩、字體、間距等）
- **_mixins.scss**: SCSS Mixin 定義（按鈕、輸入框、響應式等）
- **login.scss**: 登入頁面專屬樣式
- **welcome.scss**: 歡迎頁面專屬樣式

### 設定檔案
- **vite.config.js**: Vite 建置工具設定
- **package.json**: npm 專案設定與相依套件
- **.gitignore**: Git 版本控制忽略檔案設定

### 文檔檔案
- **README.md**: 本專案說明文件
- **spec.md**: 技術規格文件，包含流程圖、架構圖、API 規格等
- **todolist.md**: 任務清單，記錄開發進度
- **report.md**: 完成報告，記錄開發過程與問題解決

## 環境需求

- **Node.js**: 版本 18.x 或以上
- **npm**: 版本 9.x 或以上
- **現代瀏覽器**: Chrome、Firefox、Safari、Edge（最新版）

## 安裝步驟

1. 克隆專案到本地：
```bash
git clone https://github.com/df-it-all/foo-bar.git
cd foo-bar
```

2. 安裝相依套件：
```bash
npm install
```

## 執行方式

### 開發模式

啟動開發伺服器，支援熱模組替換（HMR）：

```bash
npm run dev
```

執行後會自動開啟瀏覽器，訪問 `http://localhost:3000`

### 建置專案

建置生產版本：

```bash
npm run build
```

建置結果會輸出到 `dist/` 目錄

### 預覽建置結果

預覽建置後的專案：

```bash
npm run preview
```

## 功能說明

### 登入功能
- 電子郵件與密碼驗證
- 即時表單驗證與錯誤提示
- 測試帳號：
  - Email: `test@example.com`
  - Password: `123456`

### 歡迎頁面
- 顯示使用者資訊（使用者名稱、電子郵件、登入時間）
- 登出功能
- 自動認證檢查

### 路由保護
- 未登入使用者無法訪問歡迎頁面
- 已登入使用者訪問登入頁面會自動導向歡迎頁面

## 測試帳號

```
電子郵件: test@example.com
密碼: 123456
```

## 程式碼規範

- 所有程式碼包含繁體中文函式註解
- 每個函式都有完整的用途、參數、回傳值說明
- 採用 ES6+ 模組化設計
- SCSS 使用現代化的 @use 語法

## 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 專案截圖

### 登入頁面
![登入頁面](https://github.com/user-attachments/assets/8ffaa949-431c-4617-a744-46ecfad3aaa5)

### 表單驗證
![表單驗證](https://github.com/user-attachments/assets/9480efb9-c8fa-4f15-8610-666642751e5f)

### 歡迎頁面
![歡迎頁面](https://github.com/user-attachments/assets/2e0c4a30-f5ef-4744-b6b6-7ec201a55c0c)

## 注意事項

⚠️ **重要**: 本專案為前端示範用途，所有認證邏輯皆在前端完成。實際生產環境應該：

1. 使用後端 API 進行真實的使用者認證
2. 採用 JWT 或 Session 等安全認證機制
3. 密碼應進行雜湊處理
4. 實施 HTTPS 加密傳輸
5. 加入 CSRF 防護
6. 實施更嚴格的輸入驗證與清理

## 授權

ISC License

## 作者

df-it-all

---

最後更新日期：2025-11-11
