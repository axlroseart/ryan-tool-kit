---
title: 快速上手
order: 1
---

# Ryan Drx Tool Kit

ryan-drx-tool-kit 是点成云前端公共套件，主要用`@ryan-drx/utils 工具库`、`@ryan-drx/hooks hooks库`、`@ryan-drx/components 业务组件库（PC）`三个模块组成，主要服务于新零售前端业务线。

## 快速上手
### 1. 安装

```bash
npm install @ryan-drx/utils --save

npm install @ryan-drx/hooks --save

npm install @ryan-drx/components --save
```

### 2. 使用
#### 1. **@ryan-drx/components**
``` ts
import { Button } from "@ryan-drx/components";

ReactDOM.render(<Button>Start</Button>, mountNode);
```

#### 2. **@ryan-drx/utils**
``` ts
import { add } from "@ryan-drx/utils";

add(1,2)
```

#### 3. **@ryan-drx/hooks**
``` ts
import * as React from "react";
import { useLoading } from "@ryan-drx/hooks";

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
            ["import", { "libraryName": "@ryan-drx/components"}]
        ]
    }
    ```
* mlz/pack使用
    ```json
       {
            "babel": {
                "plugins": [
                    ["import", { "libraryName": "@ryan-drx/components", "camel2DashComponentName": false }],
                    ["import", { "libraryName": "@ryan-drx/utils", "camel2DashComponentName": false }],
                    ["import", { "libraryName": "@ryan-drx/hooks", "camel2DashComponentName": false }],
                ],
            },
       }
    ```
#### 4. 组件库基于less开发，需要配置less-loader，多主题配置

* less 版本："^3.9.0", less-loader 版本 "^4.1.0" 

```json
{
    "test": /\.less$/,
    "use": [
        "style-loader",
        "css-loader",
        { 
            "loader": "less-loader",
            "options": {
                "modifyVars": {
                "bg-color": "#1DA57A",
                },
            } 
        },
    ],
    "include": /node_modules\/@ryan-drx\/components/,
},
```