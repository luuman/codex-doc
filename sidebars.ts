import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "首页",
    },
    {
      type: "category",
      label: "快速开始",
      collapsed: false,
      items: [
        "overview",
        "quickstart",
        "explore",
        "pricing",
      ],
    },
    {
      type: "category",
      label: "核心概念",
      collapsed: false,
      items: [
        "concepts/prompting",
        "concepts/customization",
        "concepts/multi-agents",
        "concepts/workflows",
        "concepts/models",
        "concepts/cyber-safety",
      ],
    },
    {
      type: "category",
      label: "Codex App",
      items: [
        "app/overview",
        "app/features",
        "app/settings",
        "app/review",
        "app/automations",
        "app/worktrees",
        "app/local-environments",
        "app/commands",
        "app/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "IDE 插件",
      items: [
        "ide/overview",
        "ide/features",
        "ide/slash-commands",
      ],
    },
    {
      type: "category",
      label: "命令行工具（CLI）",
      items: [
        "cli/overview",
        "cli/features",
        "cli/reference",
        "cli/slash-commands",
      ],
    },
    {
      type: "category",
      label: "网页端（Cloud）",
      items: [
        "cloud/overview",
        "cloud/environments",
        "cloud/internet-access",
      ],
    },
    {
      type: "category",
      label: "集成",
      items: [
        "integrations/github",
        "integrations/slack",
        "integrations/linear",
      ],
    },
    {
      type: "category",
      label: "配置",
      items: [
        "config/basic",
        "config/reference",
        "rules",
        {
          type: "doc",
          id: "guides/agents-md",
          label: "AGENTS.md",
        },
        "mcp",
        "skills",
        "multi-agent",
      ],
    },
    {
      type: "category",
      label: "管理",
      items: [
        "auth",
        "security",
        "windows",
      ],
    },
    {
      type: "category",
      label: "自动化",
      items: [
        "noninteractive",
        "sdk",
        "github-action",
      ],
    },
    {
      type: "doc",
      id: "changelog",
      label: "更新日志",
    },
  ],
};

export default sidebars;
