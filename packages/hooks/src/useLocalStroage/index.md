---
title: useLocalStroage
nav:
  path: /hooks
---
# useLocalStroage

localStoage本地存储hooks

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const { value, setValue, remove } = useLocalStroage<S>('test');
```

### Result

| 参数    | 说明     | 类型      |
|---------|----------|-----------|
| value   | localstorage存储的值   | `S` |
| setValue | 设置localstorage存储的值 | `React.Dispatch<React.SetStateAction<TestLocalStroageValue>>` |
| remove | 删除localstorage存储的值 | `() => void` |
