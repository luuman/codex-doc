---
title: 网页端概览
description: Codex 云端任务和网页端使用介绍
sidebar_position: 1
---

# 网页端（Web）概览

Codex 网页端运行在 OpenAI 管理的云端环境中，支持后台任务处理和并行执行，无需本地环境。

**访问地址**：[chatgpt.com/codex](https://chatgpt.com/codex)

## 核心特性

- **云端执行**：任务在隔离的云端容器中运行，不占用本地资源
- **并行任务**：同时运行多个独立任务
- **GitHub 集成**：直接访问 GitHub 仓库并创建 Pull Request
- **实时监控**：在界面中查看任务进度和日志
- **Diff 视图**：查看代码改动并决定是否接受

## 订阅要求

| 方案 | 可用性 |
|------|--------|
| Plus | ✅ |
| Pro | ✅ |
| Business | ✅ |
| Edu | ✅ |
| Enterprise | ✅（部分需管理员配置） |

## 快速开始

1. 访问 [chatgpt.com/codex](https://chatgpt.com/codex)
2. 在设置中连接 GitHub 账号
3. 配置一个云端环境（选择仓库和初始化脚本）
4. 创建任务并实时监控

## 工作流集成

- **从 IDE 发起**：在 IDE 插件中使用 `/cloud` 命令，任务在云端运行，本地监控进度
- **GitHub 评论触发**：在 PR 或 Issue 中 `@codex` 发起任务
- **Slack 触发**：在 Slack 频道中 `@Codex` 发起任务（需集成配置）

## 功能导航

- [环境配置](./environments) — 容器、依赖安装、密钥管理
- [网络访问控制](./internet-access) — 云端任务的网络访问设置
