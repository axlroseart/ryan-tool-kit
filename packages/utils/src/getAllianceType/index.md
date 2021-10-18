---
title: getAllianceType
nav:
  path: /utils
---

# getAllianceType
根据location返回AllianceType。学大：103，谷雨：101，标准点程云：102。

## 代码演示

### 使用

```ts
import { getAllianceType } from '@frontend/dcc-utils';

// location: https://test-guyu.codemao.cn/
const allianceType = getAllianceType(); // 101
```

## API

```typescript
const getAllianceType: () => '101' ｜'102' ｜ '103'
```

### Params

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
