---
title: getSubCateLog
nav:
  path: /utils
---

# getSubCateLog
获取资源存储路径。业务中有许多资源类型，例如：课件、课程封面、课堂精彩瞬间等，不同资源类型，定义了不同的存储路径。

## 代码演示

### 使用

```ts
import { getSubCataLog } from '@frontend/dcc-utils';

// 201 是课件资源
const fileExt = getSubCataLog(201);  //  => /cnr/curriculum/courseware/

```

## API

```typescript
const getSubCataLog: (fileType:FILE_TYPE) => string
```

### Params

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| fileType | 资源类型 | `FILE_TYPE` | 无 |