---
title: GitHub 集成
description: Codex 与 GitHub 的代码审查集成
sidebar_position: 1
---

# GitHub 集成

Codex 与 GitHub 深度集成，支持在 Pull Request 中直接触发代码审查和任务执行，无需离开 GitHub 平台。

## 前置条件

1. 完成[云端环境配置](../cloud/environments)
2. 在 Codex 设置中找到对应仓库，开启 **"Code review"** 开关

---

## 手动触发代码审查

在 Pull Request 中添加评论：

```
@codex review
```

Codex 会：
1. 用 👀 反应表示已收到请求
2. 发布结构化代码审查，格式与标准 GitHub 代码审查一致

---

## 自动代码审查

在 Codex 设置中开启 **"Automatic reviews"**，之后所有新建的 Pull Request 都会自动触发 Codex 审查，无需手动 `@` 提及。

---

## 通过 AGENTS.md 自定义审查规则

在仓库中创建包含审查规则的 `AGENTS.md` 文件：

```markdown
## Review guidelines

- 不要记录 PII（个人身份信息）。
- 验证每个路由都被认证中间件包裹。
- API 响应中不要暴露内部错误信息。
```

**就近原则**：Codex 会使用离改动文件最近的 `AGENTS.md` 中的规则，适合为特定子模块设置专属审查规范。

**临时覆盖**：在 PR 评论中直接指定审查重点：

```
@codex review 重点检查安全回归问题
```

---

## 超出代码审查：执行任务

在 PR 或 Issue 中使用 `@codex` 加上其他指令，Codex 会以该 PR/Issue 为上下文执行云端任务：

```
@codex 修复 CI 失败
```

```
@codex 根据这个 Issue 实现功能
```

---

## 严重程度过滤

GitHub 集成默认只标记 **P0 和 P1** 级别的问题。可在 `AGENTS.md` 中调整严重程度阈值：

```markdown
## Review guidelines

- 报告所有级别的问题，包括 P2 和建议。
```
