---
title: Codex SDK
description: 通过 TypeScript SDK 以编程方式控制 Codex 智能体
sidebar_position: 18
---

# Codex SDK

Codex SDK 是一个 TypeScript 库，允许以编程方式控制 Codex 智能体，将其集成到你自己的工具和应用中。

## 系统要求

- Node.js 18 或更高版本
- 服务端运行（不支持浏览器）

---

## 安装

```bash
npm install @openai/codex-sdk
```

---

## 主要用途

- **CI/CD 集成**：作为流水线的一部分控制 Codex
- **构建 AI 智能体**：创建能与 Codex 交互的自定义智能体
- **内部工具**：将 Codex 集成到团队内部工具中
- **应用集成**：在自己的应用中嵌入 Codex 能力

---

## 基本用法

```typescript
import { Codex } from '@openai/codex-sdk';

const codex = new Codex();

// 启动线程并运行任务
const thread = codex.startThread();
const result = await thread.run("为 src/utils.ts 编写单元测试");

console.log(result);
```

---

## 线程管理

### 在同一线程中继续对话

```typescript
const thread = codex.startThread();

// 第一轮
await thread.run("实现用户登录功能");

// 在同一线程中继续
await thread.run("为刚才实现的功能添加单元测试");
```

### 恢复已有线程

```typescript
// 使用已知的线程 ID 恢复
const existingThreadId = "thread_abc123";
const thread = codex.startThread({ threadId: existingThreadId });
await thread.run("继续之前的任务");
```

---

## 完整 API 文档

Codex SDK 的完整 TypeScript API 文档和更多示例，请参考 GitHub 上的官方仓库。

---

## 与非交互模式的对比

| 方式 | 适用场景 |
|------|----------|
| `codex exec`（CLI） | 简单脚本、Shell 集成、快速自动化 |
| Codex SDK（TypeScript） | 复杂应用集成、需要程序化控制、构建自定义工具 |
