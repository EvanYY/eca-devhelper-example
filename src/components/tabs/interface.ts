
// /**
//  * Tab组件 props 定义 */
// export type TabProps = {
//   // ⻚签标题
//   title: string;
//   // ⻚签内容
//   children: JSX.Element;
//   // 激活状态
//   isActive?: boolean
//   uuid: string
// };
// export type TabsProps = {
//   // 多个⻚签定义
//   children: Array<JSX.Element<TabProps>>;
// };

// export type IDisposer = () => void;

// export interface ITabApiEventParams{ // 终止当前操作
//   abort(): void;
//   }
 
// /**
// * useTabApi hooks 的返回结果，可以用来监听或操作⻚签 */
// export interface ITabApi{
//   // 监听
//   on(eventName: 'active'|'deactive', params: ITabApiEventParams): IDisposer; // 关闭⻚签
//   close(): boolean;
//   // 刷新⻚签
//   refresh(): boolean;
//   }
export default {}