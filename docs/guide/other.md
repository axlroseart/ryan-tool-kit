---
title: 其他记录
order: 999
---

## **dumi配置篇**
---

### **tailwindcss**

tailwindcss 简介：https://www.tailwindcss.cn/docs/installation

组件库中使用tailwindcss来提供组件样式上的支持

需要用到dumi的extraPostCSSPlugins配置：

> extraPostCSSPlugins <br>
Type: Array <br>
Default: []

具体配置：
```
{
  extraPostCSSPlugins: [
    require('tailwindcss'),
    require('postcss-import'),
  ],
}
```
*tip:* 需要用postcss-import插件来提供tailwindcss样式依赖的引入

## **依赖管理模式**
----
**主项目的依赖基本上都是以「项目工程配置」为主：**
- 项目的各种规范校验控制的配置（eslint, stylelint, commitlint等等)
- dumi配置
- father-build配置
<br>

**为项目的文档以及各packages下属项目（以下统称下属项目）的构建和部署提供服务**
<br>

**下属项目的依赖管理**
- 在根目录执行 ```npm i``` 即可为各下属项目安装自己的依赖
- 在各下属项目目录内，执行安装指令来安装自己的依赖
<br>

*tip:* 各下属项目可以看作，或者以独立项目的模式来管理，但尽量在主项目用lerna来统一管理

## **NPM LINK**
----

**多用在本地项目调试**

在下属项目目录内执行：
```
npm link
```
来产生当前项目在系统环境中的link

在需要使用某个下属项目的项目内执行：
```
npm link @ryan-drx/hooks
```
来将被使用的下属项目（@ryan-drx/hooks）link到使用的项目内，然后在项目内通过：
```
import xx from @ryan-drx/hooks
```
的方式来使用