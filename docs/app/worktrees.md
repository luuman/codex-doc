---
title: Worktree
description: 使用 Git Worktree 隔离并行任务
sidebar_position: 6
---

# Worktree（工作树）

Worktree 允许 Codex 在同一项目中并行运行多个独立任务，互不干扰。

> "Worktree 让 Codex 在同一项目中运行多个独立任务而不互相冲突。"

## 核心概念

| 概念 | 说明 |
|------|------|
| **本地 checkout** | 你的原始仓库 |
| **Worktree** | 从本地 checkout 创建的 Git Worktree，共享元数据但拥有独立文件副本 |

---

## 使用场景

1. **与 Codex 并行工作**：Codex 在 Worktree 中工作，你同时在主 checkout 进行其他修改，互不冲突
2. **任务队列**：将未关联的线程作为待执行任务的暂存区
3. **任务独立性**：保证并发任务之间完全隔离

---

## 创建 Worktree 线程

1. 在新建线程视图中选择 **Worktree**
2. 选择起始分支（main、feature 分支或包含本地改动的当前分支）
3. 提交提示词，Codex 自动创建一个 Detached HEAD 状态的 Worktree
4. 使用以下任一方式验证和整合改动

---

## 两种工作流程

### 方式一：完全在 Worktree 上工作

1. 点击 **"Create branch here"** 按钮
2. 在 Worktree 上直接提交、推送和创建 Pull Request
3. 点击 **"Open"** 按钮在 IDE 中打开该 Worktree

### 方式二：同步到本地 checkout

1. 点击线程头部的 **"Sync with local"**
2. 选择同步方式：
   - **Overwrite**：用 Worktree 内容覆盖本地
   - **Apply**：将改动应用到本地（保留提交历史）

---

## Worktree 清理规则

**受保护，不会被自动删除：**
- 有固定（Pinned）对话附加的 Worktree
- 已添加到侧边栏的 Worktree

**可被清理的条件（同时满足）：**
- 已超过 4 天
- 当前存在超过 10 个 Worktree

---

## 分支限制

Git 不允许同一分支同时在多个 Worktree 中 checkout（因为序列化要求和冲突防护）。如果需要对同一分支并行工作，请先创建新分支。
