---
title: CreationTool
nav:
  title: CreationTool
  path: /components
---

## CreationTool

创作工具 暂时只支持Kids

## 代码演示

<code src="./demo/default.tsx" />

## 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| token | 登录凭证 | `string` | - |
| workId | 作品id | `number` | - |
| fileUrl | 工程文件 | `string` | - |
| type | 工程类型| `ToolType` | - |
| apiEnv | 环境变量 | `ApiEnv` | - |
| exportFile | 是否显示导出按钮 | `boolean` | - |
| uploadWork | 是否显示下载按钮 | `boolean` | - |
| onEvent | SDK事件回调 | `DispatchEvent` | - |
