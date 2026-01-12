# 像素风头像展示网站

基于 Next.js + React + TypeScript + Tailwind CSS 构建的现代化头像展示网站。

## 技术栈

- **Next.js 16** - React 框架
- **React 19** - UI 库
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 现代化样式框架

## 功能特点

- 🎨 现代化渐变背景设计
- 📱 完全响应式布局
- 🌓 支持深色模式
- 🖼️ 静态/动态头像切换
- 🔍 点击头像查看详情
- ✨ 平滑动画效果

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
avatar-gallery/
├── app/
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 主页面
└── public/
    └── avatars/
        ├── static/       # 静态头像 (PNG)
        └── dynamic/      # 动态头像 (GIF)
```

## 说明

项目展示 105 个 QQ 20 周年像素风头像，包括：
- 静态版：PNG 格式，文件名格式 `50xxx.png`
- 动态版：GIF 格式，文件名格式 `60xxx.gif`

支持在两种模式间切换查看，点击任意头像可查看大图详情。
