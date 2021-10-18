---
title: uploadCreate
nav:
  path: /utils
---

# uploadCreate
根据文件后缀，区分上传到私有库或公有库

## 代码演示

### 使用

```ts
import { uploadCreate } from '@frontend/dcc-utils';

const qiniuUp = await uploadCreate(file, FILE_TYPE.ENUM_FILE_TYPE_COURSEWARE, {...});
qiniuUp?.start();
```

## API

```typescript
const uploadCreate: (file:File,fileType:FILE_TYPE,options:ICnrUploadParams<T>) => Promise<QiniuUploader>
```

### Params

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| file | 文件对象 | `File` | 无 |
| fileType | 资源类型 | `FILE_TYPE` | 无 |
| options | 实例化参数 | `ICnrUploadParams` | 无 |