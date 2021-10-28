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
| width | 容器宽度 | `number、string` | 100% |
| height | 容器高度 | `number、string` | 100% |
| token | 登录凭证 | `string` | - |
| workId | 作品id (workId 优选于 fileUrl) | `number` | - |
| fileUrl | 工程文件  (workId 优选于 fileUrl) | `string` | - |
| type | 工程类型| `ToolType` | - |
| apiEnv | 环境变量 | `ApiEnv` | - |
| save | 是否显示保存按钮 | `boolean` | - |
| exportFile | 是否显示导出按钮 | `boolean` | - |
| uploadWork | 是否显示下载按钮 | `boolean` | - |
| onEvent | SDK事件回调 | `DispatchEvent` | - |
| onReady | onReady初始完成 | `()=>void` | - |
| presetLink | presetLink | `string` | - |
| workName | 保存作品名称 | `string` | - |
