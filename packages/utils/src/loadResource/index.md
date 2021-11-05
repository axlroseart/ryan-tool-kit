---
title: loadResource
nav:
  path: /utils
---

# loadResource

加载css、js静态资源
## 代码演示

### 加载js资源

```ts
import { loadResource } from '@ryan-drx/utils';

const isSuccess = await loadResource({
    resourceUrl: 'xxx.js',
    resourceType: 'js'
});
```

### 加载css资源

```ts
import { loadResource } from '@ryan-drx/utils';

const isSuccess = await loadResource({
    resourceUrl: 'xxx.css',
    resourceType: 'css'
});
```
## API

```typescript
const loadResource: ({ resourceUrl, resourceType, }: {
    resourceUrl: string;
    resourceType: 'css' | 'js';
}) => Promise<boolean>
```

### Params

| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| resourceUrl | 静态资源地址 | `string` | 无 |
| resourceType | 静态资源类型 | `css、js` | 无 |

### Result

| 参数    | 说明     | 类型      |
|---------|----------|-----------|
| isSuccess   | 是否成功加载资源   | `Promise<boolean>` |
