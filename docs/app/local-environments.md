---
title: 本地环境
description: 配置 Worktree 初始化脚本和快捷动作
sidebar_position: 7
---

# 本地环境（Local Environments）

本地环境允许通过 Codex App 的设置面板，为 Worktree 配置初始化步骤和常用操作。

配置存储在项目根目录的 `.codex` 文件夹中，可提交到 Git 与团队共享。

---

## 初始化脚本（Setup Scripts）

初始化脚本在 Codex 创建新 Worktree 时自动执行，用于配置开发环境（安装依赖、运行构建等）。

### TypeScript 项目示例

```bash
npm install
npm run build
```

### 平台特定脚本

可以为不同操作系统定义特定脚本，覆盖默认配置：

- macOS 专用
- Windows 专用
- Linux 专用

---

## 快捷动作（Actions）

Actions 代表常用的项目操作，会显示在 Codex App 顶部工具栏，一键执行。Actions 在集成终端中运行。

### 用途示例

| 场景 | 命令示例 |
|------|----------|
| 启动开发服务器 | `npm start` |
| 运行测试套件 | `npm test` |
| 触发构建 | `npm run build` |

### Action 功能

- **平台特定命令**：支持为不同操作系统配置不同命令
- **图标选择**：为 Action 选择图标，便于视觉识别
- **顶部工具栏**：从应用顶部工具栏直接访问，无需打开终端

---

## 配置文件位置

```
<项目根目录>/
└── .codex/
    ├── setup.sh        # 默认初始化脚本
    ├── setup.mac.sh    # macOS 专用初始化脚本
    ├── actions.json    # 快捷动作配置
    └── ...
```

---

## 故障排查

**队友的环境配置未被检测到？**

`.codex` 文件夹必须位于项目根目录。在 Monorepo 中，请打开包含 `.codex` 目录的那个目录，而不是其子目录。
