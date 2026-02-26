---
title: Slack 集成
description: 在 Slack 中直接触发 Codex 任务
sidebar_position: 2
---

# Slack 集成

Codex Slack 集成允许你在 Slack 频道和会话中直接触发编程任务，无需离开 Slack。

## 前置条件

1. 有效的 ChatGPT Plus、Pro、Business、Enterprise 或 Edu 方案
2. 已连接 GitHub 账号
3. 已配置云端任务和至少一个环境
4. 在 Slack 工作区安装 Codex（企业用户可能需要管理员审批）

---

## 基本使用

在频道或会话中 `@Codex` 并附上指令：

```
@Codex 在 auth 模块中添加刷新 Token 的功能
```

Codex 会：
1. 创建一个云端任务
2. 在 Slack 中回复结果

---

## 上下文感知

Codex 可以引用会话线程中的早期消息，通常不需要重新说明上下文：

```
（之前的讨论：描述了某个 Bug）
@Codex 修复上面描述的问题
```

---

## 指定环境或仓库

如果 Codex 自动选择了不正确的环境，可以明确指定：

```
@Codex 在 openai/codex 仓库中修复上述问题
```

---

## 企业控制

管理员可以限制 Codex 在任务完成时不直接发布答案，只发送任务链接，由团队成员自行查看结果。

---

## 数据处理

消息和会话历史根据 OpenAI 的隐私政策和服务条款进行处理，用于理解请求和创建任务。
