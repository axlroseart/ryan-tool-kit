---
title: cookie Key
nav:
  path: /utils/cookie
---

# cookie Key

点程云业务 Cookie 统一Key

## COOKIE_TRANS_KEY
cookie值为对象或者数字的key
```ts
import { COOKIE_TRANS_KEY } from '@frontend/dcc-utils';

// COOKIE_TRANS_KEY.USER_INFO
```
| 枚举值      | key值                                     |说明                                     |
|-----------|------------------------------------------|------------------------------------------|
| USER_INFO |  userInfo |用户相关信息|

## COOKIE_COMMON_KEY
cookie值为字符串的key
```ts
import { COOKIE_COMMON_KEY } from '@frontend/dcc-constants';

// COOKIE_COMMON_KEY.AUTHORIZATION
export enum COOKIE_COMMON_KEY {
  AUTHORIZATION = 'cnr_token', // 登录token
  IS_SAAS = 'isSaas', //  标示当前用户所属机构类型
}
```

| 枚举值      | key值                                     | 说明                                     |
|-----------|------------------------------------------|------------------------------------------|
| AUTHORIZATION |  authorization |登录token     |
| IS_SAAS |  isSaas |标示当前用户所属机构类型                                     |