---
title: 关于Dcc Tool Kit
order: 10000
---

# 关于Dcc Tool Kit

* *Dcc Tool Kit* 文档基于dumi、打包基于father构建。
* *Dcc Tool Kit* 使用lerna包管理工具，主要由dcc-utils、dcc-hooks、dcc-system-components三个包组成。
* *Dcc Tool Kit* 具备完整的CI流程，致力于自动化构建、发包。

## 一、目录说明

```
dcc-tool-kit
├─ bin                                      文档express服务
├─ config                                   配置文件
├─ docs                                     文档
├─ packages                                 packages
    ├─ components                           业务组件库
        ├─ button                           
        ├─ styles                           样式配置
        index.ts                           
    ├─ hooks                                hooks库
    └─ utils                                utils工具库
├─ public                                   静态自然文件
   ├─ images
   └─ .npmrc                                docker服务npm环境变量
├─ .gitlab-ci.yml                           gitlab CI构建流程
├─ .fatherrc.ts                             打包配置
└─ lerna.json                               lerna配置
```

## 二、 搭建一个前端组件库

### 2.1、npm **https://www.npmjs.com**

**a. 需要知道的package.json**

***1. name***

`package.json`文件中最重要的就是`name`和`version`字段，这两项是必填的。名称和版本一起构成一个标识符，该标识符被认为是完全唯一的。对包的更改应该与对版本的更改一起进行。

`name`必须小于等于214个字符，不能以`.`或`_`开头，不能有大写字母，因为名称最终成为URL的一部分因此不能包含任何非URL安全字符。 `npm`官方建议我们不要使用与核心节点模块相同的名称。不要在名称中加`js`或`node`。如果需要可以使用`engines`来指定运行环境。

该名称会作为参数传递给`require`，因此它应该是简短的，但也需要具有合理的描述性。

***2. version***

`version`一般的格式是`x.x.x`, 并且需要遵循该规则。每次发布时`version`不能与已存在的一致。

***3. files***

`files`属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）。

可以在模块根目录下创建一个`.npmignore`文件，写在这个文件里边的文件即便被写在`files`属性里边也会被排除在外，这个文件的写法与`.gitignore`类似。

***4.main***

`main`字段指定了加载的入口文件，`require`导入的时候就会加载这个文件。这个字段的默认值是模块根目录下面的`index.js`。

***5. bin***

`bin`项用来指定每个内部命令对应的可执行文件的位置。如果你编写的是一个node工具的时候一定会用到`bin`字段。

当我们编写一个`cli`工具的时候，需要指定工具的运行命令，比如常用的`webpack`模块，他的运行命令就是`webpack`。

```json
"bin": {
  "webpack": "bin/index.js",
}
```

当我们执行`webpack`命令的时候就会执行`bin/index.js`文件中的代码。

***6. dependencies、devDependencies***

`dependencies`字段指定了项目运行所依赖的模块，`devDependencies`指定项目开发所需要的模块。

它们的值都是一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

当安装依赖的时候使用`--save`参数表示将该模块写入dependencies属性，`--save-dev`表示将该模块写入devDependencies属性。

```json
"devDependencies": {
  "webpack": "^5.38.1",
}
```

***7. peerDependencies***

当我们开发一个模块的时候，如果当前模块与所依赖的模块同时依赖一个第三方模块，并且依赖的是两个不兼容的版本时就会出现问题。

比如，你的项目依赖A模块和B模块的1.0版，而A模块本身又依赖B模块的2.0版。

大多数情况下，这不构成问题，B模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。

最典型的场景就是插件，比如A模块是B模块的插件。用户安装的B模块是1.0版本，但是A插件只能和2.0版本的B模块一起使用。这时，用户要是将1.0版本的B的实例传给A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果A和B一起安装，那么B必须是2.0模块。

`peerDependencies`字段，就是用来供插件指定其所需要的主工具的版本。可以通过`peerDependencies`字段来限制，使用myless模块必须依赖less模块的3.9.x版本.

```json
{
  "name": "hooks",
  "peerDependencies": {
     "react": "16.8.x"
  }
}
```

**b. 调试本地的npm包**

```shell
# 在对应包的目录，执行
npm link
# 在使用的项目,执行
npm link xxxx
```

### 2.2、lerna **https://github.com/lerna/lerna**

将大型代码仓库分割成多个独立版本化的 软件包（package）对于代码共享来说非常有用。但是，如果某些更改 跨越了多个代码仓库的话将变得很 *麻烦* 并且难以跟踪，并且， 跨越多个代码仓库的测试将迅速变得非常复杂。

为了解决这些（以及许多其它）问题，某些项目会将 代码仓库分割成多个软件包（package），并将每个软件包存放到独立的代码仓库中。但是，例如 Babel、 React、Angular、Ember、Meteor、Jest 等项目以及许多其他项目则是在 一个代码仓库中包含了多个软件包（package）并进行开发。

Lerna 是一种工具，针对 使用 git 和 npm 管理多软件包代码仓库的工作流程进行优化。

### 2.3、代码规范

在一定规模的团队下，需要统一开发规范，旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范。

一般有：**HTML规范**、**图片规范**、**CSS规范**、**命名规范**、**JS规范**、**React规范**、**git规范**

一般用工具有：Prettier、Eslint、Stylelint、CommitLint。

打造统一的代码lint规则：类似于mlz-lint。标准的命名规范：eslint-config-xxx、stylelint-config-xxx。

### 2.4、打包构建

**Dcc Tool Kit**使用的构建工具是 [father](https://github.com/umijs/father)

father基于rollup二次封装，致力于通过简单的配置来适配前端构建的各种需求。使用者不需要关注引入rollup的第三方依赖。

- ✔︎ 基于 [rollup](http://rollupjs.org/) 和 babel 的组件打包功能
- ✔︎ 支持 TypeScript
- ✔︎ 支持 cjs、esm 和 umd 三种格式的打包
- ✔︎ esm 支持生成 mjs，直接为浏览器使用
- ✔︎ 支持用 babel 或 rollup 打包 cjs 和 esm
- ✔︎ 支持多 entry
- ✔︎ 支持 lerna
- ✔︎ 支持 css 和 less，支持开启 css modules
- ✔︎ 支持 test
- ✔︎ 支持用 prettier 和 eslint 做 pre-commit 检查

### 2.5、gitlab CI CD https://docs.gitlab.com/ee/ci/

CI流程：

​			触发时机：打tag （v0.0.1）

​			stages：install、build、pages、publish、release

```shell
stages:
  - install
  - build
  - pages
  - publish
  - release

cache:
  # 缓存文件以分支为key
  key: ${CI_COMMIT_REF_NAME}
  # 缓存需要的文件至runner
  paths:
    - node_modules/
    - packages/

# 安装所需依赖
install:
  stage: install
  rules:
    - if: '$CI_COMMIT_TAG =~ /^v.*$/'
      # 仅在这个文件有变动时进行依赖安装，减少pipeline时间
      changes:
        - package-lock.json
  tags:
    - frontend
  script:
    - npm config set '@${CI_PROJECT_ROOT_NAMESPACE}:registry=https://gitlab.codemao.cn/api/v4/packages/npm/'
    - npm config set '//gitlab.codemao.cn/api/v4/packages/npm/:_authToken' ${CI_JOB_TOKEN}
    - npm i

# 文件打包
build:
  stage: build
  rules:
    - if: '$CI_COMMIT_TAG =~ /^v.*$/'
  tags:
    - frontend
  script:
    - npm run lint
    - npm run compile

# pages:
#   stage: pages
#   rules:
#     - if: '$CI_COMMIT_TAG =~ /^v.*$/'
#   tags:
#     - frontend
#   script: 
#     - npm run build-doc
#   artifacts:
#     paths:
#       - dist

# 发布包至gitlab
publish:
  stage: publish
  rules:
    - if: '$CI_COMMIT_TAG =~ /^v.*$/'
  tags:
    - frontend
  script:
    - npm config set '@${CI_PROJECT_ROOT_NAMESPACE}:registry=https://gitlab.codemao.cn/api/v4/projects/${CI_PROJECT_ID}/packages/npm/'
    - npm config set '//gitlab.codemao.cn/api/v4/packages/npm/:_authToken' ${CI_JOB_TOKEN}
    - npm config set '//gitlab.codemao.cn/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken' ${CI_JOB_TOKEN}
    - npm run pub

# release
release:
  stage: release
  needs:
    - job: publish
  image: registry.gitlab.com/gitlab-org/release-cli:latest
  tags:
    - frontend
  rules:
    - if: '$CI_COMMIT_TAG =~ /^v.*$/'
  script:
    - echo '------ running release_job for $TAG ------'
  release:
    name: 'Release $CI_COMMIT_TAG'
    description: $CI_COMMIT_MESSAGE
    tag_name: '$CI_COMMIT_TAG'
    ref: '$CI_COMMIT_TAG'
```

