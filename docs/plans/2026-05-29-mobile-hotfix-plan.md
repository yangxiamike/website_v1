# 2026-05-29 Mobile Responsiveness Hotfix Plan

## Goal

针对 `templates/industrial-valve-react/app/` 做 landing page 与关键转化路径的移动端热修，范围仅限：

- Header / mobile menu
- Hero 首屏与 info bar
- 产品卡片
- RFQ / Contact 表单
- Footer
- 关键 CTA 按钮

## Constraints

- 只做 mobile responsiveness hotfix。
- 不重构整体设计语言。
- 不主动改变桌面端视觉表现。
- 不新增复杂功能。
- 优先保证 `375px`、`390px`、`430px`、`768px` 下：
  - 不横向溢出
  - 不重叠
  - CTA 可点击
  - 表单可填写
  - 导航可用

## Planned Changes

1. 调整固定 header 的移动端高度、logo 尺寸、CTA 显示策略与 mobile menu 面板可用性。
2. 压缩 landing hero 的文字宽度、按钮换行策略与底部 info bar 体量，避免首屏被大块统计卡占满。
3. 修正首页产品卡片在小屏下的图文比例、最小宽度与点击区域，避免内容拥挤或压缩失真。
4. 修正 RFQ / Contact 表单的栅格、文件上传行、提交区与辅助文案在小屏下的可读性与可填写性。
5. 调整 footer 各列在小屏下的跨列方式、logo 尺寸、长文本换行与底部条布局。
6. 统一检查关键 CTA 在小屏下的高度、宽度、换行和对齐，避免被遮挡或超出容器。

## Validation

1. 运行本地构建，确认没有引入编译错误。
2. 如可运行预览，检查首页、`/contact`、`/request-quote` 在 375 / 390 / 430 / 768 宽度下的关键区域。
3. 完成后在 `docs/development-log.md` 记录这次改动。
