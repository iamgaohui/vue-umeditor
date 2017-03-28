# vue-umeditor

> 基于百度 UMeditor 的 VueJS 2.0 组件

## 快速开始

``` bash
install vue-umeditor
```

## 查看效果
View [demo](http://htmlpreview.github.io/?https://github.com/RoamIn/vue-umeditor/blob/master/view/demo.html).

Or run:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 目录结构

核心代码目录如下:

```
vue-umeditor/
...
└── src/
    └── component
        └── UMeditor.vue
```

## 依赖配置

具体请参考[百度UMeditor文档](http://ueditor.baidu.com/website/umeditor.html)

## API

- `reset`：重置编辑器，并清空内容
- `destroy`：销毁编辑器

- `setContent`：设置内容(sContent | String)

- `getContent`：获取富文本内容

> 当内容发生改变的时候，会 `emit` 一个 `change` 事件，并且会传递当前的内容最为参数

## Change Log

View [Log](https://github.com/RoamIn/vue-umeditor/blob/master/ChangeLog.md)
