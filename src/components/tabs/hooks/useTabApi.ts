import React, { useContext } from "react";
type IDisposer = () => void;
interface ITabApiEventParams {
  // 终止当前操作
  abort(): void;
}
interface ITabApi {
  // 监听
  on(eventName: "active" | "deactive", params: ITabApiEventParams): IDisposer; // 关闭⻚签
  close(uuid?: string): boolean;
  // 刷新⻚签
  refresh(): boolean;
}
const Observers = React.createContext({
  tabs:[]
});
export function useTabApi(): ITabApi {
  const container = useContext(Observers);

  const refresh = () => {
    return true;
  };
  const close = () => {
    return true;
  };
  const on = (eventName: "active" | "deactive", params: ITabApiEventParams) => {
    return close;
  };
  return {
    on,
    refresh,
    close,
  };
}
