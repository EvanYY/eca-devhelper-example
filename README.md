# devtools 使用方法

- 加载本地 chrome 扩展包
- 关闭 devtools 面板
- 刷新页面
- 打开 devtools 面板 切换到 [ q7 visual helper ]

## 页面中使用

- 检查 window 是否挂在了[window.__EAC_DEV_TOOLS__]
- 若存在则订阅两个接口

```javascript
const devtools = window.__EAC_DEV_TOOLS__;
if (!devtools) return;
const { target } = devtools.getStatic();
const start = () => console.log("start 接口");
const end = () => console.log("end 接口");
devtools.addEvent(target.s, start);
devtools.addEvent(target.e, end);
// 销毁时
const { target } = devtools.getStatic();
devtools.removeEvent(target.s, start);
devtools.removeEvent(target.e, end);
```

- [window.__EAC_DEV_TOOLS__].notice(只有一个参数) 接口 对 postMessage 方法进行了包裹，只需将 处理好的 string 传入，若成功则会在 panel 控制台 输出 ðŸš€ ~ file: devtools.js ~ line 56 ~ port.onMessage.addListener ~ message > [Object]
