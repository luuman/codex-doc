---
title: 配置基础
description: Codex 配置文件位置、格式和常用选项
sidebar_position: 1
---

# 配置基础

## 配置文件位置

| 级别 | 路径 |
|------|------|
| 用户级别 | `~/.codex/config.toml` |
| 项目级别 | `.codex/config.toml`（仓库根目录或子目录） |

在 IDE 插件中访问用户配置：齿轮图标 → Codex Settings → Open config.toml

---

## 配置优先级（高到低）

1. CLI 标志和 `--config` 覆盖
2. Profile 值（通过 `--profile <name>`）
3. 项目配置文件（距工作目录最近的优先；仅受信项目生效）
4. 用户配置
5. 系统配置：`/etc/codex/config.toml`（Unix）
6. 内置默认值

---

## 常用配置选项

### 默认模型

```toml
model = "gpt-5.2"
```

### 审批策略

```toml
# 可选值：untrusted | on-request | never
approval_policy = "on-request"
```

### 沙箱访问级别

```toml
# 可选值：read-only | workspace-write | danger-full-access
sandbox_mode = "workspace-write"
```

### 推理强度

```toml
# 可选值：low | medium | high
model_reasoning_effort = "high"
```

### 沟通风格

```toml
# 可选值：friendly | pragmatic | none
personality = "friendly"
```

### 网络搜索

```toml
# 可选值：cached | live | disabled
# web_search = "cached"
```

### Shell 环境变量过滤

```toml
[shell_environment_policy]
include_only = ["PATH", "HOME"]
```

### 日志目录

```toml
log_dir = "/absolute/path/to/codex-logs"
```

### Windows 沙箱

```toml
[windows]
sandbox = "elevated"      # 推荐（需要管理员权限）
# sandbox = "unelevated"  # 无管理员权限时的备选
```

---

## 功能标志（Feature Flags）

在 `[features]` 表中配置：

| 功能 | 默认 | 状态 | 说明 |
|------|------|------|------|
| `shell_snapshot` | false | Beta | 加速重复命令执行 |
| `multi_agent` | false | 实验性 | 多智能体协作工具 |
| `collaboration_modes` | true | 稳定 | 规划模式等协作功能 |
| `personality` | true | 稳定 | 沟通风格选择 |
| `undo` | true | 稳定 | 每轮 Git 快照撤销能力 |
| `unified_exec` | false | Beta | PTY 支持的执行工具 |

**启用功能**：

```bash
# CLI 临时启用
codex --enable multi_agent

# 配置文件永久启用
# [features]
# multi_agent = true
```

---

## 安全与信任

项目级别配置只在**受信项目**中加载。不受信任的项目会跳过 `.codex/` 层级，直接使用用户配置。

企业管理员可通过 `requirements.toml` 强制执行限制性约束。

---

## JSON Schema 自动补全

在 VS Code/Cursor 中安装 **Even Better TOML** 插件后，可通过以下配置获得配置文件的智能补全：

配置文件 Schema 地址：`/codex/config-schema.json`
