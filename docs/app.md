---
title: Codex App
description: macOS 桌面端 Codex 指挥中枢使用指南
sidebar_position: 5
---

# Codex App

Codex App 是你的编程指挥中枢——一款专注于 macOS 的桌面应用，支持并行运行多个 Codex 任务线程，并深度集成 Git 工作流和 Worktree 支持。

## 系统要求

- **操作系统**：macOS（当前版本仅支持 macOS）
- **芯片**：Apple Silicon（M 系列芯片）
- **账号**：ChatGPT Plus、Pro、Business、Edu 或 Enterprise，或 OpenAI API 密钥

## 开始使用

1. 下载并安装 Codex App
2. 登录：使用 ChatGPT 账号或 OpenAI API 密钥
3. 选择项目文件夹，开始发起任务

:::note
使用 API 密钥登录时，云端线程等功能可能不可用。
:::

---

## 核心功能

### 多任务与组织管理

- **并行运行**：同时在多个项目中运行多个任务线程
- **快速切换**：在活跃线程间快速跳转，无需等待单个任务完成
- **收件箱系统**：集中管理 Codex 的发现和建议

### 版本控制集成

- **内置 Git 工具**：直接在 App 内查看代码差异（Diff）
- **行内注释**：对代码块添加注释说明
- **精细化暂存**：按代码块粒度暂存（Stage）或撤销（Revert），无需离开 App
- **直接提交**：在 App 内完成 Git 提交操作

### 内置开发环境

- **独立终端**：每个线程有专属终端，用于测试和调试
- **服务器支持**：可运行开发服务器和自定义脚本
- **代码解释器**：集成代码解释器，支持更复杂的分析任务

---

## 高级功能

### Git Worktree 支持

Codex App 支持 Git Worktree，为每个并行任务提供独立的代码工作空间，避免任务间的代码冲突。配合 Worktree 设置脚本，可为每个任务自动配置本地开发环境。

### Skills（技能）

在 App 中定义的 Skills 可跨平台复用：同一组 Skills 在 App、CLI 和 IDE 插件中均可使用。

### MCP 集成

通过 Model Context Protocol（MCP）连接第三方工具，扩展 Codex 的能力范围。

### 自动化任务

将 Skills 与自动化（Automations）结合，在后台定期执行重复性任务，如扫描代码提交、生成发布说明等。

---

## 与其他工具协同

- **IDE 插件同步**：App 与 IDE 插件共享自动上下文（Auto Context）和线程记录
- **CLI 互通**：在 App 中创建的配置和 Skills 可在命令行中使用

---

## 故障排查

如遇问题，请参阅官方文档的故障排查章节，或通过帮助中心提交支持请求。
