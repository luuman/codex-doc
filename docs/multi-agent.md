---
title: 多智能体配置
description: 配置和使用多智能体工作流
sidebar_position: 13
---

# 多智能体配置

多智能体功能为实验性功能，需显式开启才能使用。

## 开启多智能体功能

### 方式一：CLI 交互式开启

```
在 CLI 中输入：/experimental
选择：Multi-agents
重启 Codex
```

### 方式二：配置文件

```toml
# ~/.codex/config.toml
[features]
multi_agent = true
```

---

## 工作机制

开启后，Codex 自动管理整个编排过程：

- **生成子智能体**：根据任务需要创建专业化子智能体
- **路由指令**：将后续指令发送给合适的子智能体
- **等待结果**：内置 `wait` 工具，支持最长 1 小时的轮询窗口
- **合并响应**：汇总所有子智能体结果后再回复

---

## 管理子智能体

### 查看与切换

使用 `/agent` 命令在不同智能体线程间切换，查看各个子智能体的实时进度。

### 控制子智能体

通过对话直接指示 Codex 控制子智能体：

```
停止安全扫描智能体，将结果汇总给我
```

---

## 沙箱策略

子智能体**继承父会话的沙箱设置**，但以**非交互模式**运行。

需要新审批的操作会失败，并将错误冒泡给父工作流。

个别智能体角色可以在配置中覆盖沙箱设置。

---

## 内置智能体角色

```toml
# 配置自定义角色
[agents.my-security-agent]
description = "专注于安全漏洞检测的智能体，不进行代码修改"

[agents.my-security-agent.config]
model = "gpt-5.3-codex"
model_reasoning_effort = "high"
sandbox_mode = "read-only"
```

内置角色：

| 角色 | 用途 |
|------|------|
| `default` | 通用兜底 |
| `worker` | 实现和修复 |
| `explorer` | 读密集型探索 |
| `monitor` | 长运行任务监控 |

---

## 配置参数

| 配置项 | 类型 | 说明 |
|--------|------|------|
| `agents.max_threads` | number | 最大并发智能体线程数 |
| `agents.max_depth` | number | 最大嵌套深度（默认 1） |
| `agents.<name>.description` | string | 角色选择的指引说明 |
| `agents.<name>.config_file` | string | 指向额外 TOML 配置层的路径 |

智能体可覆盖的配置项：模型选择、推理强度、沙箱模式、开发者指令。

---

## 使用建议

**适合并行化的任务（读密集型）：**
- 代码库探索
- 测试并发运行
- Bug 分类
- 代码摘要生成

**谨慎处理写密集型并行任务：**
由于潜在的代码冲突和协调开销，写操作并行化需要更仔细规划，确保不同智能体操作不同文件区域。
