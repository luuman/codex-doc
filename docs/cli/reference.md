---
title: 命令参数参考
description: Codex CLI 完整命令行标志和子命令参考
sidebar_position: 3
---

# CLI 命令参数参考

## 全局标志

适用于所有命令的通用标志：

| 标志 | 说明 |
|------|------|
| `--add-dir <path>` | 授予额外目录的写入权限（在主工作区之外） |
| `--ask-for-approval, -a` | 控制审批时机：`untrusted`、`on-request` 或 `never` |
| `--cd, -C <path>` | 处理请求前切换工作目录 |
| `--config, -c <key=value>` | 覆盖配置值（支持 JSON 解析） |
| `--dangerously-bypass-approvals-and-sandbox, --yolo` | 不经审批或沙箱直接运行所有命令 |
| `--disable <feature>` | 强制禁用功能标志（可重复使用） |
| `--enable <feature>` | 强制启用功能标志（可重复使用） |
| `--full-auto` | 低摩擦本地工作快捷方式：设置 `on-request` 审批和 `workspace-write` 沙箱 |
| `--image, -i <path>` | 将图像文件附加到初始提示词 |
| `--model, -m <string>` | 覆盖配置的模型 |
| `--no-alt-screen` | 禁用 TUI 的替代屏幕模式 |
| `--oss` | 使用本地开源模型（需要 Ollama） |
| `--profile, -p <string>` | 加载配置文件配置（Profile） |
| `--sandbox, -s` | 选择沙箱策略：`read-only`、`workspace-write`、`danger-full-access` |
| `--search` | 启用实时网络搜索（而非缓存模式） |
| `PROMPT` | 可选的文字指令，省略则启动 TUI |

---

## 主要子命令

| 命令 | 稳定性 | 说明 |
|------|--------|------|
| `codex` | 稳定 | 启动交互式终端界面 |
| `codex app` | 稳定 | 启动 Codex 桌面 App（macOS） |
| `codex apply` | 稳定 | 将云端任务的 Diff 应用到本地仓库 |
| `codex cloud` | 实验性 | 从终端管理云端任务 |
| `codex exec` | 稳定 | 非交互式运行（别名：`codex e`） |
| `codex fork` | 稳定 | 从之前的会话创建新线程 |
| `codex login` | 稳定 | 通过 OAuth 或 API 密钥认证 |
| `codex logout` | 稳定 | 移除存储的凭证 |
| `codex mcp` | 实验性 | 管理 MCP 服务器 |
| `codex resume` | 稳定 | 继续之前的交互式会话 |
| `codex sandbox` | 实验性 | 在沙箱策略下运行命令 |

---

## exec 子命令专属选项

| 选项 | 说明 |
|------|------|
| `--color <always\|never\|auto>` | 控制 ANSI 颜色输出 |
| `--ephemeral` | 运行但不保存会话文件 |
| `--json` | 以 JSON Lines（JSONL）格式输出所有事件流 |
| `--output-last-message, -o <path>` | 将最终回复写入文件 |
| `--output-schema <path>` | 用 JSON Schema 验证响应格式 |
| `--skip-git-repo-check` | 允许在 Git 仓库外运行 |

---

## 使用示例

```bash
# 启动交互式会话
codex

# 直接运行任务
codex "解释这个项目的架构"

# 指定模型
codex -m gpt-5.3-codex "重构 src/utils.ts"

# 附加图片
codex -i screenshot.png "实现这个 UI 设计"

# 非交互式（用于 CI）
codex exec "运行代码审查并输出结果"

# 完全自动化（受控环境）
codex --full-auto "修复所有 lint 错误"
```

---

## 安全建议

- 避免在专用沙箱环境外同时使用 `--full-auto` 和 `--dangerously-bypass-approvals-and-sandbox`
- 优先使用 `--add-dir` 进行选择性目录访问，而非强制使用 `danger-full-access`
- 在 CI 管道中，将 `--json` 与 `--output-last-message` 结合使用

## 配置优先级

命令行标志 > 配置文件 `~/.codex/config.toml` 中的默认值
