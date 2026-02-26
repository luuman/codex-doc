---
title: 身份认证
description: Codex 登录方式和凭证管理
sidebar_position: 14
---

# 身份认证

## 登录方式

### 方式一：ChatGPT 账号登录

打开浏览器窗口完成登录，登录后浏览器将访问令牌（Access Token）返回给 CLI 或 IDE 插件。

**特点：**
- 与 ChatGPT 工作区权限和企业设置集成
- 包含订阅方案内的使用额度

### 方式二：API 密钥认证

从 OpenAI 控制台获取 API 密钥：[platform.openai.com](https://platform.openai.com)

**特点：**
- 通过 OpenAI Platform 账号按用量计费
- 推荐用于 CI/CD 工作流
- 部分功能（如云端线程）不可用

---

## 云端访问的 MFA 要求

访问 Codex 云端功能必须启用多因素认证（MFA）：

> "如果你使用邮箱和密码登录，必须在账号上设置 MFA 才能访问 Codex 云端功能。"

使用社交账号（Google、Apple 等）登录的用户，可在对应平台配置 MFA。

---

## 凭证管理

登录凭证缓存在本地：

```
~/.codex/auth.json
```

管理员可通过 `cli_auth_credentials_store` 配置项控制存储位置：
- **文件存储**：保存到指定文件路径
- **操作系统凭证存储**：使用系统密钥链（Keychain/Credential Manager）

---

## 无头设备（Headless）认证

对于没有浏览器的远程环境，提供三种方案：

| 方案 | 说明 |
|------|------|
| **设备码认证**（Beta） | 通过另一台设备完成授权 |
| **复制缓存凭证** | 将 `~/.codex/auth.json` 从已认证的机器复制过来 |
| **SSH 端口转发** | 通过 SSH 隧道转发 localhost 回调 |

---

## 自定义模型提供商

如果使用非 OpenAI 的模型提供商，支持以下认证方式：
- OpenAI 认证（兼容 OpenAI API 格式的提供商）
- 环境变量认证
- 无认证（本地模型）

根据提供商的配置说明在 `config.toml` 中进行相应设置。
