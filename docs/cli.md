---
title: 命令行工具（CLI）
description: Codex CLI 安装、命令和使用指南
sidebar_position: 6
---

# Codex 命令行工具（CLI）

Codex CLI 是在终端中本地运行的编程智能体，可以读取、修改和运行你机器上指定目录中的代码。它是开源项目，使用 Rust 构建，已包含在 ChatGPT Plus、Pro、Business、Edu 和 Enterprise 方案中。

## 平台支持

| 平台 | 支持状态 |
|------|----------|
| macOS | ✅ 完全支持 |
| Linux | ✅ 完全支持 |
| Windows | ⚠️ 实验性支持（推荐使用 WSL） |

---

## 安装

### 通过 npm 安装

```bash
npm install -g @openai/codex
```

### 通过 Homebrew 安装（macOS）

```bash
brew install codex
```

### 升级到最新版本

```bash
npm install -g @openai/codex@latest
```

---

## 快速开始

在项目目录下启动 Codex CLI：

```bash
codex
```

**首次使用**：会引导你完成身份验证，支持 ChatGPT 账号登录或 OpenAI API 密钥。

---

## 主要功能

### 交互式模式

启动终端 UI 界面，通过对话方式指派任务：

```bash
codex
```

### 模型切换

在交互模式中使用 `/model` 命令切换模型并调整推理级别，支持在 GPT-5.3-Codex 等模型间切换。

### 图像输入

支持附加截图或设计稿作为上下文，帮助 Codex 理解 UI 需求。

### 代码审查

在提交前运行本地代码审查：

```bash
# 示例：对当前目录进行代码审查
codex review
```

### 多智能体协作（实验性）

启用并行任务处理的实验性功能，允许多个智能体同时工作：

```bash
codex --multi-agent
```

### 网络搜索

Codex 可访问实时信息，在任务中自动搜索相关文档和资料。

### 云端任务

从终端发起云端环境中的特定任务，适用于需要隔离环境的工作。

### MCP 集成

通过 Model Context Protocol 添加第三方工具：

```bash
# 在 ~/.codex/config.json 中配置 MCP 服务器
```

### 审批模式

自定义文件编辑和命令执行的权限策略，控制 Codex 的自主度：

| 模式 | 说明 |
|------|------|
| `suggest` | 建议模式，所有操作需手动确认 |
| `auto-edit` | 自动编辑文件，执行命令需确认 |
| `full-auto` | 全自动模式，无需确认（谨慎使用） |

---

## 使用技巧

### 任务示例

```bash
# 直接传入任务描述（非交互模式）
codex "解释这个项目的架构"

# 带文件上下文
codex "重构 src/utils.ts，提升可读性"

# 代码修复
codex "找出并修复内存泄漏问题"
```

### 安全建议

在执行任务前后创建 Git 检查点，便于回退：

```bash
git add . && git stash  # 保存当前状态
codex "..."             # 执行任务
git diff                # 查看改动
```

---

## 常见问题

**Q：Windows 上如何使用？**

推荐通过 WSL（Windows Subsystem for Linux）运行，参考官方 Windows 安装指南。

**Q：CLI 与 App 有什么区别？**

CLI 更适合终端工作流和脚本集成；App 提供图形界面和更丰富的 Git 可视化功能。两者共享配置和 Skills。
