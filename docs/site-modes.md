# 站点模式说明

项目里现在有两类站点，它们用途不同，不要混用。

## 1. 完整版开发 Demo

- 目录：`templates/industrial-valve-react/app/`
- 用途：作为主开发 demo，保留更完整的产品、行业、案例与页面演示内容。
- 适用场景：设计迭代、前端联调、对外展示完整能力、继续开发新的 demo 页面。
- 说明：当我们说“开发 demo 网站”时，默认指这一套。

启动方式：

```bash
cd templates/industrial-valve-react/app
npm install
npm run dev
```

## 2. 生成后的裁剪站

- 目录：`sites/<company-id>/app/`
- 数据来源：`content/companies/*.yaml`
- 用途：验证站点生成结果、不同资料完整度、按客户资料裁剪后的页面输出。
- 适用场景：检查某个客户资料生成后是否缺字段、是否隐藏页面、是否正确复制资源。

当前已有示例：

- `sites/haiyue/app/`：完整度较高的客户样例站，但仍以 `haiyue.yaml` 为准，不等于模板完整版 demo。
- `sites/minimal-demo/app/`：最小资料样例。
- `sites/lean-demo/app/`：关闭部分可选页面的样例。

## 当前约定

1. 开发和演示主站，默认使用 `templates/industrial-valve-react/app/`。
2. `sites/<company-id>/app/` 一律视为生成结果，不当作主开发 demo。
3. 如果要比较“完整版”和“裁剪版”，先确认当前运行的是哪一个目录下的站点。
