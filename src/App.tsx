import { useState, useEffect } from "react";
import "./App.css";
// import { Draw } from "./components/draw";
import { checkDevtoolsHeath } from "./chrome";
import { orderMock } from "./mock";
let count: 1 | 2 | 3 = 1;
function App() {
  const [status, setStatus] = useState(false);
  const [content, setContent] = useState("暂无数据");
  const devtools = checkDevtoolsHeath();
  const start = () => {
    setStatus(true);
  };
  const end = () => {
    setStatus(false);
    setContent("正在加载数据");
    setTimeout(() => {
      if (count > 3) count = 1;
      const d = orderMock(count, false);
      ++count;
      devtools.notice(JSON.stringify(d));
      setContent("正在解析数据");
      setContent(JSON.stringify(d, null, 2));
    }, 500);
  };
  useEffect(() => {
    if (devtools) {
      const { target } = devtools.getStatic();
      devtools.addEvent(target.s, start);
      devtools.addEvent(target.e, end);
    }
    return () => {
      if (devtools) {
        const { target } = devtools.getStatic();
        devtools.removeEvent(target.s, start);
        devtools.removeEvent(target.e, end);
      }
    };
  });
  return (
    <div className="App">
      <h1 style={{ color: status ? "red" : "green" }}>
        {status ? "开始录制" : "结束录制"}
      </h1>
      <div>{/* <Draw></Draw> */}</div>
      <div>echo:</div>
      <pre>{content}</pre>
    </div>
  );
}

export default App;
