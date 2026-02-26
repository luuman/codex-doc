---
title: 安全配置
description: Codex 沙箱、审批策略和安全最佳实践
sidebar_position: 15
---

# 安全配置

Codex 通过两层互补的安全机制保护你的环境：

- **沙箱模式（Sandbox Mode）**：控制智能体在技术层面可以执行哪些操作
- **审批策略（Approval Policy）**：决定何时需要人工确认才能继续

---

## 各平台的沙箱实现

| 平台 | 实现方式 |
|------|----------|
| Codex Cloud | OpenAI 管理的隔离容器；两阶段运行时（初始化阶段有网络，智能体阶段默认离线） |
| macOS（CLI/IDE） | Seatbelt 策略（`sandbox-exec`） |
| Linux（CLI/IDE） | Landlock + seccomp（可选 bwrap 替代方案） |
| Windows（CLI/IDE） | WSL 沙箱或原生 Windows 沙箱实现 |

---

## 默认安全配置

系统根据项目状态自动推荐设置：

| 项目状态 | 推荐配置 |
|----------|----------|
| 在 Git 仓库中 | 自动模式 + `on-request` 审批 |
| 未版本控制的目录 | 只读模式 |

**受保护路径**（无论写权限如何，始终只读）：
- `.git/`
- `.agents/`
- `.codex/`

默认工作区通常包含当前目录和 `/tmp`。

---

## 审批策略配置

```bash
# 工作区外的文件编辑和网络访问需要审批
codex --ask-for-approval on-request

# 自动允许安全读操作；修改状态的命令需要审批
codex --ask-for-approval untrusted

# 禁用所有提示（谨慎使用）
codex --ask-for-approval never
```

---

## 网络访问控制

本地环境默认**禁用网络访问**。如需启用：

```toml
# ~/.codex/config.toml
[sandbox_workspace_write]
network_access = true
```

网络搜索默认使用**缓存模式**（预索引结果），降低提示词注入风险，而非实时抓取。

---

## 遥测与监控（OpenTelemetry）

遥测功能默认**关闭**，需要显式启用：

```toml
[otel]
environment = "staging"
exporter = "otlp-http"
log_user_prompt = false   # 保持 false，除非策略明确允许
```

:::caution
保持 `log_user_prompt = false`，除非组织策略明确允许存储提示词内容——源代码中可能包含敏感数据。
:::

开启后记录：对话记录、API 请求、流活动、工具决策。

---

## 安全最佳实践

1. **保持干净的 Git 状态**：在委托给 Codex 前提交或暂存本地改动
2. **使用 Patch 工作流**：更容易审查和回退
3. **像对待代码审查一样对待 Codex 的建议**：验证、查看 Diff、附上说明提交
4. **定期检查遥测事件**：排查意外的命令执行
5. **生产环境谨慎使用高权限模式**：优先从 `on-request` 审批开始，在充分了解工作流后再考虑提升权限
