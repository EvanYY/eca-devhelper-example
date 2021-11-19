import { useState, useEffect } from "react";
import { checkDevtoolsHeath } from "../chrome";
import { orderMock } from "../mock";
import { dsMockDic1 } from "../mock/mock1";
import { dsMockDic2 } from "../mock/mock2";
let count: 1 | 2 | 3 = 1;

export const useStartStopEmit = () => {
  const [status, setStatus] = useState(false);
  const [content, setContent] = useState("暂无数据");
  const devtools = checkDevtoolsHeath();
  const start = () => {
    setStatus(true);
    console.log("调用 开始接口");
  };
  const end = () => {
    setStatus(false);
    console.log("调用 结束接口");
    setContent("正在加载数据");
    // 开始解析数据向devtools 发送 解析好的字符串
    setTimeout(() => {
      if (count > 2) return;
      const d = orderMock(count, false);
      ++count;
      setContent("正在解析数据");
      setContent(JSON.stringify(d, null, 2));
      // 接收到 结束指令后解析向devtools 发送 消息
      if (devtools) {
        const { action } = devtools.getStatic();
        devtools.emit(JSON.stringify(dsMockDic1()), action.emitDic);
        devtools.emit(JSON.stringify(dsMockDic2()), action.emitDic);
        devtools.emit(JSON.stringify(d), action.emit);
      } else {
        // 通知自己 文本作用域
      }
    }, 500);
  };
  // 全局订阅 开始结束接口
  useEffect(() => {
    if (devtools) {
      const { target } = devtools.getStatic();
      devtools.addEvent(target.start, start);
      devtools.addEvent(target.stop, end);
    }
    return () => {
      if (devtools) {
        const { target } = devtools.getStatic();
        devtools.removeEvent(target.start, start);
        devtools.removeEvent(target.stop, end);
      }
    };
  });
  return {
    status,
    content,
  };
};
