---
title: 开发指南
order: 2
---

# 开发指南

## 目录说明
```shell
ryan-drx-tool-kit
├─ config                                   配置文件
├─ docs                                     文档
├─ packages                                 packages
    ├─ components                           业务组件库
        ├─ button                           
        ├─ styles                           样式配置
        index.ts                           
    ├─ hooks                                hooks库
    ├─ utils                                utils工具库
├─ .fatherrc.ts                             打包配置
└─ lerna.json                               lerna配置
```

## 开发流程 
1. 从master拉一个新的特性分支进行开发
2. 开发
3. 测试用例
4. 在原包的版本号加一
5. 创建merge_requests，合到master
6. 管理员打tag（v0.0.1）

## 单元测试

```shell
# 全量测试
npm run test

# 测试utils
# 参考 add
npm run test_utils

# 测试hooks
# 参考 useBoolean
npm run test_hooks

# 测试组件
# 参考 button
npm run test_components
```