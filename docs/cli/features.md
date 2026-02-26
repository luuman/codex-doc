---
title: 功能详解
description: Codex CLI 完整功能介绍
sidebar_position: 2
---

# CLI 功能详解

## 交互式模式

启动全屏终端界面（TUI），以对话方式驱动工作流：

```bash
codex
```

**特性**：
- 发送提示词、代码片段或截图
- Codex 在修改前解释执行计划
- 使用方向键浏览草稿历史

---

## 会话管理与恢复

| 命令 | 功能 |
|------|------|
| `codex resume` | 打开最近会话选择器 |
| `codex resume --last` | 直接跳到最近一次会话 |
| `codex resume <SESSION_ID>` | 恢复指定会话 |

恢复后保留原始对话记录和规划历史。

---

## 模型与推理

**主力模型**：`gpt-5.3-codex`（ChatGPT 账号用户可用）
**快速模型**：`gpt-5.3-codex-spark`（Pro 用户专属）

会话中途使用 `/model` 切换模型。

---

## 图像输入

附加截图或设计稿：

```bash
codex -i screenshot.png "解释这个错误"
codex --image img1.png,img2.jpg "总结这两张图的设计差异"
```

---

## 代码审查

输入 `/review` 访问预设审查模式，可分析：
- 与基础分支的 Diff
- 未提交的改动
- 特定提交的改动

**不修改工作区文件**。

---

## 网络搜索

默认启用缓存网络搜索。使用 `--search` 标志启用实时搜索：

```bash
codex --search "使用最新的 React 19 API 实现..."
```

---

## 非交互自动化（exec）

`exec` 子命令支持非交互式运行，适合脚本和 CI 集成：

```bash
codex exec "你的任务提示词"
```

- 进度流式输出到 `stderr`
- 最终消息输出到 `stdout`，可管道传输

---

## 审批模式

| 模式 | 说明 |
|------|------|
| **Auto**（默认） | 平衡自动化与安全性 |
| **Read-only** | 只读，不做任何修改 |
| **Full Access** | 完全自主（用于受控环境） |

会话中使用 `/permissions` 切换。

---

## 其他功能

- **斜杠命令**：控制模式、模型、上下文等（详见[斜杠命令](./slash-commands)）
- **MCP 支持**：通过配置连接第三方工具
- **Shell 补全**：支持 bash、zsh、fish
- **主题定制**：内置主题选择器（带实时预览）
- **云端集成**：通过 `codex cloud` 命令发起云端任务
