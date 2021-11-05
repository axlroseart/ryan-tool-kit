---
title: cookie
nav:
  path: /utils
---

# cookie

cookie常用操作方法与业务常用Key值


## 通用方法

### 1.setCookie
设置字符串cookie
```ts
import { dccCookie } from '@ryan-drx/utils';
import { COOKIE_COMMON_KEY } from '@ryan-drx/constants';

dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, '102');
```

### 2.setTransCookie
设置对象、数字cookie
```ts
 import { dccCookie } from '@ryan-drx/utils';
import { COOKIE_COMMON_KEY } from '@ryan-drx/constants';

dccCookie.setCookie(COOKIE_COMMON_KEY.IS_SAAS, {userInfo:2});
```

### 3.getCookie
获取值为字符串数据的cookie
```ts
import { dccCookie } from '@ryan-drx/utils';
import { COOKIE_COMMON_KEY } from '@ryan-drx/constants';

dccCookie.getCookie(COOKIE_COMMON_KEY.IS_SAAS)
```

### 4.getTransCookie
获取值为对象或者数字的cookie
```ts
import { dccCookie } from '@ryan-drx/utils';
import { COOKIE_COMMON_KEY } from '@ryan-drx/constants';

dccCookie.getTransCookie(COOKIE_COMMON_KEY.IS_SAAS)

```
#### ICookieOptions
| 参数      | 说明                                     | 类型    | 默认值 |
|-----------|------------------------------------------|---------|:-------|
| path |  路径 | `string` | 无 |
| domain | 域名 | `string` | 无 |
| secure | 允许客户端访问 | `boolean` | 无 |
| expires | 过期时间 | `number、string、Date` | 无 |

