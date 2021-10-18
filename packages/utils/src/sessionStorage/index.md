---
title: sessionStorage
nav:
  path: /utils
---

# sessionStorage

sessionStorage常用操作方法

## 通用方法

### 1.setStorage
设置sessionStorage
```ts
import { sessionStorage } from '@frontend/dcc-utils';

sessionStorage.set('allianceType', '102');
```

### 2.getStorage
获取sessionStorage
```ts
import { sessionStorage } from '@frontend/dcc-utils';

dccCookie.get('allianceType');
```

### 3.clearStorage
清空所有sessionStorage
```ts
import { sessionStorage } from '@frontend/dcc-utils';

sessionStorage.clear()
```

### 4.removeStorage
移除sessionStorage
```ts
import { sessionStorage } from '@frontend/dcc-utils';

sessionStorage.clear('allianceType')
```

