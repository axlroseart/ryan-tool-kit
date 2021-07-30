---
title: 关于 Dcc Tool Kit
---

# Dcc Tool Kit

dcc-tool-kit 是点成云前端公共套件，主要用`@frontend/dcc-utils 工具库`、`@frontend/dcc-hooks hooks库`、`@frontend/dcc-system-components 业务组件库（PC）`三个模块组成，主要服务于新零售前端业务线。

## 快速上手
### 1. 安装

```bash
npm install @frontend/dcc-utils --save

npm install @frontend/dcc-hooks --save

npm install @frontend/dcc-system-components --save
```

### 2. 使用
#### 1. **@frontend/dcc-system-components**
``` ts
import { Button } from "@frontend/dcc-system-components";

ReactDOM.render(<Button>Start</Button>, mountNode);
```

#### 2. **@frontend/dcc-utils**
``` ts
import { add } from "@frontend/dcc-utils";

add(1,2)
```

#### 3. **@frontend/dcc-hooks**
``` ts
import * as React from "react";
import { useLoading } from "@frontend/dcc-hooks";

export default () => {
  const { isLoading, setLoading } = useLoading();
  return (
    <button
      onClick={() => {
        setLoading(!isLoading);
      }}
    >
      按钮{isLoading ? "loading" : ""}
    </button>
  );
};
```

### 3. 按需加载
* webpack5以上，可以忽略配置
* 使用 babel-plugin-import（推荐）
    ``` json
    // .babelrc or babel-loader option
    {
        "plugins": [
            ["import", { "libraryName": "@frontend/dcc-system-components"}]
        ]
    }
    ```
* mlz/pack使用
    ```json
       {
            "babel": {
                "plugins": [
                    ["import", { "libraryName": "@frontend/dcc-system-components", "camel2DashComponentName": false }],
                    ["import", { "libraryName": "@frontend/dcc-utils", "camel2DashComponentName": false }],
                    ["import", { "libraryName": "@frontend/dcc-hooks", "camel2DashComponentName": false }],
                ],
            },
       }
    ```
#### 4. 组件库基于less开发，需要配置less-loader
```json
{
    "test": /\.less$/,
    "use": [
        "style-loader",
        "css-loader",
        { "loader": "less-loader" },
    ],
    "include": /node_modules\/@frontend\/dcc-system-components/,
},
```