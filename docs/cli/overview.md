---
title: CLI 概览
description: Codex 命令行工具介绍与安装
sidebar_position: 1
---

# Codex CLI 概览

Codex CLI 是在终端中本地运行的编程智能体，可以读取、修改和运行你机器上指定目录中的代码。开源、使用 Rust 构建，已包含在 ChatGPT Plus、Pro、Business、Edu 和 Enterprise 方案中。

## 平台支持

| 平台 | 支持状态 |
|------|----------|
| macOS | ✅ 完全支持 |
| Linux | ✅ 完全支持 |
| Windows | ⚠️ 实验性（推荐 WSL） |

## 安装

### 通过 npm

```bash
npm install -g @openai/codex
```

### 通过 Homebrew（macOS）

```bash
brew install codex
```

### 升级到最新版

```bash
npm install -g @openai/codex@latest
```

## 快速开始

在项目目录下运行：

```bash
codex
```

首次运行会引导完成身份认证（ChatGPT 账号或 API 密钥）。

## 功能导航

- [功能详解](./features) — 交互模式、会话恢复、图像输入等
- [命令参数参考](./reference) — 完整 CLI 标志和子命令
- [斜杠命令](./slash-commands) — 会话内快速操作命令
