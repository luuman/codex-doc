---
title: Windows 支持
description: 在 Windows 上使用 Codex CLI 和 IDE 插件
sidebar_position: 16
---

# Windows 支持

Codex 通过 IDE 插件和 CLI 两种方式支持 Windows，均可从 PowerShell 运行。

## 原生 Windows 支持

### 沙箱配置

原生 Windows 环境下，Codex 实现的沙箱会将文件写入限制在工作目录，并阻断未经明确批准的网络访问。

在 `config.toml` 中配置：

```toml
[windows]
sandbox = "unelevated"  # 或 "elevated"
```

**elevated 模式**的实现：
- 使用受限令牌（Restricted Token）方法和文件系统 ACL
- 以专用沙箱用户身份运行命令
- 通过 Windows 防火墙规则限制网络访问

### 授予沙箱读取权限

当命令因读取限制失败时：

```
/sandbox-add-read-dir C:\absolute\directory\path
```

---

## WSL2 方式（推荐）

如果遇到原生 Windows 兼容性问题，推荐使用 WSL2（Windows Subsystem for Linux 2）。

### 配置步骤

1. 安装 WSL 和 VS Code WSL 插件
2. 在 WSL 终端中打开 VS Code：
   ```bash
   code .
   ```
3. 验证连接：检查 VS Code 底部状态栏是否显示 `WSL: <发行版名称>`

### 在 WSL 中安装 Node.js

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

# 安装 Node.js 22
nvm install 22

# 安装 Codex CLI
npm i -g @openai/codex
```

### 性能优化

:::tip
将仓库存储在 Linux 原生路径（`~/code/...`）而非 Windows 挂载路径（`/mnt/c/...`），可获得显著更快的 I/O 性能。
:::

---

## 故障排查

| 问题 | 解决方案 |
|------|----------|
| IDE 插件无响应 | 安装 Visual Studio Build Tools（C++ 工作负载）和 Microsoft Visual C++ Redistributable（x64） |
| 性能缓慢 | 将仓库移出 `/mnt/c/` 到 WSL 原生目录 |
| `command not found: codex` | 使用 `which codex` 验证 PATH 配置 |
