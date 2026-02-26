---
title: Codex App Settings 中英对照（详细）
sidebar_position: 3
description: Codex 应用常见设置项的英文到中文翻译、功能说明、推荐值与风险提示。
---

# Codex App Settings 中英对照

说明：

- 本文按设置分组给出英文原词、中文翻译、用途、推荐值。
- 不同版本的 Codex 客户端，实际文案可能略有差异。
- 本对照面向“日常可操作配置”，便于团队统一术语。

## 1. General（通用）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Language | 语言 | 设置应用显示语言。 | 跟随团队文档语言，中文团队建议 `中文`。 |
| Theme | 主题 | 界面亮色/暗色外观。 | 长时间工作建议暗色。 |
| Font Size | 字体大小 | 编辑区与界面字体尺寸。 | 默认 +1 更利于阅读。 |
| Auto Update | 自动更新 | 自动检查并安装新版本。 | 开启。 |
| Start on Login | 开机启动 | 系统登录时自动启动应用。 | 仅高频使用者开启。 |
| Restore Last Session | 恢复上次会话 | 重启后恢复历史会话。 | 开启。 |

## 2. Account（账户）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Sign In | 登录 | 使用账户登录客户端。 | 使用团队统一账号体系。 |
| Sign Out | 退出登录 | 清除当前登录状态。 | 换人使用设备时必须执行。 |
| Workspace | 工作空间 | 切换当前工作目录集合。 | 与项目仓库一一对应。 |
| Profile | 个人资料 | 查看用户信息与偏好。 | 定期核对身份信息。 |
| Session Token | 会话令牌 | 当前鉴权令牌。 | 不外泄，失效及时重登。 |

## 3. Model（模型）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Model | 模型 | 选择当前对话使用模型。 | 默认使用团队基线模型。 |
| Reasoning Effort | 推理强度 | 控制思考深度与耗时。 | 日常中等，复杂问题提高。 |
| Temperature | 温度 | 控制输出随机性。 | 文档/代码场景 0.1-0.3。 |
| Max Tokens | 最大输出长度 | 限制单次回复长度。 | 依据任务调整，避免过小。 |
| Streaming Output | 流式输出 | 回复逐步显示。 | 开启，提升交互反馈。 |

## 4. Context（上下文）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Include Workspace Files | 包含工作区文件 | 允许读取项目文件作为上下文。 | 开启。 |
| File Exclusion Patterns | 文件排除规则 | 排除大文件/敏感文件。 | 排除构建产物和密钥文件。 |
| Context Window | 上下文窗口 | 可使用历史内容上限。 | 默认，复杂任务可提高。 |
| Memory | 记忆 | 保存偏好和长期上下文。 | 团队协作场景建议开启。 |
| Clear Context | 清空上下文 | 清除当前会话上下文。 | 出现串话时立即执行。 |

## 5. Tools（工具）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Terminal Access | 终端访问 | 允许执行命令行。 | 开启，并限制高危命令。 |
| File Write Access | 文件写入权限 | 允许修改文件。 | 最小权限原则。 |
| Network Access | 网络访问 | 允许联网检索。 | 默认关闭，按需开启。 |
| Browser Tool | 浏览器工具 | 网页搜索/打开页面。 | 仅在需核实信息时开启。 |
| Tool Confirmation | 工具确认 | 高风险操作前二次确认。 | 开启。 |

## 6. Code Editing（代码编辑）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Apply Patch | 应用补丁 | 以 patch 方式修改文件。 | 开启，方便审阅差异。 |
| Auto Format on Save | 保存时自动格式化 | 保存后自动运行格式化。 | 视项目规范决定。 |
| Lint on Change | 变更时检查 | 修改后自动 lint。 | 开启。 |
| Show Diff Preview | 显示差异预览 | 提交修改前查看 diff。 | 开启。 |
| Safe Edit Mode | 安全编辑模式 | 阻止破坏性覆盖。 | 开启。 |

## 7. Notifications（通知）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Desktop Notifications | 桌面通知 | 任务完成时系统通知。 | 开启。 |
| Sound | 声音提醒 | 通知声音开关。 | 根据办公环境决定。 |
| Mentions Only | 仅提及提醒 | 仅关键事件提醒。 | 团队协作建议开启。 |

## 8. Privacy & Security（隐私与安全）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Data Collection | 数据采集 | 匿名诊断数据上传。 | 依据公司政策。 |
| Crash Reports | 崩溃报告 | 崩溃时上传错误日志。 | 建议开启。 |
| Redact Sensitive Data | 敏感信息脱敏 | 输出前隐藏密钥等字段。 | 必开。 |
| Command Allowlist | 命令白名单 | 只允许指定命令前缀。 | 团队统一维护。 |
| Secret Scanning | 密钥扫描 | 检测明文密钥。 | 必开。 |

## 9. Advanced（高级）

| English | 中文 | 用途说明 | 推荐 |
| --- | --- | --- | --- |
| Experimental Features | 实验功能 | 新特性开关。 | 仅测试环境开启。 |
| Custom Prompt Template | 自定义提示模板 | 预设系统提示词模板。 | 由团队统一模板。 |
| MCP Server | MCP 服务 | 外部资源/能力接入。 | 按任务启用，来源可信。 |
| Automation | 自动化任务 | 定时执行固定任务。 | 明确输入输出后再开启。 |
| Reset Settings | 重置设置 | 恢复默认配置。 | 问题排查最后手段。 |

## 10. 翻译统一规范建议

为保持团队术语统一，建议固定用词：

- `Settings` -> `设置`
- `Workspace` -> `工作区`
- `Session` -> `会话`
- `Model` -> `模型`
- `Prompt` -> `提示词`
- `Tool` -> `工具`
- `Automation` -> `自动化`
- `Allowlist` -> `白名单`
- `Redact` -> `脱敏`

## 11. 推荐基线配置（团队版）

1. 开启 `Tool Confirmation`、`Safe Edit Mode`、`Redact Sensitive Data`。
2. 默认关闭 `Network Access`，只有查证场景临时开启。
3. `Temperature` 设为低值，保证代码与文档结果稳定。
4. 开启 `Show Diff Preview`，所有修改先看 diff 再落盘。
5. 统一术语翻译，文档中不要混用同义词。
