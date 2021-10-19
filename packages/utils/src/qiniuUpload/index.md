---
title: qiniuUpload
nav:
  path: /utils
---

# qiniuUpload
实例化上传对象

## 代码演示

### 使用

```ts
import { QiniuUpload } from '@frontend/dcc-utils';

// projectName: cmdb仓库名，与cmdb上的cdn配置相关联；env：环境
const privateUpload = new QiniuUpload({
  projectName: 'cnr_manager',
  env: CODEMAOCONFIG?.api?.captcha,
}); 

const qiniuUp = await privateUpload.create(file, FILE_TYPE.ENUM_FILE_TYPE_COURSEWARE, {...});
qiniuUp?.start();
```

## API

### Params

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| parameters | 实例化参数 | `{ projectName:string, env:EnvType }` | 无 |
| container | html元素 | `HTMLElement` | 无 |
