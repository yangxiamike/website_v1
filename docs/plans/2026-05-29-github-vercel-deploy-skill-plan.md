# GitHub Vercel Deploy Skill Plan

日期：2026-05-29

## 目标

为仓库新增一个可复用的 `github-vercel-deploy` skill，帮助后续把类似 `sites/<company-id>/app` 的前端 demo 以优先 `GitHub -> Vercel`、尽量 no-token 的方式部署出去。

## 范围

- 新增 `skills/github-vercel-deploy/SKILL.md`
- 新增 `skills/github-vercel-deploy/agents/openai.yaml`
- 新增一份简短 reference，沉淀首次接入和复用检查清单
- 不在这次改动里直接接通真实 Vercel API 或新建 plugin

## 设计原则

- 优先 GitHub 集成自动部署，不把 `vercel deploy` 当默认主路径
- 把 no-token 部署理解为“依赖 GitHub -> Vercel 自动部署链路”，不是依赖本地脚本硬发
- 先做项目检查、构建验证、根目录/产物目录确认，再给部署动作建议
- 兼容当前没有现成 Vercel plugin 的环境

## 计划步骤

1. 参考现有 skill 结构和 skill-creator 规范，确定最小 skill 目录形态
2. 编写 `SKILL.md`，明确适用场景、推荐路径、首次接入流程、异常分支
3. 编写 `agents/openai.yaml`，补齐 UI 元信息
4. 增加 reference，沉淀 Vercel 首次绑定和后续复用检查表
5. 自查文件结构与文案，随后更新开发日志

## 验证

- 检查新增 skill 文件结构是否与仓库现有 skill 一致
- 检查 `openai.yaml` 字段是否符合 skill-creator 参考格式
- 确认 skill 明确区分 plugin、skill、GitHub 自动部署和 no-token 语义
