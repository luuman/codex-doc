---
title: 故障排查
description: Codex App 常见问题与解决方案
sidebar_position: 9
---

# 故障排查

## 文件管理

### Review 面板出现意外文件

如果项目在 Git 仓库中，Review 面板显示所有 Git 改动，不只是 Codex 的修改。
**解决方案**：切换到"Last turn changes"视图，只查看最近一轮操作的改动。

### 如何移除项目

悬停在项目名称上 → 点击菜单图标 → 选择"Remove"。
恢复项目：使用"Add new project"按钮或 `Cmd+O`。

---

## 线程与项目管理

- **找不到归档线程**：在 Settings 中查看
- **线程消失**：检查是否启用了过滤器——查看"Threads"旁的过滤图标

---

## Worktree 问题

### 代码在 Worktree 中无法运行

Worktree 只继承 Git 追踪的文件，不包含 `node_modules` 等忽略目录。
**解决方案**：在[本地环境](./local-environments)中配置初始化脚本，或在主项目中 checkout 改动。

### 创建了过多 Worktree

**解决方案**：归档不需要的自动化运行记录；避免不必要地固定（Pin）运行记录。

---

## 本地环境

### 队友的环境配置未被检测到

`.codex` 文件夹必须位于项目根目录。
**在 Monorepo 中**：打开包含 `.codex` 目录的那个目录，而不是其父目录或子目录。

---

## 系统权限（macOS）

### 弹出 Apple Music 访问请求

Codex 在导航文件系统时可能触发 macOS 对受保护目录（Music、Downloads、Desktop、家目录）的权限请求，需要手动批准。

---

## 恢复与调试

### 恢复意外取消的提示词

在输入框中按 **↑（上箭头键）** 可恢复上一次取消的提示词。

### 查看版本号

```bash
# CLI 版本
codex --version

# App 版本
/Applications/Codex.app/Contents/Resources/codex --version
```

---

## 终端问题

### 终端卡住/无响应

1. 关闭终端面板
2. 使用 `Cmd+J` 重新打开
3. 运行基础命令（如 `pwd`）测试是否正常

### 字体渲染异常

在 Settings 中配置代码字体。

---

## 日志位置

| 类型 | 路径 |
|------|------|
| App 运行日志 | `~/Library/Logs/com.openai.codex/YYYY/MM/DD` |
| 会话记录 | `~/.codex/sessions` |
| 已归档会话 | `~/.codex/archived_sessions` |

在输入框中输入 `/` 可快速打开反馈对话框并附带日志提交。
