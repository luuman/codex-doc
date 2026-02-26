---
title: Skills（技能）
description: 创建和使用可复用的工作流技能
sidebar_position: 12
---

# Skills（技能）

Skills 通过封装指令、资源和可选脚本，扩展 Codex 对特定任务的处理能力，让 Codex 能够可靠地遵循工作流程。Skills 可在团队内共享或公开发布。

---

## 技能目录结构

```
my-skill/
├── SKILL.md              # 必需：指令和元数据
├── scripts/              # 可选：可执行脚本
├── references/           # 可选：参考文档
├── assets/               # 可选：模板和资源
└── agents/openai.yaml    # 可选：UI 配置和依赖声明
```

`SKILL.md` 格式：

```markdown
---
name: skill-name
description: 何时应该/不应该触发此技能的说明
---

技能的具体指令内容...
```

---

## Codex 如何使用技能

### 显式调用

用户直接触发：
- 使用 `/skills` 命令浏览和选择
- 使用 `$skill-name` 语法直接调用

```
$code-review 对最近的改动进行安全审查
```

### 隐式触发

Codex 根据任务描述自动匹配相关技能。隐式触发依赖清晰的 description 字段，过于模糊的描述可能导致错误触发。

---

## 创建技能

### 使用向导创建

```
$skill-creator
```

### 手动创建

1. 创建技能目录：`mkdir ~/.agents/skills/my-skill`
2. 创建 `SKILL.md`：

```markdown
---
name: my-skill
description: 当用户需要 [具体场景] 时使用此技能，不适用于 [反例]
---

## 步骤

1. 首先执行...
2. 然后验证...
3. 最后...

## 输入
- 文件路径
- 要求描述

## 输出
- 修改后的文件
- 变更摘要
```

---

## 技能存储位置

| 范围 | 路径 | 说明 |
|------|------|------|
| 仓库 | `.agents/skills/`（工作目录/父目录/仓库根目录） | 项目专属技能 |
| 用户 | `~/.agents/skills/` | 个人全局技能 |
| 管理员 | `/etc/codex/skills/` | 组织强制技能 |
| 系统 | 内置 | Codex 预置技能 |

---

## 管理技能

**安装技能：**

```
$skill-installer
```

**禁用技能**（在 `~/.codex/config.toml` 中）：

```toml
[[skills.config]]
name = "skill-name"
enabled = false
```

**自动检测更新**：Codex 自动检测技能文件的变化；如果更新未生效，重启 Codex 即可。

---

## 最佳实践

1. **单一职责**：每个技能专注于一项任务
2. **指令优先**：大多数场景下，明确的指令比脚本更有效
3. **清晰的步骤**：使用祈使语句定义清晰的输入/输出
4. **精准的描述**：description 字段直接影响隐式触发的准确性
