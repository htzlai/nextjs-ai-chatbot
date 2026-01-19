<a href="https://molycure.ai/">
  <img alt="Molycure AI - 企业出海落地 AI 执行平台" src="app/(chat)/opengraph-image.png">
  <h1 align="center">Molycure AI</h1>
</a>

<p align="center">
    Molycure AI 是一个面向企业"出海落地"的垂直型 AI 执行平台，将跨境扩张从高度依赖人工经验的咨询行为，转化为软件驱动、以执行为导向的系统化流程。
</p>

<p align="center">
  <a href="#核心价值"><strong>核心价值</strong></a> ·
  <a href="#功能特性"><strong>功能特性</strong></a> ·
  <a href="#技术架构"><strong>技术架构</strong></a> ·
  <a href="#本地运行"><strong>本地运行</strong></a>
</p>
<br/>

## 背景

在全球化碎片化、监管复杂度持续上升的背景下，越来越多企业希望进入新加坡及东南亚市场，但现实中往往面临一个核心问题：**信息很多，但"能真正落地执行"的路径极度缺失。**

传统工具与服务存在明显断层：
- 通用 AI 只能解释政策、概念，无法承担合规与执行责任
- 咨询公司依赖人工经验，成本高、周期长、不可复制
- 法律、税务、签证、GTM 等环节彼此割裂，没有统一的执行系统

Molycure AI 正是诞生于这一"执行断层"。

## 核心价值

> **Molycure AI 将跨境扩张从"高度依赖人工经验的咨询行为"，转化为"软件驱动、以执行为导向的系统化流程"。**

从背景上看，Molycure AI 解决的是三件事：

1. **把"模糊的出海想法"变成可执行路线图**
   - 明确市场、路径、时间表与关键风险节点

2. **把碎片化的法律/税务/合规信息，转化为决策逻辑**
   - 不只是"告诉你规则"，而是"告诉你下一步该做什么"

3. **把一次性、不可复制的咨询经验，变成持续演进的系统能力**
   - 能随着法规变化实时更新，适用于更多企业与市场

## 功能特性

- **智能对话界面** - 基于 AI SDK 构建的流畅对话体验
- **出海知识库** - 新加坡及东南亚市场的专业知识
- **执行路线图** - 可视化的出海执行计划
- **合规检查** - 法律、税务、签证等合规指引
- **文档生成** - 自动生成所需的商业文档

## 技术架构

- [Next.js](https://nextjs.org) App Router
  - React Server Components (RSCs) 和 Server Actions
- [AI SDK](https://ai-sdk.dev/docs/introduction)
  - 统一的 LLM API 接口
- [shadcn/ui](https://ui.shadcn.com)
  - [Tailwind CSS](https://tailwindcss.com) 样式
  - [Radix UI](https://radix-ui.com) 组件
- 数据持久化
  - PostgreSQL 数据库
  - Blob 存储

## 本地运行

1. 安装依赖：

```bash
pnpm install
```

2. 配置环境变量（参考 `.env.example`）

3. 初始化数据库：

```bash
pnpm db:migrate
```

4. 启动开发服务器：

```bash
pnpm dev
```

应用将在 [localhost:3000](http://localhost:3000) 运行。

---

<p align="center">
  <strong>Molycure AI</strong> - 让企业出海更简单
</p>
