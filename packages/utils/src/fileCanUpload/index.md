---
title: fileCanUpload
nav:
  path: /utils
---

# fileCanUpload
上传文件的前置判断。如果当文件格式为：'pptx', 'ppt', 'pdf', 'xlsx', 'xls', 'xlsm', 'doc', 'docx', 'docm'，且文件大小超过一定大小(默认200M)时，函数会抛出错误，后续代码不会继续执行


## 代码演示

### 使用

```ts
import { fileCanUpload } from '@ryan-drx/utils';

fileCanUpload(205, 'doc'); // 超出默认大小200M，函数会抛出错误，后续代码不会执行
fileCanUpload(205, 'doc', 250);  // 通过大小检测，继续执行后续代码
// some code

```

## API

```typescript
const fileCanUpload: (fileSize: number, fileExt: string, maxSize?: number) => void
```

### Params

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| fileSize | 文件大小 | `number` | 无 |
| fileExt | 文件后缀 | `string` | 无 |
| maxSize | 最大上传大小 | `number` | 默认200MB |