---
title: 非交互模式
description: 在脚本和 CI/CD 中使用 codex exec
sidebar_position: 17
---

# 非交互模式

非交互模式允许在脚本和 CI/CD 流水线中运行 Codex，无需交互式终端界面。通过 `codex exec` 子命令调用。

## 基本用法

```bash
codex exec "你的任务提示词"
```

**输出行为：**
- 执行进度流式输出到 **stderr**
- 最终回复消息输出到 **stdout**（可管道传输）

---

## 适用场景

- CI/CD 流水线中的代码审查
- 提交前质量检查（pre-merge checks）
- 定时自动化任务（代码扫描、报告生成）

---

## 权限设置

默认以**只读模式**运行。自动化场景中按需提升权限：

```bash
# 允许编辑文件
codex exec --full-auto "修复所有 lint 错误"

# 更宽泛的访问（仅限受控环境）
codex exec --sandbox danger-full-access "执行任务"
```

:::caution
在 CI 环境中，仔细评估所需的最低权限。优先使用 `workspace-write` 而非 `danger-full-access`。
:::

---

## 机器可读输出（JSONL）

使用 `--json` 标志获取结构化事件流：

```bash
codex exec --json "审查代码改动" | jq '.'
```

JSONL 事件类型包括：
- 线程/轮次生命周期事件
- 消息内容更新
- 工具调用详情

---

## 结构化输出验证

使用 `--output-schema` 强制响应符合特定格式：

```bash
codex exec \
  --output-schema ./schemas/review-result.json \
  "审查代码并返回结构化结果"
```

`--output-schema` 接受 JSON Schema 文件路径，用于验证响应的数据结构，适合下游自动化处理。

---

## CI 认证

在 CI 环境中，通过环境变量传递 API 密钥，而非依赖本地保存的认证信息：

```bash
export CODEX_API_KEY="your-api-key"
codex exec "..."
```

---

## 会话恢复

继续之前的运行：

```bash
# 继续最近一次会话
codex exec resume --last "后续任务"

# 继续指定会话
codex exec resume <SESSION_ID> "后续任务"
```

---

## Git 仓库要求

Codex 默认要求在 Git 仓库中运行。在非 Git 目录中使用：

```bash
codex exec --skip-git-repo-check "..."
```

---

## CI 示例

```yaml
# GitHub Actions 示例
- name: Codex 代码审查
  env:
    CODEX_API_KEY: ${{ secrets.CODEX_API_KEY }}
  run: |
    codex exec \
      --json \
      --output-last-message review-result.txt \
      "审查 PR 中的改动，重点关注安全问题"
```
