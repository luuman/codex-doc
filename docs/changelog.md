---
title: 更新日志
description: Codex CLI 和 App 的版本更新记录
sidebar_position: 20
---

# 更新日志

## 2026 年 2 月

### Codex CLI 0.105.0（2026-02-25）

**安装**：`npm install -g @openai/codex@0.105.0`

**主要新功能：**

- **语法高亮**：TUI 现支持代码块和 Diff 的语法高亮
- **主题选择器**：新增 `/theme` 命令，支持实时预览切换主题
- **语音转录**（实验性）：按空格键录音并转录为文字
- **多智能体改进**：`spawn_agents_on_csv` 支持进度追踪
- **新 TUI 命令**：
  - `/copy`：复制最近一条助手回复
  - `/clear` / `Ctrl-L`：清除屏幕
- **增强的审批控制**：支持额外沙箱权限和选择性拒绝
- **App Server 改进**：支持按标题搜索线程、暴露状态信息、内联返回最新轮次结果

**修复：**
- 长链接在换行时保持可点击
- TUI 交互优化（消息编辑、后续提示、审批对话框）
- `@` 符号在输入框中的解析可靠性提升
- WebSocket 处理对线程监听器的稳定性改善
- Linux 沙箱 `/dev` 挂载修复（确保正确的设备节点）
- JavaScript REPL 内核失败报告改进

---

### Codex App 26.217（2026-02-17）

- 支持拖放排序队列中的消息
- 新增模型降级警告
- 增强文件工作流：模糊搜索和附件恢复功能

---

### Codex CLI 0.104.0（2026-02-18）

**安装**：`npm install -g @openai/codex@0.104.0`

**新功能：**
- 通过 `WS_PROXY`/`WSS_PROXY` 环境变量支持 WebSocket 代理
- App Server v2 支持线程归档/取消归档通知
- 命令执行使用独立审批 ID

**修复：**
- `Ctrl+C`/`Ctrl+D` 在切换目录提示中的退出行为
- 安全检查降级准确性提升

---

### Codex CLI 0.103.0（2026-02-17）

- App 列表响应新增更丰富的应用详情（`app_metadata`、品牌信息、标签）
- 提交共同作者归属改用托管 `prepare-commit-msg` 钩子
- 移除 `remote_models` 功能标志

---

### Codex CLI 0.102.0（2026-02-17）

**主要变更：**
- 统一权限流程，通过斜杠命令管理沙箱访问
- 结构化网络访问审批（包含主机/协议上下文）
- App Server 文件模糊搜索 + 会话完成信号
- 可通过配置自定义多智能体角色
- 新增模型路由通知

**修复：**
- 恢复/回退时远程图片附件持久化
- 屏幕阅读器动画开关无障碍优化
- 内存中活跃线程的恢复行为

---

> 查看完整的历史更新日志，请访问 [developers.openai.com/codex/changelog](https://developers.openai.com/codex/changelog)。
