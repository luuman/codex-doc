---
title: 规则文件
description: 使用 Rules 文件控制命令执行权限
sidebar_position: 10
---

# 规则文件（Rules）

Rules 功能允许管理员精细控制哪些命令可以在沙箱外执行。这是一个实验性功能，可能会发生变化。

## 规则文件位置

规则文件以 `.rules` 格式存储在 `~/.codex/rules/` 目录下：

```
~/.codex/rules/default.rules
```

---

## 规则语法

规则文件使用 **Starlark** 语法（类似 Python，但无副作用，安全执行）。

### 核心规则类型：`prefix_rule()`

```python
prefix_rule(
    pattern = ["git", "add"],          # 必需：命令前缀（字符串或 union）
    decision = "allow",                # 可选：allow（默认）| prompt | forbidden
    justification = "允许暂存文件",    # 可选：规则说明
    match = ["git add src/"],          # 可选：匹配示例（用于验证）
    not_match = ["git add ."],         # 可选：不匹配示例
)
```

**`pattern` 支持的写法：**

```python
# 固定命令前缀
pattern = ["npm", "install"]

# 多选 union
pattern = ["git", ["add", "commit", "push"]]
```

---

## 决策优先级

当多条规则同时匹配时，系统执行最严格的决策：

```
forbidden > prompt > allow
```

---

## Shell 命令的特殊处理

### 安全脚本拆分

对于只使用简单操作符（`&&`、`||`、`;`、`|`）的 Shell 脚本，Codex 使用 tree-sitter 解析并分别评估每个命令，防止危险命令通过复合语句绕过规则。

### 保守处理

包含高级特性（重定向、变量替换、通配符）的脚本会作为单个调用整体匹配。

---

## 测试规则

使用 `codex execpolicy check` 测试规则是否正确匹配：

```bash
codex execpolicy check --pretty \
  --rules ~/.codex/rules/default.rules \
  -- git add src/
```

输出 JSON，显示：
- 最严格的决策结果
- 匹配的规则列表及其理由

---

## 规则部署

- Codex 在启动时从所有团队配置位置扫描规则目录
- 用户批准的命令会自动写入 `~/.codex/rules/default.rules`
- 管理员可通过 `requirements.toml` 强制执行限制性规则

---

## 示例规则文件

```python
# 允许常用 Git 操作
prefix_rule(
    pattern = ["git", ["status", "log", "diff", "show"]],
    decision = "allow",
    justification = "只读 Git 操作",
)

# 需要确认的破坏性 Git 操作
prefix_rule(
    pattern = ["git", ["push", "reset", "clean"]],
    decision = "prompt",
    justification = "破坏性 Git 操作需要确认",
)

# 禁止强制推送
prefix_rule(
    pattern = ["git", "push", "--force"],
    decision = "forbidden",
    justification = "禁止强制推送",
)
```
