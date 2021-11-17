export type RecordMode = Record<string, any>;
// export interface RuleBatch {
export interface QueryResponse {
  batchId: string;
  trigger: RuleBatchTrigger;
  fields: FieldNode[];
  rules: RuleExecution[];
  // ruleDefs: Record<string, RuleDefination>
  valueDiffer: RuleBatchValueDiffer; // ***
}

export interface RuleBatchValueDiffer {
  oldValue: RecordMode;
  newValue: RecordMode;
}

export interface RuleBatchTrigger {
  title: string;
  field: string;
  time: number; // ***
}

export interface FieldNode {
  field: string;
  detail: RecordMode;
}

export interface RuleExecution {
  dependent: string;
  target: string;
  weight: number;
  effect: RuleExecutionEffect[];
}

export interface RuleExecutionEffect {
  ruleId: string; // *** 涉及业务
  actionIndex: number;
  actionName: string; // ***
  variables: RecordMode;
  result: RuleExecutionEffectResult;
  time: number;
  // timeFormat: string
  sequence: number;
  // detail: RuleExecutionEffectDetail[]
}

// export interface RuleExecutionEffectDetail {

// }

export interface RuleExecutionEffectResult {
  type?: string; // ***
  oldValue?: any;
  newValue?: any;
}

export interface RuleDefination {
  ruleId: string;
  actionIndex: number;
  actionName: string;
  params: RecordMode;
  store: RecordMode;
}
