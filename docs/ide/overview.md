---
title: IDE 插件概览
description: Codex IDE 插件安装与入门
sidebar_position: 1
---

# IDE 插件概览

Codex IDE 插件将编程智能体直接集成到你的编辑器中，支持 VS Code 及其派生编辑器（Cursor、Windsurf），以及 JetBrains IDE 系列。

## 支持的编辑器

| 编辑器 | 安装方式 |
|--------|----------|
| Visual Studio Code | VS Code Marketplace |
| Cursor | Cursor 插件市场 |
| Windsurf | Windsurf 插件市场 |
| VS Code Insiders | VS Code Marketplace |
| JetBrains（Rider、IntelliJ、PyCharm、WebStorm） | JetBrains Marketplace（独立集成） |

## 平台支持

- macOS 和 Linux：完全支持
- Windows：实验性支持（推荐通过 WSL 使用）

## 安装步骤

1. 在对应编辑器的插件市场搜索 **Codex**
2. 安装并根据提示重启编辑器
3. Codex 图标出现在左侧边栏

## 身份认证

支持两种登录方式：
- **ChatGPT 账号**：包含方案内的使用额度
- **OpenAI API 密钥**：按用量计费

## 工作模式

| 模式 | 说明 |
|------|------|
| **Chat 模式** | 讨论和规划，不直接修改代码 |
| **Agent 模式**（默认） | 自动执行文件读写和命令，需要审批网络/目录访问 |
| **Agent（完全访问）** | 无需审批执行所有操作（谨慎使用） |

## 快速开始

安装后：
1. 在侧边栏点击 Codex 图标
2. 选择工作模式
3. 在对话框输入任务描述

IDE 插件会自动包含当前打开的文件和选中的代码范围作为上下文。

## 功能导航

- [功能详解](./features) — 编辑器集成、模型选择、云端委托等
- [斜杠命令](./slash-commands) — 模式切换和状态查看命令

---

### JetBrains 集成说明

JetBrains 集成作为独立插件提供，支持：
- **认证方式**：ChatGPT 账号、API 密钥或 JetBrains AI 订阅
- **支持 IDE**：Rider、IntelliJ、PyCharm、WebStorm
