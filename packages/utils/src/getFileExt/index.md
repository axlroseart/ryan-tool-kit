---
title: getFileExt
nav:
  path: /utils
---

# getFileExt
获取文件后缀

## 代码演示

### 使用

```ts
import { getFileExt } from '@frontend/dcc-utils';

const fileUrl = 'https://staging-dcc-pages.codemao.biz/logo.png'
const fileExt = getFileExt(getFileExt);  // png

```

## API

```typescript
const getFileExt: (file:string) => string
```

### Params

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| file | 文件地址 | `string` | 无 |