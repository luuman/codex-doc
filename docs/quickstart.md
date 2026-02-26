---
title: 快速入门
description: 4 种方式快速上手 Codex
sidebar_position: 3
---

# 快速入门

本指南介绍使用 Codex 的 4 种方式，帮助你在 5 分钟内完成配置并开始第一个任务。

**前提条件**：需要 ChatGPT Plus、Pro、Business、Edu、Enterprise 订阅，或 OpenAI API 余额。

---

## 方式一：Codex App（macOS）{#app}

适合需要多任务并行和深度 Git 集成的用户。

**要求**：配备 Apple Silicon 芯片的 Mac。

**步骤**：
1. 下载并安装 Codex App（仅支持 Apple Silicon Mac）
2. 使用 ChatGPT 账号或 OpenAI API 密钥登录
3. 选择一个项目文件夹
4. 开始在本地发起任务

:::note
使用 OpenAI API 密钥登录时，云端线程等部分功能不可用。
:::

---

## 方式二：IDE 插件{#ide-extension}

适合在编辑器中工作、希望无缝集成的用户。

**支持的编辑器**：
- Visual Studio Code
- Cursor
- Windsurf
- VS Code Insiders

**步骤**：
1. 在对应编辑器的插件市场搜索并安装 Codex 插件
2. 安装后，Codex 会出现在编辑器侧边栏
3. 默认以 Agent 模式运行，支持读取文件、执行命令和修改代码

:::tip
建议在任务执行前后创建 Git 检查点（checkpoint），便于回退。
:::

---

## 方式三：命令行工具（CLI）{#cli}

适合终端用户、脚本自动化和 CI/CD 集成场景。

**支持平台**：macOS、Linux，Windows（实验性，推荐 WSL）

### 安装

**通过 npm：**
```bash
npm install -g @openai/codex
```

**通过 Homebrew：**
```bash
brew install codex
```

### 启动

在项目目录下运行：
```bash
codex
```

首次使用时，会引导你使用 ChatGPT 账号或 API 密钥完成身份验证。

:::tip
建议在执行任务前后创建 Git 检查点，保证代码安全。
:::

---

## 方式四：网页端{#web}

适合需要云端任务、实时监控和跨设备工作的场景。

**访问地址**：[chatgpt.com/codex](https://chatgpt.com/codex)

**步骤**：
1. 在环境设置中连接你的 GitHub 仓库
2. 创建任务并实时监控进度
3. 通过差异（Diff）视图查看代码改动
4. 直接从界面创建 Pull Request

---

## 示例任务

上手后，可以尝试以下提示词：

```
分析这个项目，告诉我它的架构和主要功能
```

```
在这个仓库里构建一个经典贪吃蛇游戏
```

```
找出并修复我代码库中的 Bug，只做高置信度的最小改动
```

更多示例请参阅[示例探索](./explore)页面。
