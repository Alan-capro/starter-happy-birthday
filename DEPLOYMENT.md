# 🚀 Netlify 部署指南

## 方法一：通过 Netlify 网站部署（推荐）

### 1. 准备工作
确保你的代码已经推送到 GitHub 仓库：
```bash
git add .
git commit -m "准备部署到 Netlify"
git push origin main
```

### 2. 在 Netlify 上创建新站点
1. 访问 [Netlify](https://www.netlify.com/)
2. 点击 "New site from Git"
3. 选择 "GitHub" 并授权
4. 选择你的 `starter-happy-birthday` 仓库
5. 配置构建设置：
   - **Build command**: `pnpm build`
   - **Publish directory**: `.output/public`
   - **Node version**: `18`

### 3. 环境变量（如果需要）
在 Netlify 的 Site settings > Environment variables 中添加：
- `NODE_VERSION`: `18`
- `PNPM_VERSION`: `8`

### 4. 部署
点击 "Deploy site"，等待构建完成！

---

## 方法二：通过 Netlify CLI 部署

### 1. 安装 Netlify CLI
```bash
npm install -g netlify-cli
```

### 2. 登录 Netlify
```bash
netlify login
```

### 3. 构建项目
```bash
pnpm build
```

### 4. 部署
```bash
# 首次部署
netlify deploy

# 生产部署
netlify deploy --prod
```

---

## 方法三：拖拽部署（最简单）

### 1. 本地构建
```bash
pnpm build
```

### 2. 拖拽部署
1. 访问 [Netlify](https://app.netlify.com/drop)
2. 将 `.output/public` 文件夹拖拽到页面上
3. 等待部署完成！

---

## 🔧 配置说明

### 构建配置
- **构建命令**: `pnpm build` (使用 `nuxt generate` 进行静态生成)
- **发布目录**: `.output/public`
- **Node.js 版本**: 18

### 重定向规则
项目已配置 `netlify.toml` 文件，包含：
- SPA 路由重定向
- 安全头部设置
- 静态资源缓存优化

### 性能优化
- 静态资源缓存 1 年
- 图片资源缓存优化
- 安全头部配置

---

## 🎯 部署后检查

部署完成后，请检查：
1. ✅ 页面正常加载
2. ✅ 动画效果正常
3. ✅ 移动端适配良好
4. ✅ 按钮交互正常
5. ✅ 性能表现良好

---

## 🐛 常见问题

### 构建失败
- 检查 Node.js 版本是否为 18
- 确保 pnpm 版本兼容
- 检查依赖是否正确安装

### 页面空白
- 检查发布目录是否为 `.output/public`
- 确认构建命令为 `pnpm build`

### 样式问题
- 检查 CSS 文件是否正确加载
- 确认 Tailwind CSS 配置正确

---

## 📱 移动端测试

部署后请在 iPhone 15 上测试：
1. 打开开发者工具，模拟 iPhone 15 尺寸
2. 检查触摸交互是否正常
3. 验证动画效果是否流畅
4. 确认按钮点击反馈正常

---

## 🎉 完成！

你的生日祝福页面现在已经成功部署到 Netlify 了！

**访问你的网站**: `https://your-site-name.netlify.app`

记得将链接分享给需要祝福的人哦！🎂✨
