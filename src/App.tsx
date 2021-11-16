import "./App.css";
// import { Draw } from "./components/draw";
import { useStartStopEmit } from "./hooks/startStopEmit";
import { useDevtoolsActive } from "./hooks/isDevtoolsActive";
function App() {
  const { status, content } = useStartStopEmit();
  const active = useDevtoolsActive();
  return (
    <div className="App">
      <h1 style={{ color: status ? "red" : "green" }}>
        {status ? "开始录制" : "结束录制"}
      </h1>
      <h3>
        <span>{active.status ? "面板开始" : "面板关闭"}</span>
      </h3>
      <div>{/* <Draw></Draw> */}</div>
      <div>echo:</div>
      <pre>{content}</pre>
    </div>
  );
}

export default App;
