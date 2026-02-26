---
title: Codex 使用手册（详细版）
sidebar_position: 4
description: 面向团队的 Codex 实操手册，覆盖安装、配置、会话管理、代码协作、文档维护与故障处理。
---

# Codex 使用手册（详细版）

## 1. 目标读者与使用范围

本文面向以下角色：

- 文档维护者
- 开发工程师
- 项目管理员

适用范围：

- `docs-workspace` 多站点文档仓库
- `content/codex` 子站点日常维护

## 2. 环境准备

### 2.1 必备软件

- Node.js（建议与仓库一致）
- pnpm
- Git（支持子模块）

### 2.2 初次拉取

```bash
git clone <workspace-repo-url>
cd docs-workspace
git submodule update --init --recursive
pnpm install
```

### 2.3 基础健康检查

```bash
pnpm check:site-paths
pnpm start:codex
```

验证点：

- 页面可打开：`http://localhost:3009/codex-doc/docs`
- 导航栏可看到 `Codex`

## 3. 日常工作流

### 3.1 新增文档

1. 在 `content/codex/docs` 新建文件，例如 `xxx.md`。
2. 写入 front matter：

```md
---
title: 页面标题
sidebar_position: 10
description: 页面简介
---
```

3. 添加正文内容与必要链接。
4. 本地预览并修正样式/链接问题。

### 3.2 修改已有文档

1. 优先小步提交，每次只改一个主题。
2. 修改后检查：
   - 标题层级是否连续
   - 内链是否有效
   - 示例命令是否可执行
3. 完成后执行构建验证。

### 3.3 博客维护

- 路径：`content/codex/blog`
- 文件命名建议：`YYYY-MM-DD-topic.md`
- 发布前检查 tags 与 authors 是否存在。

## 4. Codex 会话使用规范

### 4.1 提问模板（推荐）

使用固定结构描述需求：

1. 背景：当前仓库/模块
2. 目标：希望完成什么
3. 约束：不能改什么、时间要求
4. 输出：希望返回代码、文档或命令

### 4.2 让输出可直接落地

推荐明确要求：

- “请直接改文件，不要只给建议”
- “改完请跑校验命令”
- “输出变更文件清单和关键差异”

### 4.3 高风险操作控制

以下操作必须先确认再执行：

- 删除文件或目录
- 重写历史或强制覆盖
- 批量替换跨多个子模块

## 5. 设置建议（与中英对照联动）

完整对照见：[Codex App Settings 中英对照（详细）](./app-settings-bilingual.md)

推荐先调这 6 项：

1. `Tool Confirmation`（开启）
2. `Safe Edit Mode`（开启）
3. `Redact Sensitive Data`（开启）
4. `Network Access`（默认关闭）
5. `Show Diff Preview`（开启）
6. `Temperature`（低）

## 6. 团队协作规范

### 6.1 提交规范

- 一次提交只做一类改动。
- 提交信息要包含模块名与目的，例如：
  - `docs(codex): add app settings bilingual glossary`
  - `docs(codex): refine onboarding manual`

### 6.2 评审清单

评审时重点检查：

- 是否误改其它站点内容
- 是否新增失效链接
- 术语翻译是否与基线一致
- 命令是否与当前仓库脚本一致

## 7. 常见故障与处理

### 7.1 子模块为空或未更新

```bash
git submodule sync --recursive
git submodule update --init --recursive
```

### 7.2 本地能跑，构建失败

排查顺序：

1. front matter 是否合法
2. 引用文件路径是否区分大小写
3. 是否有不可解析的 Markdown/MDX 语法

### 7.3 导航站点链接错误

检查以下文件是否一致：

- `src/shared-nav.ts`
- `sites.json`
- `configs/codex.config.ts`

## 8. 发布前检查清单（可直接照抄）

```bash
# 1) 拉取与同步
git pull
git submodule update --init --recursive

# 2) 本地校验
pnpm check:site-paths
pnpm build:codex

# 3) 预览（可选）
pnpm start:codex
```

人工检查：

- 首页可达
- 新页面出现在侧边栏
- 关键链接和代码块可读

## 9. 文档写作风格建议

- 标题短句化，避免过长。
- 一段只表达一个结论。
- 命令块可直接复制执行。
- 英文术语首次出现给出中文释义。
- 术语统一，不要混用“配置/设定/设置”等近义词。

## 10. 维护节奏建议

1. 每周清理一次过期文档链接。
2. 每两周复核一次术语翻译一致性。
3. 每月检查一次设置项对照是否跟随客户端更新。
