---
title: Codex App 概览
description: macOS 桌面端 Codex 指挥中枢介绍
sidebar_position: 1
---

# Codex App 概览

Codex App 是你的编程指挥中枢——一款专注于 macOS 的桌面应用，支持并行运行多个任务线程，并深度集成 Git 工作流与 Worktree 支持。

## 系统要求

- **操作系统**：macOS（当前仅支持 macOS）
- **芯片**：Apple Silicon（M 系列）
- **账号**：ChatGPT Plus/Pro/Business/Edu/Enterprise，或 OpenAI API 密钥

## 开始使用

1. 下载并安装 Codex App
2. 登录：ChatGPT 账号或 OpenAI API 密钥
3. 选择项目文件夹，开始发起任务

:::note
使用 API 密钥登录时，云端线程等功能不可用。
:::

## 运行模式

| 模式 | 说明 |
|------|------|
| **Local（本地）** | 直接在项目目录运行 |
| **Worktree** | 在隔离的 Git Worktree 中运行 |
| **Cloud（云端）** | 在远程云端环境运行 |

本地和 Worktree 模式均在你的计算机上运行。

## 核心功能入口

- [功能详解](./features) — 多任务、Git 集成、终端等完整功能
- [设置配置](./settings) — 外观、通知、Agent 配置
- [代码审查](./review) — 内置 Git Diff 审查面板
- [自动化任务](./automations) — 定时后台任务
- [Worktree](./worktrees) — 并行任务隔离
- [本地环境](./local-environments) — 初始化脚本和快捷动作
- [键盘快捷键与命令](./commands) — 完整快捷键和斜杠命令参考
- [故障排查](./troubleshooting) — 常见问题解决方案
