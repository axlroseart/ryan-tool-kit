---
title: CreationTool
nav:
  title: CreationTool
  path: /components
---

## CreationTool

创作工具

## 代码演示

<code src="./demo/default.tsx" />

## 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 视频播放器宽度 | `number` | `100%` |
| height | 视频播放器高度 | `number` | `500` |
| type | 播放类型default(普通视频)、sceret（阿里云加密视频） | `default、sceret` | 无 |
| source | 播放类型default，播放地址 | `string` | 无 |
| vid | 播放类型sceret，播放vid | `string` | 无 |
| getAliVideoAuth | 播放类型sceret，获取播放凭证方法 | `() => Promise<string>` | 无 |
| otherConfig | 播放器其他配置 | `any` | 无 |
