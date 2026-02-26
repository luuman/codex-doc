---
title: 配置参考
description: config.toml 完整配置项参考
sidebar_position: 2
---

# 配置参考

## 模型设置

| 配置项 | 说明 |
|--------|------|
| `model` | 指定使用的模型（如 `"gpt-5-codex"`） |
| `model_provider` | 选择模型提供商（默认：`openai`） |
| `model_context_window` | 定义可用的上下文 Token 数 |
| `model_reasoning_effort` | 推理强度：`minimal` 到 `xhigh` |
| `model_reasoning_summary` | 摘要详细程度：`auto`、`concise`、`detailed`、`none` |

---

## 安全与沙箱

| 配置项 | 说明 |
|--------|------|
| `sandbox_mode` | 沙箱策略：`read-only`、`workspace-write`、`danger-full-access` |
| `approval_policy` | 审批策略：`untrusted`、`on-request`、`never` |
| `sandbox_workspace_write.writable_roots` | 额外可写目录 |
| `sandbox_workspace_write.network_access` | 开启出站网络访问 |

---

## 功能开关（[features]）

| 功能 | 说明 |
|------|------|
| `shell_tool` | 启用默认 Shell 命令工具（稳定，默认开启） |
| `web_search` | 网络搜索：`disabled`、`cached`、`live` |
| `multi_agent` | 智能体协作工具（实验性） |
| `unified_exec` | PTY 支持的执行工具（Beta） |
| `apply_patch_freeform` | 暴露自由格式 Patch 工具 |

---

## MCP 服务器配置

### STDIO 服务器

```toml
[mcp_servers.my-server]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
env = { API_KEY = "..." }
cwd = "/working/dir"
startup_timeout_sec = 30
```

### HTTP 服务器

```toml
[mcp_servers.my-http-server]
url = "https://mcp.example.com/server"
bearer_token_env_var = "MY_TOKEN_ENV"
```

### 通用选项

| 配置项 | 说明 |
|--------|------|
| `enabled` | 是否启用此服务器 |
| `required` | 启动失败时是否终止 Codex |
| `enabled_tools` | 允许的工具白名单 |
| `disabled_tools` | 禁用的工具列表 |
| `tool_timeout_sec` | 工具调用超时秒数 |

---

## Shell 环境设置

```toml
[shell_environment_policy]
inherit = "core"        # all | core | none
set = { MY_VAR = "value" }
```

---

## UI 与行为

| 配置项 | 说明 |
|--------|------|
| `personality` | 沟通风格：`none`、`friendly`、`pragmatic` |
| `tui.animations` | 启用终端动画 |
| `tui.notifications` | 控制通知行为 |
| `file_opener` | 引用跳转的编辑器：`vscode`、`cursor`、`windsurf` 等 |
| `allow_login_shell` | 开启 login-shell 语义 |

---

## 历史记录与压缩

| 配置项 | 说明 |
|--------|------|
| `history.persistence` | 对话记录：`save-all` 或 `none` |
| `model_auto_compact_token_limit` | 自动压缩触发阈值 |
| `compact_prompt` | 覆盖默认压缩提示词 |

---

## 管理员强制要求（requirements.toml）

管理员可通过此文件限制用户无法覆盖的安全敏感设置：

```toml
# /etc/codex/requirements.toml 或组织级别分发
allowed_approval_policies = ["on-request", "untrusted"]
allowed_sandbox_modes = ["read-only", "workspace-write"]
allowed_web_search_modes = ["disabled", "cached"]
```

:::note
`requirements.toml` 的规则只能**限制**，不能扩展用户配置的权限范围。
:::

---

## Profile 系统

使用命名 Profile 为不同场景覆盖配置：

```toml
[profiles.ci]
approval_policy = "never"
sandbox_mode = "workspace-write"
model = "gpt-5.1-codex"
```

```bash
# 使用 CI profile 运行
codex --profile ci "执行代码审查"
```
