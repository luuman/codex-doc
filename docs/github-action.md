---
title: GitHub Action
description: 在 CI/CD 流水线中使用 Codex GitHub Action
sidebar_position: 19
---

# GitHub Action

`openai/codex-action@v1` 让你可以在 GitHub Actions 工作流中自动化 Codex 任务，实现 CI/CD 集成。该 Action 负责安装 CLI、管理 Responses API 代理，并以指定权限执行 `codex exec`。

## 前置要求

- 将 OpenAI API 密钥保存为 GitHub Secret（`OPENAI_API_KEY`）
- 使用 Linux 或 macOS runner（Windows 需设置 `safety-strategy: unsafe`）
- 在调用 Action 之前 checkout 仓库
- 通过 `prompt` 或 `prompt-file` 参数提供任务指令

---

## 基本示例

```yaml
name: Codex 代码审查

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  codex-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: 运行 Codex 审查
        uses: openai/codex-action@v1
        with:
          prompt: "审查这次 PR 的代码改动，重点检查安全问题和边界情况"
          sandbox: workspace-write
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```

---

## 输入参数

| 参数 | 必需 | 说明 |
|------|------|------|
| `prompt` | 条件必需 | 任务指令（与 `prompt-file` 二选一） |
| `prompt-file` | 条件必需 | 从文件读取任务指令 |
| `sandbox` | 否 | 访问级别：`workspace-write`（默认）、`read-only`、`danger-full-access` |
| `safety-strategy` | 否 | 权限管理策略（默认：`drop-sudo`） |
| `codex-args` | 否 | 额外 CLI 标志（JSON 数组或 Shell 字符串格式） |
| `output-file` | 否 | 将最终回复保存到文件 |
| `model` | 否 | 指定使用的模型 |
| `effort` | 否 | 推理强度设置 |

---

## 安全控制

### 权限管理策略（safety-strategy）

| 策略 | 说明 |
|------|------|
| `drop-sudo`（默认） | 不可逆地移除 sudo 访问权限 |
| `unprivileged-user` | 以指定的非特权用户身份运行 Codex |

### 触发控制

```yaml
with:
  allow-users: "octocat,trusted-bot"   # 只允许特定用户触发
  allow-bots: "true"                    # 允许 Bot 触发
```

### 沙箱限制

结合 `sandbox: read-only` 用于只需读取代码的审查任务，最小化权限范围。

---

## 输出处理

Action 通过 `final-message` 输出最终回复：

```yaml
- name: 运行 Codex
  id: codex
  uses: openai/codex-action@v1
  with:
    prompt: "分析代码质量"

- name: 使用审查结果
  run: echo "${{ steps.codex.outputs.final-message }}"
```

结合 `--output-schema` 强制 JSON 输出格式，便于下游步骤处理。

---

## 常见使用场景

```yaml
# 自动代码审查
uses: openai/codex-action@v1
with:
  prompt: "审查 PR 改动，检查安全漏洞和代码质量"
  sandbox: read-only

# 发布前质量检查
uses: openai/codex-action@v1
with:
  prompt: "验证代码符合发布标准，检查文档完整性"

# 自动化代码迁移
uses: openai/codex-action@v1
with:
  prompt-file: .github/prompts/migration.md
  sandbox: workspace-write
```
