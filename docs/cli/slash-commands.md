---
title: 斜杠命令
description: Codex CLI 会话内斜杠命令完整参考
sidebar_position: 4
---

# CLI 斜杠命令

在 CLI 的对话框中输入 `/` 激活命令菜单。

---

## 完整命令列表

| 命令 | 功能 |
|------|------|
| `/permissions` | 调整审批要求（Auto、Read Only 等） |
| `/sandbox-add-read-dir` | 为沙箱授予目录读取权限（仅 Windows） |
| `/agent` | 在活跃的智能体线程间切换 |
| `/apps` | 浏览并将连接器插入提示词 |
| `/compact` | 摘要对话以释放上下文 Token |
| `/diff` | 显示 Git Diff（包含未追踪文件） |
| `/exit` / `/quit` | 退出 CLI 会话 |
| `/experimental` | 切换可选功能（如多智能体） |
| `/feedback` | 向维护者提交诊断信息 |
| `/init` | 生成 `AGENTS.md` 脚手架 |
| `/logout` | 清除本地凭证 |
| `/mcp` | 列出已配置的 MCP 工具 |
| `/mention` | 将特定文件附加到对话 |
| `/model` | 选择模型和推理强度 |
| `/plan` | 进入规划模式（可带提示词） |
| `/personality` | 选择沟通风格（friendly、pragmatic、none） |
| `/ps` | 显示后台终端和最近输出 |
| `/fork` | 将当前对话克隆到新线程 |
| `/resume` | 从会话列表恢复已保存的对话 |
| `/new` | 在同一会话中开始新对话 |
| `/review` | 请求工作区分析 |
| `/status` | 显示会话配置和 Token 使用量 |
| `/debug-config` | 打印配置层次和要求 |
| `/statusline` | 自定义底部状态栏显示项 |

---

## 关键工作流

### 模型选择

使用 `/model` 在会话中途切换模型（如从通用模型切换到推理模型），无需重启 CLI。

### 对话管理

| 命令 | 场景 |
|------|------|
| `/new` | 开始全新对话（清空上下文） |
| `/fork` | 从当前对话分支出新线程（保留历史） |
| `/resume` | 重新打开之前保存的会话 |

### 审批控制

使用 `/permissions` 在不重启 CLI 的情况下更改权限设置：

```
/permissions
> 选择: Read Only / Auto / Full Access
```

### 上下文优化

在长时间对话后运行 `/compact`，摘要历史轮次、保留关键信息，为后续任务腾出上下文空间。
