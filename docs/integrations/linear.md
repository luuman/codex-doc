---
title: Linear 集成
description: 将 Linear 工单直接分配给 Codex 执行
sidebar_position: 3
---

# Linear 集成

Codex Linear 集成让你可以像分配给队友一样，将 Linear 工单直接分配给 Codex，自动触发实现任务。

## 前置条件

- 付费 ChatGPT 方案并开启云端任务
- 连接 GitHub 账号并配置环境
- 企业用户需要工作区管理员审批，在 ChatGPT 工作区设置中启用该功能

---

## 配置步骤

1. 配置 Codex 云端任务（连接 GitHub，创建环境）
2. 在工作区设置中安装 **Codex for Linear** 连接器
3. 在某个 Linear 工单评论中 `@Codex`，完成账号关联

---

## 委派任务的两种方式

### 方式一：直接分配工单

像分配给队友一样，在工单中将负责人设为 Codex，系统会自动触发任务并在工单中持续更新进度。

### 方式二：评论中 `@Codex`

在工单评论中提及 `@Codex` 并附上指令，可以在同一会话中持续对话和调整：

```
@Codex 根据这个工单的描述，在 src/auth/ 目录下实现 OAuth 登录功能
```

---

## 仓库选择逻辑

Codex 会分析工单上下文，智能选择合适的环境和仓库。如果请求不够明确，默认使用最近使用的环境。任务基于环境仓库映射中配置的默认分支执行。

---

## 通过 Triage 规则自动分配

在 Linear 的工作流设置中，可以创建自动将工单分配给 Codex 的 Triage 规则：

1. 设置触发条件（如标签、优先级等）
2. 配置自动分配给 Codex
3. 可同时应用其他属性（状态标签等）

---

## CLI 本地集成

CLI 和 IDE 用户可以通过 Linear MCP 服务器在本地访问 Linear 工单：

```bash
codex mcp add linear --url https://mcp.linear.app/mcp
```
