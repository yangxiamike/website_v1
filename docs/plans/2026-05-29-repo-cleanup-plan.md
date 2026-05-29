# 2026-05-29 仓库清理计划

## 背景

当前仓库从初始下载体积快速增长到约 900MB，主要来源是多套 demo 站点副本、模板构建产物和本地安装依赖，影响传输、备份和日常协作。

## 目标

1. 保留当前正在使用的 demo/测试站点：`sites/haiyue/app/`。
2. 删除不再需要的 demo 副本目录：`sites/minimal-demo/`、`sites/lean-demo/`。
3. 删除模板目录下可重建产物：`templates/industrial-valve-react/app/dist/`、`templates/industrial-valve-react/app/node_modules/`。
4. 不改动当前正在开发的源码文件和 `sites/haiyue/app/` 的运行依赖。

## 执行说明

1. 先确认要保留的站点目录。
2. 执行目录级清理，仅移除已确认可删除内容。
3. 检查 Git 暂存范围，避免混入无关源码修改。
4. 在开发日志记录本次仓库瘦身结果并提交。
