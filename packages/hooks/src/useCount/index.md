---
title: useCount
nav:
  path: /hooks
---
# useCount

通用的倒计时 Hooks

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const { current, startCounter, status } = useCount();
```

### Result

| 参数    | 说明     | 类型      |
|---------|----------|-----------|
| current   | 当前时间   | `number` |
| status | 是否在计时 | `boolean` |
| startCounter | 开启计时 | `Actions` |

### Actions

| 参数     | 说明                                              | 类型                        |
|----------|---------------------------------------------------|-----------------------------|
| begin  | 倒计时开始时间                                 | `number`                |
| end | 倒计时结束时间，不填则不会停止                                | `number`                |
| interval | 时间间隔 单位(ms)                                | `number`                |

