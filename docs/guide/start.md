---
title: 开发指南
---

# 开发指南

## 目录说明
```shell
dcc-tool-kit
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
3. 版本号+1
3. 测试用例
4. 创建merge_requests，合到master
5. 管理员打tag（v0.0.1）

## 单元测试
