# 项目开发日志

## 2026-05-29 - Landing Page Mobile Hotfix

1. 已保存计划：`docs/plans/2026-05-29-mobile-hotfix-plan.md`。
2. 调整 `templates/industrial-valve-react/app/src/components/Header.tsx`，收紧移动端 header 高度、logo 尺寸、菜单抽屉宽度，并补上打开菜单时锁定页面滚动。
3. 调整 `templates/industrial-valve-react/app/src/pages/Home.tsx`，压缩 hero 首屏按钮与 info bar 的移动端体量，并修正首页产品卡片的小屏单列表现。
4. 调整 `templates/industrial-valve-react/app/src/pages/RequestQuote.tsx`、`templates/industrial-valve-react/app/src/pages/Contact.tsx`，优化表单栅格、上传区、提交按钮和底部 CTA 在手机宽度下的可填写性。
5. 调整 `templates/industrial-valve-react/app/src/components/Footer.tsx`、`templates/industrial-valve-react/app/src/components/CTABanner.tsx`、`templates/industrial-valve-react/app/src/components/common.tsx`，统一移动端 CTA 宽度、页头高度与 footer 换行策略。
6. 验证：`templates/industrial-valve-react/app/` 下执行 `npm run build` 通过。

## 2026-05-29 - Demo 站点分层与默认运行入口澄清

1. 已保存计划：`docs/plans/2026-05-29-demo-mode-separation-plan.md`。
2. 新增 `docs/site-modes.md`，明确区分“完整版开发 demo”和“生成后的裁剪站”两类站点。
3. 更新 `templates/industrial-valve-react/app/README.md`，标记其为默认开发 demo 入口。
4. 更新 `sites/haiyue/app/README.md`、`sites/minimal-demo/app/README.md`、`sites/lean-demo/app/README.md`，标记其为生成结果站点而非主 demo。
5. 验证：本地已切换并启动 `templates/industrial-valve-react/app/`，产品页显示 `21` 个产品，包含完整行业筛选项。

## 2026-05-28 - React 模板 + Python 数据生成系统

1. 已保存计划：`docs/plans/2026-05-28-react-data-sitegen-plan.md`。
2. 更新计划：补充多模板目录、公司图片目录、不同资料详细度自适应显示。
3. 更新计划：第一版就按多模板准备，输出到 `sites/<company-id>/app/`，支持生成后客户定制。
4. 状态：待实施。
5. 目标：保留 React 作为第一套模板，用 Python 读取 `YAML/JSON` 公司资料并生成客户专属网站代码。

## 2026-05-28 - React 模板数据契约接入

1. 已保存计划：`docs/plans/2026-05-28-react-site-contract-bridge-plan.md`。
2. 新增 `templates/industrial-valve-react/app/src/data/siteSchema.ts`，定义模板数据契约类型。
3. 新增 `templates/industrial-valve-react/app/src/generated/siteData.ts`，提供当前模板兼容的生成数据样例与 `company/nav/pages/seo` 默认值。
4. 更新 `data/index.ts`、`Header.tsx`、`Footer.tsx`、`lib/seo.ts`，统一优先读取 `siteData`。
5. 验证：执行 `templates/industrial-valve-react/app` 下 `npm run build`，当前因未安装依赖导致 `tsc: command not found`，未进入代码构建阶段。

## 2026-05-28 - React 模板 + Python 数据生成系统实施

1. 将根目录 React 应用迁移为 `templates/industrial-valve-react/app/`，并补充 `template.config.yaml`、`template.fields.yaml`。
2. 新增 `content/companies/haiyue.yaml`、两份 `content/samples/` 测试资料，以及按公司隔离的 `assets/companies/` 图片目录。
3. 新增 `tools/sitegen/generate.py`，支持按模板和公司资料生成 `sites/<company-id>/app/`、`src/generated/siteData.ts` 和 `public/generated/<company-id>/` 图片。
4. 生成并验证 `sites/haiyue/app/`、`sites/minimal-demo/app/`、`sites/lean-demo/app/`，覆盖完整资料、最小资料和关闭可选页场景。
5. 验证：模板应用、完整生成站、最小资料站、关闭可选页站均已通过 `npm run build`。

## 2026-05-28 - 项目计划存档与开发日志规范

1. 新增 `AGENTS.md`，记录“大改动先存计划、完成后记日志”两条规则。
2. 新增 `docs/plans/`，用于保存大改动计划。
3. 新增 `docs/development-log.md`，用简短日期清单记录项目大改动。
