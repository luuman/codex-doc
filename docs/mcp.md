---
title: MCP 集成
description: 通过模型上下文协议连接外部工具
sidebar_position: 11
---

# MCP（模型上下文协议）集成

MCP（Model Context Protocol）是连接 Codex 与外部工具和上下文的标准协议，CLI 和 IDE 插件均支持。

## 支持的服务器类型

| 类型 | 说明 |
|------|------|
| **STDIO 服务器** | 本地进程，通过命令启动，支持环境变量配置 |
| **可流式 HTTP 服务器** | 远程服务器，通过 URL 访问，支持 Bearer Token 或 OAuth 认证 |

---

## 配置方式

### 方式一：CLI 命令添加

```bash
codex mcp add <server-name> -- <command>

# 示例：添加 Filesystem MCP 服务器
codex mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem /path/to/files

# 带环境变量
codex mcp add my-server --env API_KEY=xxx -- my-mcp-server
```

在交互模式中使用 `/mcp` 命令查看已连接的服务器。

### 方式二：配置文件

编辑 `~/.codex/config.toml`（全局）或 `.codex/config.toml`（项目级）：

**STDIO 服务器配置：**

```toml
[mcp_servers.filesystem]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
env = { SOME_KEY = "value" }
cwd = "/working/dir"        # 可选：工作目录
startup_timeout_sec = 30    # 可选：启动超时
```

**HTTP 服务器配置：**

```toml
[mcp_servers.my-remote-mcp]
url = "https://mcp.example.com/server"
bearer_token_env_var = "MY_TOKEN_ENV"  # 从环境变量读取 Token
```

**工具过滤配置：**

```toml
[mcp_servers.my-server]
command = "my-mcp-server"
enabled_tools = ["tool1", "tool2"]  # 只允许这些工具
disabled_tools = ["dangerous-tool"] # 禁用这些工具
required = true                     # 启动失败时终止 Codex
```

---

## 推荐的 MCP 服务器

| 服务器 | 用途 |
|--------|------|
| OpenAI Docs MCP | 查询 OpenAI 文档 |
| Context7 | 访问库文档 |
| Figma | 查询设计文件和资产 |
| Playwright | 浏览器自动化测试 |
| Chrome DevTools | 调试 Web 应用 |
| Sentry | 查看错误监控数据 |
| GitHub | 仓库操作和 PR 管理 |
| Linear | 工单管理（`codex mcp add linear --url https://mcp.linear.app/mcp`） |

---

## MCP 服务器能力

MCP 服务器可以暴露以下类型的能力：

- **Tools（工具）**：Codex 可以执行的操作
- **Resources（资源）**：Codex 可以读取的数据
- **Prompts（提示模板）**：可复用的提示词模板

---

## 配置同步

通过 App 界面添加的 MCP 服务器配置会自动同步到 CLI 和 IDE 插件（通过 `config.toml`）。
