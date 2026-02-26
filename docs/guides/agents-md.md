---
title: AGENTS.md
description: 为 Codex 提供持久化项目指引
sidebar_position: 1
---

# AGENTS.md

AGENTS.md 文件为 Codex 提供持久化的项目指引，随仓库一起维护，实现全局默认与项目特定配置的分层覆盖。

## 文件发现规则

Codex 按以下优先级构建指令链：

1. **全局范围**：`~/.codex/AGENTS.override.md` 或 `~/.codex/AGENTS.md`
2. **项目范围**：从 Git 根目录到当前工作目录，逐层检查 override 和标准文件
3. **合并顺序**：从根目录到当前目录依次拼接，越靠近当前目录的文件优先级越高

默认通过 `project_doc_max_bytes`（默认 32 KiB）控制读取字节上限。

---

## 全局配置

创建适用于所有项目的通用指引：

```bash
mkdir -p ~/.codex
```

在 `~/.codex/AGENTS.md` 中添加工作约定，例如：
- 测试自动化偏好
- 包管理器选择
- 依赖审批工作流
- 个人编码风格偏好

---

## 项目级分层

仓库级文件继承全局默认值，同时添加特定规范：

```markdown
# AGENTS.md

## 构建和测试
- 使用 `pnpm` 而非 npm 或 yarn
- 所有改动必须通过 `pnpm test` 和 `pnpm lint`

## 代码规范
- 组件使用函数式风格，避免类组件
- 所有 API 函数必须有 JSDoc 注释

## 提交约定
- 提交信息格式：`type(scope): description`
- 类型：feat、fix、docs、refactor、test
```

**就近原则**：在子目录（如支付服务）创建 `AGENTS.override.md` 以应用专属规则：

```markdown
# 支付服务专属规则
- 所有金额计算必须使用 decimal.js 避免浮点精度问题
- 支付相关代码变更需要额外的安全审查
```

---

## 自定义文件名

在 `~/.codex/config.toml` 中定义备用文件名：

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
```

---

## 验证与调试

测试指令发现是否正常工作：

```bash
codex --ask-for-approval never "总结当前指令的内容。"
```

**常见问题：**

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 文件未被读取 | 文件内容为空 | 空文件会被自动跳过 |
| 旧规则仍生效 | override 文件残留 | 检查并清理 override 文件 |
| 指令被截断 | 超过字节限制（32 KiB） | 精简文件内容 |

重启 Codex 即可重新加载指令链，无需手动清除缓存。

---

## 最佳实践

1. **保持简洁**：只包含频繁用到的规范，避免冗余信息
2. **就近原则**：将特定子系统的规则放在对应子目录下
3. **持续更新**：发现 Codex 反复犯同类错误时，添加对应规则
4. **测试验证**：使用调试命令确认规则被正确加载
