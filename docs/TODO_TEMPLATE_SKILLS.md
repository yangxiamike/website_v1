# TODO：工业询盘网站模板 Skill 沉淀

## 目的

记录后续需要沉淀的工业询盘网站模板设计与交付流程。
当前不要优先开发完整 Skill，只作为后续提醒保存。

目前项目优先级是：

1. 先用现有阀门 / 工业询盘模板去找真实客户
2. 做旧网站诊断和改版示意
3. 获取真实反馈和付费验证
4. 跑完 1–3 个真实项目后，再总结成正式 Skill

## 后续可能拆成 3 个 Skill

### 1. Design Strategy Skill

负责：

* 判断客户行业和网站目标
* 寻找/确定视觉风格
* 输出 Style DNA
* 设计页面结构
* 生成页面设计图 prompt

### 2. Kimi Prototype Skill

负责：

* 根据设计图实现 React / Vite 原型
* 复刻页面视觉
* 搭建组件、路由、页面数据
* 保持 Header、Footer、Card、Button、Form 等组件统一

### 3. Codex Postprocess Skill

负责：

* 审查 Kimi 代码
* 统一 design tokens
* 修复响应式
* 检查路由、表单、CTA
* 补齐 SEO、性能、部署准备
* 输出中文验收报告

## 当前备注

NexValve 这套工业红、无圆角、硬朗风格只是第一套模板 preset，不要把它写死成唯一风格。

后续真正要沉淀的是：

设计策略 → 页面设计图 → Kimi 原型实现 → Codex 后处理 → 人工验收 → 经验反哺

这个完整生产流程。

当前仅保存为待办提醒，不需要进一步实现。
