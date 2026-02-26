---
title: 模型选择
description: Codex 可用模型及其能力对比
sidebar_position: 5
---

# 模型选择

## 推荐模型

### gpt-5.3-codex（主力模型）

结合强大推理能力和专业编程知识的旗舰编程模型，适合大多数场景。

- **访问方式**：CLI `codex -m gpt-5.3-codex`
- **可用渠道**：Codex CLI/SDK、App、IDE 插件、Cloud、ChatGPT Credits
- **适用场景**：复杂推理、多步骤实现、代码审查、安全分析、主智能体

### gpt-5.3-codex-spark（快速预览版）

仅文本、实验性的研究预览版，针对即时实时迭代优化。

- **访问方式**：CLI `codex -m gpt-5.3-codex-spark`
- **可用渠道**：仅限 ChatGPT Pro 订阅用户
- **适用场景**：快速探索、代码扫描、摘要生成、子智能体任务

### gpt-5.2-codex（上一代）

面向工程的高级模型，已被 GPT-5.3-Codex 取代。

---

## 其他可用模型

以下模型也可用于 Codex 工作流：

| 模型 | 说明 |
|------|------|
| `gpt-5.2` | 通用智能体模型 |
| `gpt-5.1-codex-max` | 适合长周期智能体任务 |
| `gpt-5.1` | 编程和跨领域工作 |
| `gpt-5.1-codex` | 旧版编程模型 |
| `gpt-5-codex` | 旧版 |
| `gpt-5-codex-mini` | 轻量旧版 |

---

## 配置模型

### 默认模型（配置文件）

在 `~/.codex/config.toml` 中设置默认模型：

```toml
model = "gpt-5.2"
```

### 临时切换（CLI 会话中）

在交互模式中使用 `/model` 命令，可在会话中途切换模型和推理强度。

### 单次任务指定（CLI）

```bash
codex -m gpt-5.3-codex "你的任务描述"
codex --model gpt-5.3-codex-spark "快速探索任务"
```

### IDE 插件

使用界面中的模型切换器选择模型，无需命令行操作。

### 云端任务

云端任务目前暂不支持模型选择。

---

## 推理强度（Reasoning Effort）

对支持的模型，可通过 `model_reasoning_effort` 调整推理深度：

```toml
# ~/.codex/config.toml
model_reasoning_effort = "high"  # 可选: low, medium, high
```

| 等级 | 适用场景 | 说明 |
|------|----------|------|
| `high` | 复杂逻辑、边界情况验证 | 消耗更多 Token 和额度 |
| `medium` | 均衡默认（推荐起点） | - |
| `low` | 优先速度的简单任务 | 速度最快 |

:::tip
建议从 `medium` 开始，只在确实需要时升级到 `high`，因为更高的推理强度会消耗更多 Token 和触及速率限制更快。
:::
