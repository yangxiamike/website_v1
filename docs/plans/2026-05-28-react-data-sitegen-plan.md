# React 模板 + Python 数据生成系统计划

## Summary

保留现在的 Vite/React 网站作为第一套“可继续修改的模板”，不把整站改成 Jinja2 HTML。第一版就按多模板架构准备：模板放在 `templates/`，公司资料放在 `content/`，公司图片放在 `assets/`，客户站点输出到 `sites/`。Python 生成层读取指定模板和指定公司资料，校验必填项、判断可选页面，生成一个可继续定制的客户网站副本。以后改通用能力时改模板；以后换公司时改资料和图片；以后客户有专属需求时改 `sites/<company-id>/app/`。

## Key Changes

- 新增公司资料入口：`content/companies/haiyue.yaml` 作为第一份样例数据，字段覆盖公司信息、Logo、首页文案、产品、产品详情、行业、案例、工厂能力、FAQ、SEO、联系信息。
- 新增公司图片入口：`assets/companies/<company-id>/`，按公司存放 Logo、首页图、产品图、案例图、证书图等，不把多家公司图片混在模板目录里。
- 建立多模板目录：使用 `templates/<template-id>/` 管理不同网站模板；当前 `app/` 迁移为第一套模板 `templates/industrial-valve-react/app/`。
- 每个模板必须带两份说明文件：`template.config.yaml` 描述模板身份和构建方式，`template.fields.yaml` 描述这个模板需要/支持哪些文字资料和图片资料。
- 新增生成脚本：`tools/sitegen/generate.py`，命令固定为：

```bash
python tools/sitegen/generate.py --template industrial-valve-react --company content/companies/haiyue.yaml
```

- 脚本输出到客户站点副本：`sites/<company-id>/app/`。脚本运行后，`sites/haiyue/app/` 就是一个可继续开发、构建和部署的客户网站代码。
- 客户站点里的自动生成文件固定放在 `sites/<company-id>/app/src/generated/siteData.ts`，公司图片复制到 `sites/<company-id>/app/public/generated/<company-id>/`。
- 新增稳定数据契约：模板内 `src/data/siteSchema.ts` 定义 TypeScript 类型；React 页面只读这个契约，不直接关心 YAML 怎么写。
- 收拢硬编码内容：把 `Header/Footer/Home/About/Contact/Factory/Resources/ThankYou/seo` 里写死的 `Haiyue`、地址、Logo、首页统计、案例推荐、下载资料、FAQ 等改为读取 `siteData`。
- 保留现有页面组件作为第一套模板层：以后要继续改页面视觉、布局、交互，只改对应模板里的 React 组件；只要字段契约不破坏，已有公司资料可以继续生成。

## Target Structure

```text
content/
  companies/
    haiyue.yaml
    company-a.yaml
  samples/
    minimal-company.yaml
    missing-optional-pages.yaml

assets/
  companies/
    haiyue/
      logo.png
      hero.jpg
      products/
      cases/

tools/
  sitegen/
    generate.py
    validators.py

templates/
  industrial-valve-react/
    app/
    template.config.yaml
    template.fields.yaml

sites/
  haiyue/
    app/

docs/
  plans/
  development-log.md
```

第一版就按这个结构准备。当前根目录 `app/` 迁移到 `templates/industrial-valve-react/app/`，生成后的客户站点放到 `sites/<company-id>/app/`。

## Template YAML

`template.config.yaml` 说明模板怎么被生成器使用：

```yaml
id: industrial-valve-react
name: Industrial Valve React Template
type: react-vite
entry: app
schemaVersion: 1
build:
  install: npm install
  dev: npm run dev
  build: npm run build
supports:
  pages:
    - home
    - products
    - productDetail
    - cases
    - factory
    - about
    - resources
    - contact
```

`template.fields.yaml` 说明模板需要/支持哪些资料和图片：

```yaml
required:
  company:
    - id
    - brand
    - nameEn
    - logo
    - email
  home:
    - hero.title
    - hero.description
    - hero.image
  products:
    minItems: 1
    fields:
      - id
      - name
      - image

optional:
  pages:
    - cases
    - factory
    - resources
  company:
    - phone
    - whatsapp
    - address
    - since
    - employees
  products:
    - shortDesc
    - specs
    - applications
    - detail
  cases:
    - title
    - description
    - image
    - productsSupplied
  factory:
    - capabilities
    - certificates
  resources:
    - downloads
    - faqs
    - news

assets:
  required:
    - key: company.logo
      recommended: 600x200 PNG/SVG
      usedIn: [header, footer]
    - key: home.hero.image
      recommended: 1920x1080 JPG/PNG
      usedIn: [home.hero]
  optional:
    - key: products[].image
      recommended: 1200x900 PNG/JPG
      fallback: /template/placeholder-product.jpg
    - key: cases[].image
      recommended: 1200x800 JPG
      fallback: /template/placeholder-case.jpg
    - key: factory.capabilities[].image
      recommended: 1200x800 JPG
      fallback: /template/placeholder-factory.jpg
```

## Company YAML

公司 YAML 说明“这家公司实际提供了什么”。图片路径采用相对路径，相对于 `assets/companies/<company-id>/`：

```yaml
schemaVersion: 1
company:
  id: haiyue
  brand: Haiyue Valve
  nameEn: Zhejiang Haiyue Valve Co., Ltd.
  logo: logo.png
  email: sales@haiyuevalve.com
  phone: +86 577 0000 0000

home:
  hero:
    title: Industrial Valve Manufacturer & Export Partner
    description: Ball, gate, globe, butterfly, check valves and strainers.
    image: hero.jpg

products:
  - id: ball-valve
    name: Ball Valve
    image: products/ball-valve.png
    shortDesc: Quick on/off, reliable sealing, easy maintenance.

pages:
  cases: true
  resources: false
```

生成器根据 `company.id` 找到 `assets/companies/haiyue/`，把相对图片路径复制到客户站点 public 目录，并转换成网站可访问路径。

## Data Rules

- 必填字段：`company.id`、`company.nameEn`、`company.brand`、`company.logo`、`company.email`、`home.hero`、至少 1 个产品分类或产品。
- 可选字段：案例、新闻、资源下载、团队、证书、工厂能力、发展历程、行业详情、产品详情、WhatsApp、电话、地址、SEO 自定义文案。
- 页面显示规则：有数据才显示对应导航和页面入口；例如没有 `cases` 就隐藏 Cases 菜单，访问 `/cases` 显示 404 或简洁空状态。
- 页面开关规则：资料文件可显式写 `pages.cases: false`、`pages.resources: false`；显式关闭优先级高于自动判断。
- 缺资料兜底：可选区块缺失时不报错、不留空白；关键资料缺失时生成脚本报错并提示字段路径。
- 支持不同资料详细度：资料完整时显示完整网站；资料一般时显示首页、产品、关于、联系等核心页面；资料很少时仍可生成首页、简化产品区和联系入口。
- 产品详情、案例、工厂、资源、证书、新闻等模块按数据存在与否自动显示或隐藏，不强迫每家公司填满同一套页面。
- 生成器必须输出资料检查结果：必填是否通过、可选资料有哪些、哪些页面启用、哪些页面隐藏、哪些图片使用 fallback。

## Generated Site Rules

- `sites/<company-id>/app/` 是客户专属网站代码，可以在这个基础上继续按客户需求开发。
- 自动生成区固定为 `src/generated/` 和 `public/generated/<company-id>/`，重新运行脚本时可以覆盖。
- 人工定制区为客户站点里的 `src/pages/`、`src/components/`、样式文件和新增页面，脚本不得覆盖。
- 资料类修改优先改 `content/companies/<company-id>.yaml` 和 `assets/companies/<company-id>/`。
- 通用模板修改改 `templates/<template-id>/app/`。
- 单客户特殊需求改 `sites/<company-id>/app/`。

## Template Evolution

- React 组件是长期模板，生成脚本负责复制模板、生成数据、复制图片和准备输出目录，不直接生成页面代码。
- 每个模板使用 `template.config.yaml` 描述模板 ID、类型、入口目录、支持页面和需要的 schema 版本。
- 每个模板使用 `template.fields.yaml` 描述必填/可选资料、图片位、推荐尺寸和 fallback 规则。
- 新增模板模块时，先在 `siteSchema.ts` 添加可选字段，再在 YAML 样例里补一段示例，最后页面按“字段存在才显示”的方式读取。
- 不允许手工修改 `sites/<company-id>/app/src/generated/siteData.ts`；文件顶部写明“由脚本生成”。所有人工模板修改都放在模板目录，所有客户定制修改都放在客户站点的非生成区。
- 若未来字段升级，生成脚本保留 `schemaVersion`，第一版固定为 `1`；后续可写迁移函数兼容旧公司资料。

## Test Plan

- 运行生成脚本，确认 `sites/haiyue/app/` 可以从 `templates/industrial-valve-react/app/` 生成。
- 确认 `sites/haiyue/app/src/generated/siteData.ts` 可以生成且 TypeScript 类型通过。
- 在 `sites/haiyue/app/` 跑 `npm run build`，确认客户站点可正常构建。
- 准备一份“资料不全”的测试 YAML：关闭 cases/resources、删除团队/新闻/证书，确认页面不崩、导航不显示无效入口。
- 准备一份“最小公司资料” YAML：只包含必填项和少量产品，确认能生成一个可用的轻量网站。
- 验证公司图片从 `assets/companies/<company-id>/` 能正确复制到 `sites/<company-id>/app/public/generated/<company-id>/`。
- 验证 `--template industrial-valve-react` 能选择模板目录。
- 验证重新运行脚本只覆盖 `src/generated/` 和 `public/generated/<company-id>/`，不覆盖客户手工改过的页面和组件。
- 浏览检查首页、产品页、产品详情、联系页、404，重点看空数据场景没有明显空白或死链接。

## Assumptions

- 第一版采用 `YAML/JSON`，不做 Excel 导入；Excel 可以作为第二阶段加。
- 第一版不做多语言后台、不做在线 CMS、不做实时数据库；目标是本地脚本零 token 生成静态前端数据。
- 当前 React 网站继续作为第一套主模板，不重写为 Jinja2 HTML；这里的“Python 脚本”负责数据转换、图片路径处理、模板选择和输出目录准备，而不是替代 React 渲染页面。
- 第一版就建立多模板目录和客户站点输出目录，不再只做单 `app/` 原地生成。
