### 常见问题
---
1. 打印设计页面, 始化没有把之前模板清掉 ==> 直接 操作DOM $("#hiprint-printTemplate").html("");
2. 内容全部都打印在了第一页 ==> 引入打印样式( html 中引入打印样式的css 复制一份 加上 media="print" 属性 );
3. 页码不能设置隐藏 ==> 双击页码;
4. 设计页面字段改成下拉选择 ==> new template 实例的时候传入 fields , 具体参数为 [{field:'name' ,text:'姓名' }, xxx]
5. 远程打印 ==> 修改源码 # 5169 (2.5.3 版本)  this.socket = io("http://192.168.102.166:17521", 改为自己的服务地址或者动态全局配置;
6. print2 打印出来变成js乱码 ==> 查看插件内容的版本是否一致 & 检查打印内容;

# Vue Hiprint Example Project
hiprint project based on Vue Element-UI

## Screenshots

<img src="https://github.com/peakcool/vue-hiprint-example/blob/master/screenshots/main.png">

## Getting Started

This project is a starting point for a vue hiprint.

**Step 1**

```shell
> git clone https://github.com/peakcool/vue-hiprint-example.git
```

**Step 2**

```shell
> cd YOUR_PROJECT/vue-hiprint-example
```

**Step 3**

```shell
> npm install
```
or
```shell
> yarn
```

**Step 4**
```shell
> npm run dev
```

## Resources

A few resources to get you started:

- [Vue 渐进式JvaScript框架](https://cn.vuejs.org/index.html)
- [Element-UI](https://element.eleme.cn/#/zh-CN)
- [hiprint](http://hiprint.io/)


https://blog.csdn.net/byc233518/article/details/107705278#comments_16333108


