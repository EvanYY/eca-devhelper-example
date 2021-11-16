import "./App.css";
// import { Draw } from "./components/draw";
import { useStartStopEmit } from "./hooks/startStopEmit";
function App() {
  const { status, content } = useStartStopEmit();
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
