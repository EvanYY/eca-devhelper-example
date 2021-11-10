export type RecordMode = Record<string, any>;
export type QueryResponse = {
  // 批次id
  batchId: string;
  trigger: {
    // 标题
    title: string;
    // 引发该批次的字段路径
    field: string;
    // 触发时间（该批次执行的开始时间）
    time: string;
  };
  // 字段列表
  fields: FieldNode[];
  // 规则列表（节点之间的边）
  rules: RuleExecution[];
  // 规则定义,查询的字典集合, Record<id, RuleDefination>
  ruleDefs: Record<string, RuleDefination>;
  // 这条边所有规则执行完成对表单前后状态,需要以此标记差异
  state: {
    // 执行前的状态
    oldValue: RecordMode;
    // 执行后的状态
    newValue: RecordMode;
  };
};

export type FieldNode = {
  // 字段名
  field: string;
  // 字段属性，或扩展
  detail: RecordMode;
};

export type RuleExecution = {
  // 依赖字段 节点关系dependent->target
  dependent: string;
  // 触发字段
  target: string;
  // 权重-决定边的宽度
  weight: number;
  // 该条边上的影响
  effect: {
    // 规则定义中的id
    ruleDefId: string;
    // 规则中的变量
    variables: RecordMode;
    // 规则执行结果
    result: {
      // 对target字段影响的属性
      type:
        | "Readonly"
        | "value"
        | "props"
        | "status"
        | "criteria"
        | "validator";
      // 该属性旧的值
      oldValue: any;
      // 该属性新的值
      newValue: any;
    };
  }[];
};

export type RuleDefination = {
  // 规则分支id，及编写时编辑器中生成的规则id
  // guid_id: string
  // 规则名称
  name: string;
  // 规则参数
  params: RecordMode;
};

// 自定义接口字段解耦

export interface ListProps {
  label: string;
  time?: string | number;
  id: string | number;
  idx?: number;
  active?: any;
  store?: any;
  className?: string;
  setState?: any;
}

export interface ListsGroupProps {
  options: any[];
  active: any;
  setState: Function;
  isActiveClass?: string;
}
export interface ListItemProps {
  id: string;
  label: string;
  time?: string;
  store?: any;
}

export type CurTypes = "rules" | "effect" | "cycle";

export interface UseStateUI {
  defCur: string;
  tabsUIData: { label: string; types: string }[];
  cur: CurTypes;
  menu: any[];
  loading: boolean;
  curMenu: ListItemProps;
  setCur: Function;
  setMenu: Function;
  setCurMenu: Function;
  setLoading: Function;
  defCurMenu: Function;
}
export type Dictionary = Record<string, RuleDefination>;
export interface RuleExecutionEffect {
  // 规则定义中的id
  ruleDefId: string;
  // 规则中的变量
  variables: RecordMode;
  // 规则执行结果
  result?: {
    // 对target字段影响的属性
    type: "Readonly" | "value" | "props" | "status" | "criteria" | "validator";
    // 该属性旧的值
    oldValue: any;
    // 该属性新的值
    newValue: any;
  };
}
export interface ParseTemDataRulesLink {
  source: string;
  target: string;
  value: number;
  effect: RuleExecutionEffect[];
}

export interface ResolveEffectTem {
  id: string;
  label: string;
  store: {
    variables: RecordMode;
    params: RecordMode;
  };
}

export interface ParseTemDataRulesNodes {
  name: string;
  store?: any;
}
export interface ParseTemData {
  id: string;
  label: string;
  time: string;
  store: {
    rules: {
      nodes: ParseTemDataRulesNodes[];
      links: ParseTemDataRulesLink[];
    };
    effect: {
      pre: RecordMode;
      next: RecordMode;
    };
    dictionary: Dictionary;
  };
}
