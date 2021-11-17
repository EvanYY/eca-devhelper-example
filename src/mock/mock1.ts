import { QueryResponse, RuleDefination } from "./interfaces";
export const dsMock1 = (): QueryResponse[] => [
  {
    batchId: "d36577c3",
    fields: [
      { field: "settleType", detail: {} },
      { field: "triggerSide", detail: {} },
      { field: "triggerObjectTypeObject", detail: {} },
      { field: "supplierProjectOrg", detail: {} },
      { field: "supplierPurchaseOrg", detail: {} },
      { field: "demandSalesOrg", detail: {} },
      { field: "demandProjectOrg", detail: {} },
      { field: "triggerCriteria", detail: {} },
      { field: "billIoType", detail: {} },
    ],
    rules: [
      {
        dependent: "settleType",
        target: "triggerSide",
        weight: 4,
        effect: [
          {
            variables: {
              "$root.settleType": {
                id: "InnerSettleType.interOrgPurchase",
                title: "跨组织采购",
                name: "InnerSettleType",
              },
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
            },
            ruleId: "c9c3514b-1f48-4f48-ace4-8cd6f17d78dc",
            actionIndex: 0,
            result: {
              type: "value",
              oldValue: {
                id: "SettleTriggerSide.supplier",
                ordinal: 0,
                name: "SettleTriggerSide",
                value: "supplier",
                title: "供方",
                isInitData: true,
              },
              newValue: {
                id: "SettleTriggerSide.supplier",
                name: "SettleTriggerSide",
                value: "supplier",
                title: "供方",
              },
            },
            time: 1637119783539,
            sequence: 1827,
            actionName: "ReactiveAssignment",
          },
          {
            variables: {
              "$root.settleType": {
                id: "InnerSettleType.interOrgPurchase",
                title: "跨组织采购",
                name: "InnerSettleType",
              },
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
            },
            ruleId: "c9c3514b-1f48-4f48-ace4-8cd6f17d78dc",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: false, newValue: true },
            time: 1637119783504,
            sequence: 1692,
            actionName: "ReactiveFieldStatus",
          },
        ],
      },
      {
        dependent: "settleType",
        target: "triggerObjectTypeObject",
        weight: 9,
        effect: [
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
              "$root.triggerSide.id": "SettleTriggerSide.supplier",
            },
            ruleId: "1d62ceac-cf36-4c1c-bc04-d05b75f73951",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: true },
            time: 1637119783557,
            sequence: 1915,
            actionName: "ReactiveFieldStatus",
          },
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
              "$root.triggerSide.id": "SettleTriggerSide.supplier",
            },
            ruleId: "5c70f670-8607-4ec5-ae2e-0898a5cf1fb2",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: false },
            time: 1637119783554,
            sequence: 1903,
            actionName: "ReactiveFieldStatus",
          },
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
              "$root.triggerSide.id": "SettleTriggerSide.supplier",
            },
            ruleId: "11002935-e128-4078-829e-2b2150f091ce",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: false },
            time: 1637119783552,
            sequence: 1891,
            actionName: "ReactiveFieldStatus",
          },
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
              "$root.triggerSide.id": "SettleTriggerSide.supplier",
            },
            ruleId: "1d62ceac-cf36-4c1c-bc04-d05b75f73951",
            actionIndex: 1,
            result: {
              type: "value",
              oldValue: {
                id: "Timesheet",
                name: "Timesheet",
                title: "工时记录单",
              },
              newValue: { id: "ApPayment", name: "ApPayment", title: "应付单" },
            },
            time: 1637119783549,
            sequence: 1878,
            actionName: "ReactiveAssignment",
          },
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
              "$root.triggerSide.id": "SettleTriggerSide.supplier",
            },
            ruleId: "1d62ceac-cf36-4c1c-bc04-d05b75f73951",
            actionIndex: 0,
            result: {
              type: "criteria",
              newValue: {
                criteriaStr: "id = 'ApPayment'",
                bindVars: [],
                type: "and",
              },
            },
            time: 1637119783546,
            sequence: 1862,
            actionName: "ReactiveCriteria",
          },
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
              "$root.triggerSide.id": "SettleTriggerSide.supplier",
            },
            ruleId: "11002935-e128-4078-829e-2b2150f091ce",
            actionIndex: 0,
            result: { type: "criteria" },
            time: 1637119783542,
            sequence: 1839,
            actionName: "ReactiveCriteria",
          },
        ],
      },
      {
        dependent: "settleType",
        target: "supplierProjectOrg",
        weight: 2,
        effect: [
          {
            variables: {},
            ruleId: "5009baa4-5422-46e4-8a35-2b721ee8b580",
            actionIndex: 0,
            result: { type: "value" },
            time: 1637119783519,
            sequence: 1754,
            actionName: "Assignment",
          },
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
            },
            ruleId: "657e5000-2c6f-45aa-9a9a-48145163a2ef",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: true },
            time: 1637119783513,
            sequence: 1740,
            actionName: "ReactiveFieldStatus",
          },
        ],
      },
      {
        dependent: "settleType",
        target: "supplierPurchaseOrg",
        weight: 1,
        effect: [
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
            },
            ruleId: "eebe662b-edd5-4297-b318-d6e7bf673267",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: true },
            time: 1637119783524,
            sequence: 1765,
            actionName: "ReactiveFieldStatus",
          },
        ],
      },
      {
        dependent: "settleType",
        target: "demandSalesOrg",
        weight: 2,
        effect: [
          {
            variables: {},
            ruleId: "05646c02-1733-473f-b8ee-3f646f68cce5",
            actionIndex: 0,
            result: { type: "value" },
            time: 1637119783533,
            sequence: 1803,
            actionName: "Assignment",
          },
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
            },
            ruleId: "29c928e4-5cbc-4d2c-bd0d-f5f8a0314ba9",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: true },
            time: 1637119783527,
            sequence: 1777,
            actionName: "ReactiveFieldStatus",
          },
        ],
      },
      {
        dependent: "settleType",
        target: "demandProjectOrg",
        weight: 1,
        effect: [
          {
            variables: {
              "$root.settleType.id": "InnerSettleType.interOrgPurchase",
            },
            ruleId: "4c2c679a-551f-4e64-816c-33bdd5d4301d",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: true },
            time: 1637119783529,
            sequence: 1789,
            actionName: "ReactiveFieldStatus",
          },
        ],
      },
      {
        dependent: "triggerObjectTypeObject",
        target: "triggerCriteria",
        weight: 1,
        effect: [
          {
            variables: {},
            ruleId: "abd71711-7fea-48c2-899d-29d824e4daab",
            actionIndex: 0,
            result: { type: "value" },
            time: 1637119783563,
            sequence: 1933,
            actionName: "Assignment",
          },
        ],
      },
      {
        dependent: "triggerObjectTypeObject",
        target: "billIoType",
        weight: 4,
        effect: [
          {
            variables: { "$root.triggerObjectTypeObject.id": "ApPayment" },
            ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
            actionIndex: 2,
            result: {
              type: "value",
              newValue: {
                id: "BillIoType.blue",
                name: "BillIoType",
                value: "blue",
                title: "蓝单",
              },
            },
            time: 1637119783575,
            sequence: 1986,
            actionName: "ReactiveAssignment",
          },
          {
            variables: { "$root.triggerObjectTypeObject.id": "ApPayment" },
            ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
            actionIndex: 0,
            result: { type: "validator", oldValue: "-", newValue: "-" },
            time: 1637119783572,
            sequence: 1970,
            actionName: "ReactiveFieldValidator",
          },
          {
            variables: { "$root.triggerObjectTypeObject.id": "ApPayment" },
            ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
            actionIndex: 1,
            result: { type: "Readonly", oldValue: true, newValue: false },
            time: 1637119783567,
            sequence: 1955,
            actionName: "ReactiveFieldStatus",
          },
          {
            variables: { "$root.triggerObjectTypeObject.id": "ApPayment" },
            ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
            actionIndex: 0,
            result: { type: "Readonly", oldValue: true, newValue: false },
            time: 1637119783566,
            sequence: 1944,
            actionName: "ReactiveFieldStatus",
          },
        ],
      },
    ],
    valueDiffer: {
      oldValue: {
        attachments: [],
        triggerSide: {
          id: "SettleTriggerSide.supplier",
          ordinal: 0,
          name: "SettleTriggerSide",
          value: "supplier",
          title: "供方",
          isInitData: true,
        },
        triggerCriteriaStr: "",
        settleType: {
          id: "InnerSettleType.interOrgPurchase",
          title: "跨组织采购",
          name: "InnerSettleType",
        },
        demandTargetObjectTypeObject: {
          businessTypes: [
            {
              businessType: { id: "0H3L8K501JR0031", name: "普通采购" },
              id: "BKSM2L5017M0031",
            },
            {
              businessType: { id: "0H3L8K501JR0032", name: "资产采购" },
              id: "BKSM2L5017M0032",
            },
          ],
          id: "ApPayment",
          name: "ApPayment",
          title: "应付单",
        },
        supplierTargetBillType: {
          id: "N3EGHL501QD0001",
          name: "收入确认单",
          businessTypes: [
            {
              id: "XG3HHL501QD0001",
              businessType: { id: "0H3L8K501JR0021", name: "收入确认单立账" },
            },
            {
              id: "XG3HHL501QD0002",
              businessType: { id: "0H3L8K501JR0022", name: "发票立账" },
            },
            {
              id: "XG3HHL501QD0039",
              businessType: {
                id: "0H3L8K501JR0053",
                name: "收入确认单立账（发票计税）",
              },
            },
          ],
          billIoType: { id: "BillIoType.blue", title: "蓝单" },
        },
        id: "",
        currency: {
          id: "FX3V3K501JR0001",
          isLocalCurrency: true,
          name: "人民币",
          precision: 4,
          rateBase: 1,
        },
        triggerObjectTypeObject: {
          id: "Timesheet",
          name: "Timesheet",
          title: "工时记录单",
        },
        demandTargetBillType: {
          billIoType: { id: "BillIoType.blue", title: "蓝单" },
          businessTypes: [
            {
              businessType: { id: "0H3L8K501JR0031", name: "普通采购" },
              id: "L96HHL501QD0001",
            },
            {
              businessType: { id: "0H3L8K501JR0032", name: "资产采购" },
              id: "L96HHL501QD0002",
            },
          ],
          code: "AP01",
          id: "E5JGHL501QD0001",
          isDisabled: false,
          name: "应付单",
          objectTypeObject: { id: "ApPayment", title: "应付单" },
        },
        enabledTime: 1637078400000,
        isPriceCanModify: false,
        settleRuleItems: [
          {
            isPriceCanModify: false,
            ordinal: 0,
            id: "",
            description: "",
            _entryMode: "Create",
            uid: 0,
            editFlag: "add",
          },
        ],
        supplierTargetObjectTypeObject: {
          id: "RevenueConfirmation",
          name: "RevenueConfirmation",
          title: "收入确认单",
        },
        createdOrg: {
          code: "001007",
          id: "1U2VDW52DUM002M",
          isCustomer: false,
          isEnabled: true,
          isFinancialOrg: true,
          isInventoryOrg: false,
          isLegalEntity: false,
          isOtherParty: false,
          isProjectOrg: false,
          isPurchaseOrg: true,
          isSalesOrg: true,
          isVendor: false,
          isVirtual: false,
          name: "财务组织A（成都）",
          organizationRoles: [
            { id: "1U2VDW52DUM002L", partyRoleType: { id: "FinancialOrg" } },
            { id: "DSN8EW52DMX0031", partyRoleType: { id: "PurchaseOrg" } },
            { id: "DSN8EW52DMX0032", partyRoleType: { id: "SalesOrg" } },
          ],
          ownerLegalEntityOrg: { id: "LD61DW52DBB001Q", name: "成都企企" },
          partyRoles: [
            { id: "1U2VDW52DUM002L" },
            { id: "DSN8EW52DMX0031" },
            { id: "DSN8EW52DMX0032" },
          ],
          partyType: { id: "OperationUnit", name: "经营单元" },
        },
        supplierTargetBusinessType: {
          id: "0H3L8K501JR0021",
          name: "收入确认单立账",
          code: "AR001",
        },
        priceSourceType: {
          id: "PriceSourceType.settlePrice",
          ordinal: 0,
          name: "PriceSourceType",
          value: "settlePrice",
          title: "结算价格表",
          isInitData: true,
        },
        code: "",
        name: "",
        accountingMethod: {
          id: "AccountingMethod.revenueConfirmation",
          ordinal: 0,
          name: "AccountingMethod",
          value: "revenueConfirmation",
          title: "收入确认单立账",
          isInitData: true,
        },
        demandTargetBusinessType: {
          code: "AP001",
          id: "0H3L8K501JR0031",
          name: "普通采购",
        },
        description: "",
      },
      newValue: {
        attachments: [],
        triggerSide: {
          id: "SettleTriggerSide.supplier",
          name: "SettleTriggerSide",
          value: "supplier",
          title: "供方",
        },
        triggerCriteriaStr: "",
        settleType: {
          id: "InnerSettleType.interOrgPurchase",
          title: "跨组织采购",
          name: "InnerSettleType",
        },
        demandTargetObjectTypeObject: {
          businessTypes: [
            {
              businessType: { id: "0H3L8K501JR0031", name: "普通采购" },
              id: "BKSM2L5017M0031",
            },
            {
              businessType: { id: "0H3L8K501JR0032", name: "资产采购" },
              id: "BKSM2L5017M0032",
            },
          ],
          id: "ApPayment",
          name: "ApPayment",
          title: "应付单",
        },
        supplierTargetBillType: {
          id: "N3EGHL501QD0001",
          name: "收入确认单",
          businessTypes: [
            {
              id: "XG3HHL501QD0001",
              businessType: { id: "0H3L8K501JR0021", name: "收入确认单立账" },
            },
            {
              id: "XG3HHL501QD0002",
              businessType: { id: "0H3L8K501JR0022", name: "发票立账" },
            },
            {
              id: "XG3HHL501QD0039",
              businessType: {
                id: "0H3L8K501JR0053",
                name: "收入确认单立账（发票计税）",
              },
            },
          ],
          billIoType: { id: "BillIoType.blue", title: "蓝单" },
        },
        id: "",
        currency: {
          id: "FX3V3K501JR0001",
          isLocalCurrency: true,
          name: "人民币",
          precision: 4,
          rateBase: 1,
        },
        triggerObjectTypeObject: {
          id: "ApPayment",
          name: "ApPayment",
          title: "应付单",
        },
        demandTargetBillType: {
          billIoType: { id: "BillIoType.blue", title: "蓝单" },
          businessTypes: [
            {
              businessType: { id: "0H3L8K501JR0031", name: "普通采购" },
              id: "L96HHL501QD0001",
            },
            {
              businessType: { id: "0H3L8K501JR0032", name: "资产采购" },
              id: "L96HHL501QD0002",
            },
          ],
          code: "AP01",
          id: "E5JGHL501QD0001",
          isDisabled: false,
          name: "应付单",
          objectTypeObject: { id: "ApPayment", title: "应付单" },
        },
        enabledTime: 1637078400000,
        isPriceCanModify: false,
        settleRuleItems: [
          {
            isPriceCanModify: false,
            ordinal: 0,
            id: "",
            description: "",
            _entryMode: "Create",
            uid: 0,
            editFlag: "add",
          },
        ],
        supplierTargetObjectTypeObject: {
          id: "RevenueConfirmation",
          name: "RevenueConfirmation",
          title: "收入确认单",
        },
        createdOrg: {
          code: "001007",
          id: "1U2VDW52DUM002M",
          isCustomer: false,
          isEnabled: true,
          isFinancialOrg: true,
          isInventoryOrg: false,
          isLegalEntity: false,
          isOtherParty: false,
          isProjectOrg: false,
          isPurchaseOrg: true,
          isSalesOrg: true,
          isVendor: false,
          isVirtual: false,
          name: "财务组织A（成都）",
          organizationRoles: [
            { id: "1U2VDW52DUM002L", partyRoleType: { id: "FinancialOrg" } },
            { id: "DSN8EW52DMX0031", partyRoleType: { id: "PurchaseOrg" } },
            { id: "DSN8EW52DMX0032", partyRoleType: { id: "SalesOrg" } },
          ],
          ownerLegalEntityOrg: { id: "LD61DW52DBB001Q", name: "成都企企" },
          partyRoles: [
            { id: "1U2VDW52DUM002L" },
            { id: "DSN8EW52DMX0031" },
            { id: "DSN8EW52DMX0032" },
          ],
          partyType: { id: "OperationUnit", name: "经营单元" },
        },
        supplierTargetBusinessType: {
          id: "0H3L8K501JR0021",
          name: "收入确认单立账",
          code: "AR001",
        },
        priceSourceType: {
          id: "PriceSourceType.settlePrice",
          ordinal: 0,
          name: "PriceSourceType",
          value: "settlePrice",
          title: "结算价格表",
          isInitData: true,
        },
        code: "",
        name: "",
        billIoType: {
          id: "BillIoType.blue",
          name: "BillIoType",
          value: "blue",
          title: "蓝单",
        },
        accountingMethod: {
          id: "AccountingMethod.revenueConfirmation",
          ordinal: 0,
          name: "AccountingMethod",
          value: "revenueConfirmation",
          title: "收入确认单立账",
          isInitData: true,
        },
        demandTargetBusinessType: {
          code: "AP001",
          id: "0H3L8K501JR0031",
          name: "普通采购",
        },
        description: "",
      },
    },
    trigger: { title: "settleType", field: "settleType", time: 1637119783503 },
  },
];

export const dsMockDic1 = (): RuleDefination[] => [
  {
    ruleId: "1e33324d-9041-4fc1-90c7-937f7b83b1e1",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierFinancialOrg",
      fragments: [
        {
          bindVars: {
            ids: "$fn.stringsToGql('BusinessModule_innertrans')",
          },
          criteriaStr:
            "id in (select orgId from BusinessModuleOrgEnable where businessModuleId in (:ids) and isEnabled = 'true') and isFinancialOrg='t'",
          fireImmediately: true,
          when: "true",
        },
      ],
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "c9c3514b-1f48-4f48-ace4-8cd6f17d78dc",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "!$root.settleType || $root.settleType.id === 'InnerSettleType.interOrgPurchase'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "triggerSide",
    },
    store: {
      description: "内部结算类型=跨组织采购时，结算发起方只能选择供方",
    },
  },
  {
    ruleId: "11002935-e128-4078-829e-2b2150f091ce",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "$root.settleType.id === 'InnerSettleType.interOrgDeliver' && $root.triggerSide.id === 'SettleTriggerSide.supplier'",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "triggerObjectTypeObject",
    },
    store: {
      description:
        "内部结算类型=跨组织交付且结算发起方=供方时，触发对象只能选择：工时记录单",
    },
  },
  {
    ruleId: "5c70f670-8607-4ec5-ae2e-0898a5cf1fb2",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "$root.settleType.id === 'InnerSettleType.interOrgDeliver' && $root.triggerSide.id === 'SettleTriggerSide.demand'",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "triggerObjectTypeObject",
    },
    store: {
      description:
        "内部结算类型=跨组织交付且结算发起方=需方时，触发对象只能选择：收入确认单",
    },
  },
  {
    ruleId: "1d62ceac-cf36-4c1c-bc04-d05b75f73951",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "$root.settleType.id === 'InnerSettleType.interOrgPurchase' && $root.triggerSide.id === 'SettleTriggerSide.supplier'",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "triggerObjectTypeObject",
    },
    store: {
      description:
        "内部结算类型=跨组织采购且结算发起方=供方时，触发对象只能选择：应付单",
    },
  },
  {
    ruleId: "657e5000-2c6f-45aa-9a9a-48145163a2ef",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "!$root.supplierFinancialOrg || ($root.settleType.id != 'InnerSettleType.interOrgDeliver')",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "supplierProjectOrg",
    },
    store: {
      description:
        "内部结算类型=跨组织交付且供方财务组织有值时，供方项目组织可以编辑",
    },
  },
  {
    ruleId: "eebe662b-edd5-4297-b318-d6e7bf673267",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "!$root.supplierFinancialOrg || ($root.settleType.id != 'InnerSettleType.interOrgPurchase')",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "supplierPurchaseOrg",
    },
    store: {
      description:
        "内部结算类型=跨组织采购且供方财务组织有值时，供方采购组织可以编辑",
    },
  },
  {
    ruleId: "29c928e4-5cbc-4d2c-bd0d-f5f8a0314ba9",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "!$root.demandFinancialOrg || ($root.settleType.id != 'InnerSettleType.interOrgDeliver')",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "demandSalesOrg",
    },
    store: {
      description:
        "内部结算类型=跨组织交付且需方财务组织有值时，需方销售组织可以编辑",
    },
  },
  {
    ruleId: "29c928e4-5cbc-4d2c-bd0d-f5f8a0314ba9",
    actionIndex: 0,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: true,
        expr: "undefined",
        fireImmediately: true,
        when: "!$root.demandFinancialOrg",
      },
      field: "demandSalesOrg",
    },
    store: {
      description:
        "内部结算类型=跨组织交付且需方财务组织有值时，需方销售组织可以编辑",
    },
  },
  {
    ruleId: "4c2c679a-551f-4e64-816c-33bdd5d4301d",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "!$root.demandFinancialOrg || ($root.settleType.id != 'InnerSettleType.interOrgPurchase')",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "demandProjectOrg",
    },
    store: {
      description:
        "内部结算类型=跨组织采购且需方财务组织有值时，需方项目组织可以编辑",
    },
  },
  {
    ruleId: "6b2bf3cc-615d-4955-8d58-d8d25ed5edf3",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "accountingMethod",
      fragment: {
        criteriaStr: "id != 'AccountingMethod.revenueConfirmationInvoice'",
        fireImmediately: true,
      },
    },
    store: {
      description: "供方立账方式 不能选择 收入确认发票",
    },
  },
  {
    ruleId: "4e616d92-830e-411e-8108-72e976ea9ae0",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.accountingMethod.id === 'AccountingMethod.revenueConfirmation'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "supplierTargetObjectTypeObject",
    },
    store: {
      description:
        "供方立账方式=收入确认单立账时，供方业务对象 只能选择 收入确认单, 供方业务类型只能选择收入确认单立账",
    },
  },
  {
    ruleId: "4e616d92-830e-411e-8108-72e976ea9ae0",
    actionIndex: 1,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.supplierTargetObjectTypeObject.id === 'RevenueConfirmation'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "supplierTargetBusinessType",
    },
    store: {
      description:
        "供方立账方式=收入确认单立账时，供方业务对象 只能选择 收入确认单, 供方业务类型只能选择收入确认单立账",
    },
  },
  {
    ruleId: "d9d0f2be-102f-4218-8cfa-a1d2dc38d3c4",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.accountingMethod.id === 'AccountingMethod.invoice'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "supplierTargetObjectTypeObject",
    },
    store: {
      description:
        "【供方立账方式】=【发票立账】时，【供方业务对象】 只能选择 【发票】，【供方业务类型】 只能选择 【发票立账】",
    },
  },
  {
    ruleId: "d9d0f2be-102f-4218-8cfa-a1d2dc38d3c4",
    actionIndex: 1,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.supplierTargetObjectTypeObject.id === 'Invoice'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "supplierTargetBusinessType",
    },
    store: {
      description:
        "【供方立账方式】=【发票立账】时，【供方业务对象】 只能选择 【发票】，【供方业务类型】 只能选择 【发票立账】",
    },
  },
  {
    ruleId: "5ecdeb42-55fc-44e9-b0d0-bf601eb9f3e9",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effects: [
        {
          expr: "$root.priceSourceType.id === 'PriceSourceType.manualInput'",
          fireImmediately: true,
          status: "Readonly",
        },
      ],
      field: "isPriceCanModify",
    },
    store: {
      description: "结算价格依据=手工录入时，价格可修改不允许修改",
    },
  },
  {
    ruleId: "620057e0-3674-4d6d-8656-d443f2963069",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetBillType",
      fragments: [
        {
          criteriaStr: "objectType IN ( 'RevenueConfirmation', 'Invoice')",
          fireImmediately: true,
          when: "!$root.accountingMethod",
        },
      ],
    },
    store: {
      description: "根据【供方立账方式】，过滤【供方单据类型】范围",
    },
  },
  {
    ruleId: "620057e0-3674-4d6d-8656-d443f2963069",
    actionIndex: 1,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetBillType",
      fragments: [
        {
          criteriaStr: "objectType IN ('RevenueConfirmation')",
          fireImmediately: true,
          when: "$root.accountingMethod.id === 'AccountingMethod.revenueConfirmation'",
        },
      ],
    },
    store: {
      description: "根据【供方立账方式】，过滤【供方单据类型】范围",
    },
  },
  {
    ruleId: "620057e0-3674-4d6d-8656-d443f2963069",
    actionIndex: 2,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetBillType",
      fragments: [
        {
          criteriaStr: "objectType IN ('Invoice')",
          fireImmediately: true,
          when: "$root.accountingMethod.id === 'AccountingMethod.invoice'",
        },
      ],
    },
    store: {
      description: "根据【供方立账方式】，过滤【供方单据类型】范围",
    },
  },
  {
    ruleId: "620057e0-3674-4d6d-8656-d443f2963069",
    actionIndex: 3,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetBillType",
      fragments: [
        {
          bindVars: {
            businessTypeId:
              "$current.accountingMethod.id == 'AccountingMethod.revenueConfirmation' ? '0H3L8K501JR0021' : ($current.accountingMethod.id == 'AccountingMethod.invoice' ? '0H3L8K501JR0022' : '')",
          },
          criteriaStr: "businessTypes.businessType.id =: businessTypeId",
          fireImmediately: true,
        },
      ],
    },
    store: {
      description: "根据【供方立账方式】，过滤【供方单据类型】范围",
    },
  },
  {
    ruleId: "5cd00580-824d-43c1-af10-f0b749eabe3e",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "priceSourceType",
      fragments: [
        {
          criteriaStr: "id != 'PriceSourceType.supplierCostAddPrice'",
          fireImmediately: true,
          when: "$root.triggerObjectTypeObject.id === 'RevenueConfirmation'",
        },
      ],
    },
    store: {
      description:
        "【触发对象】=【收入确认单】时，【结算价格依据】不能选【供方成本加成】",
    },
  },
  {
    ruleId: "3eeff7d4-aac4-44c1-b703-edafbe91cfae",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.priceSourceType.id !== 'PriceSourceType.supplierCostAddPrice'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "addPriceRate",
    },
    store: {
      description: "结算价格依据=供方成本加成时，才允许录入加成率",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.triggerObjectTypeObject.id == 'Timesheet'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "billIoType",
    },
    store: {
      description:
        "触发对象=收入确认单或者应付单，单据方向必填, 默认蓝单；触发对象=工时，置灰清空",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
    actionIndex: 1,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.triggerObjectTypeObject.id == 'Timesheet'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "billIoType",
    },
    store: {
      description:
        "触发对象=收入确认单或者应付单，单据方向必填, 默认蓝单；触发对象=工时，置灰清空",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37c",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$root.accountingMethod.id != 'AccountingMethod.invoice'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "revenueConfirmationBillType",
    },
    store: {
      description: "立账方式=发票立账，发票立账收入确认据类型必填",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37d",
    actionIndex: 0,
    actionName: "ReactiveFieldValidator",
    params: {
      effect: {
        name: "required",
        when: "$root.settleRuleItems.length == 0",
      },
      field: "supplierFinancialOrg",
    },
    store: {
      description:
        "只填表头时，表头的供方财务组织必填 // TODO 暂时不生效，不能取到NotEmpty视图",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37e",
    actionIndex: 0,
    actionName: "ReactiveFieldValidator",
    params: {
      effect: {
        name: "required",
        when: "$root.settleRuleItems.length == 0",
      },
      field: "supplierFinancialOrg",
    },
    store: {
      description: "只填表头时，表头的供方财务组织必填",
    },
  },
  {
    ruleId: "e5188418-f60e-4279-984c-bdd2bde4f357",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "demandFinancialOrg",
      fragments: [
        {
          criteriaStr:
            "id in (select orgId from BusinessModuleOrgEnable where businessModuleId='BusinessModule_innertrans')",
          fireImmediately: true,
          when: "true",
        },
      ],
    },
    store: {
      description: "需方财务组织只能选择启用了内部交易的财务组织",
    },
  },
  {
    ruleId: "0e27736e-f452-4010-a7b4-52e6fa856462",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "true",
        status: "Readonly",
        when: "$root.code",
      },
      field: "name",
    },
    store: {
      description: "测试规则",
    },
  },
  {
    ruleId: "0e27736e-f452-4010-a7b4-52e6fa856462",
    actionIndex: 1,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "true",
        status: "Required",
        when: "$root.code",
      },
      field: "name",
    },
    store: {
      description: "测试规则",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-e56c31d8-7497-4ce4-bb01-8492b7f0424f",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "createdOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["FinancialOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-0dccdf65-b491-452b-9e64-8ea16b106d05",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "demandFinancialOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["FinancialOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-9109a071-0e46-4690-9a82-494abf5dbdca",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "demandSalesOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["SalesOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-b694b596-36c0-4430-9b4c-e12a2554047a",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "demandProjectOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["ProjectOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-06ac4f2c-66d2-4b18-ba5c-de915b675438",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "supplierFinancialOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["FinancialOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-6d26bef1-9cb5-40a8-ba0c-5aef40dc5ce0",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "supplierProjectOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["ProjectOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-f3b49531-a9c6-41a6-bf96-fb0463a39a74",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "supplierPurchaseOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["PurchaseOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "ContextRoleOrgPersonRelationship_demandTargetCreatedUser",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "demandTargetCreatedUser",
      effect: {
        props: {
          contextOrgIds: "[$current.demandFinancialOrg.id]",
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "ContextRoleOrgPersonRelationship_supplierTargetCreatedUser",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "supplierTargetCreatedUser",
      effect: {
        props: {
          contextOrgIds: "[$current.supplierFinancialOrg.id]",
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-62f99347-356a-45ca-9e43-e039b5664cc1",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierFinancialOrg",
      fragment: {
        criteriaStr: "id != :demandFinancialOrg",
        bindVars: {
          demandFinancialOrg: "$current.demandFinancialOrg.id",
        },
        autoClear: true,
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-62f99347-356a-45ca-9e43-e039b5664cc1",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      field: "supplierFinancialOrg",
      effect: {
        expr: "undefined",
        override: true,
        autoClear: false,
        when: "!$current.demandFinancialOrg",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-682c8095-94e6-49c4-8939-c6bfeb691f53",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierProjectOrg",
      fragment: {
        criteriaStr:
          "projectOrgRole.ownerFinancialOrgId = :supplierFinancialOrg",
        bindVars: {
          supplierFinancialOrg: "$current.supplierFinancialOrg.id",
        },
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-fafd251b-7747-488f-9627-2e719a21518f",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "demandFinancialOrg",
      fragment: {
        criteriaStr: "id != :supplierFinancialOrg",
        bindVars: {
          supplierFinancialOrg: "$current.supplierFinancialOrg.id",
        },
        autoClear: true,
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-fafd251b-7747-488f-9627-2e719a21518f",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      field: "demandFinancialOrg",
      effect: {
        expr: "undefined",
        override: true,
        autoClear: false,
        when: "!$current.supplierFinancialOrg",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-d3857a2a-5263-4f68-bf79-35e5a1b02d7d",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "demandProjectOrg",
      fragment: {
        criteriaStr: "projectOrgRole.ownerFinancialOrgId = :demandFinancialOrg",
        bindVars: {
          demandFinancialOrg: "$current.demandFinancialOrg.id",
        },
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-b9e67113-156d-462d-b785-2ffa43c8b1cc",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetCreatedUser",
      fragment: {
        criteriaStr: "",
        bindVars: {
          supplierFinancialOrg: "$current.supplierFinancialOrg.id",
        },
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Criteria-e7b181c8-6d42-4d21-9ccb-b047e20d8f6a",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "demandTargetCreatedUser",
      fragment: {
        criteriaStr: "",
        bindVars: {
          demandFinancialOrg: "$current.demandFinancialOrg.id",
        },
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-ImmutableCriteria-4af8892d-de73-49b9-a639-6b6a27d1bed9",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "demandTargetBillType",
      fragment: {
        criteriaStr: "objectType = 'ApPayment'",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-ImmutableCriteria-79200f3d-17ed-427a-8ce4-6eb6f7b0e6d1",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "demandTargetBusinessType",
      fragment: {
        criteriaStr: "objectTypes.objectType = 'ApPayment'",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-Status-c9779575-dff8-4ada-9ed4-f039182823b8",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      field: "createdOrg",
      effect: {
        status: "Readonly",
        expr: true,
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-StatusChange-7310abba-85c2-40b1-92c8-043e7b19f378",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      field: "supplierProjectOrg",
      effect: {
        status: "Readonly",
        expr: "!$current.supplierFinancialOrg",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-StatusChange-9d862084-6bd8-47c4-81f8-838abf582f83",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      field: "demandProjectOrg",
      effect: {
        status: "Readonly",
        expr: "!$current.demandFinancialOrg",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-StatusChange-395b6d96-9cc4-4367-afae-c5a094d4bad4",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      field: "supplierTargetCreatedUser",
      effect: {
        status: "Readonly",
        expr: "!$current.supplierFinancialOrg",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Old-StatusChange-a7880bac-5b3c-4767-bfd3-a5c534fab383",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      field: "demandTargetCreatedUser",
      effect: {
        status: "Readonly",
        expr: "!$current.demandFinancialOrg",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Criteria-ContextRoleRelationShip-0",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierPurchaseOrg",
      fragment: {
        criteriaStr:
          "(m.id=:supplierFinancialOrgId or exists (select 1 from PartyDelegateRelationship where relationshipTypeId in ('PurchaseAccountingDelegateRelationship')and fromPartyId=m.id and toPartyId=:supplierFinancialOrgId  and isDisabled=false))",
        bindVars: {
          supplierFinancialOrgId: "$current.supplierFinancialOrg.id",
        },
        when: "($current.settleType.id === 'InnerSettleType.interOrgPurchase') && (!!$current.supplierFinancialOrg.id)",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "Criteria-ContextRoleRelationShip-1",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "demandSalesOrg",
      fragment: {
        criteriaStr:
          "(m.id=:demandFinancialOrgId or exists (select 1 from PartyDelegateRelationship where relationshipTypeId in ('SalesAccountingDelegateRelationship')and fromPartyId=m.id and toPartyId=:demandFinancialOrgId  and isDisabled=false))",
        bindVars: {
          demandFinancialOrgId: "$current.demandFinancialOrg.id",
        },
        when: "($current.settleType.id === 'InnerSettleType.interOrgDeliver') && (!!$current.demandFinancialOrg.id)",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
    },
  },
  {
    ruleId: "c9211bf8-d6b2-462a-b029-6213a3c2f8b9",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "$current.priceSourceType.id !== 'PriceSourceType.supplierCostAddPrice'",
        fireImmediately: true,
        status: "Readonly",
      },
      field: "addPriceRate",
    },
    store: {
      description: "【子表】结算价格依据=供方成本加成时，才允许录入加成率",
      reference: "settleRuleItems",
    },
  },
  {
    ruleId: "OrgRoleTypeIds-921634cb-4211-4f02-81da-ea1e78dedbd0",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "createdOrg",
      effect: {
        props: {
          orgRoleTypeIds: ["FinancialOrg"],
        },
        isDestruct: false,
        when: "true",
        fireImmediately: true,
      },
    },
    store: {
      description: "",
      reference: "settleRuleItems",
    },
  },
  {
    ruleId: "QueryContext-2c03a54c-43c1-43ea-947f-e2b7f71d5fc8",
    actionIndex: 0,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "productCategory",
      effects: [
        {
          props: {
            contextOrgIds: "[$root.createdOrg.id]",
          },
          isDestruct: false,
          when: "$root.createdOrg.id",
          fireImmediately: true,
        },
      ],
    },
    store: {
      description: "",
      reference: "settleRuleItems",
    },
  },
  {
    ruleId: "QueryContext-2c03a54c-43c1-43ea-947f-e2b7f71d5fc8",
    actionIndex: 1,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "rank",
      effects: [
        {
          props: {
            contextOrgIds: "[$root.createdOrg.id]",
          },
          isDestruct: false,
          when: "$root.createdOrg.id",
          fireImmediately: true,
        },
      ],
    },
    store: {
      description: "",
      reference: "settleRuleItems",
    },
  },
  {
    ruleId: "QueryContext-2c03a54c-43c1-43ea-947f-e2b7f71d5fc8",
    actionIndex: 2,
    actionName: "ReactiveFieldComponentProps",
    params: {
      field: "projectRole",
      effects: [
        {
          props: {
            contextOrgIds: "[$root.createdOrg.id]",
          },
          isDestruct: false,
          when: "$root.createdOrg.id",
          fireImmediately: true,
        },
      ],
    },
    store: {
      description: "",
      reference: "settleRuleItems",
    },
  },
  {
    ruleId: "19dcb83f-caca-42a6-bf79-b64463b03994",
    actionIndex: 0,
    actionName: "ReactiveFieldStatus",
    params: {
      effect: {
        expr: "!$fn.isCarryFieldVisible('code', $current.product)",
        fireImmediately: "true",
        status: "Sensitive",
      },
      field: "product.code",
    },
    store: {
      description: "外键携带字段，根据外键控制敏感属性",
      reference: "settleRuleItems",
    },
  },
  {
    ruleId: "c9c3514b-1f48-4f48-ace4-8cd6f17d78dc",
    actionIndex: 0,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getEnumValue('SettleTriggerSide.supplier')",
        fireImmediately: true,
        when: "!$root.settleType || $root.settleType.id === 'InnerSettleType.interOrgPurchase'",
      },
      field: "triggerSide",
    },
    store: {
      description: "内部结算类型=跨组织采购时，结算发起方只能选择供方",
    },
  },
  {
    ruleId: "11002935-e128-4078-829e-2b2150f091ce",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "triggerObjectTypeObject",
      fragments: [
        {
          criteriaStr: "id = 'Timesheet'",
          fireImmediately: true,
          when: "$root.settleType.id === 'InnerSettleType.interOrgDeliver' && $root.triggerSide.id === 'SettleTriggerSide.supplier'",
        },
      ],
    },
    store: {
      description:
        "内部结算类型=跨组织交付且结算发起方=供方时，触发对象只能选择：工时记录单",
    },
  },
  {
    ruleId: "11002935-e128-4078-829e-2b2150f091ce",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getObjectType('Timesheet')",
        fireImmediately: true,
        when: "$root.settleType.id === 'InnerSettleType.interOrgDeliver' && $root.triggerSide.id === 'SettleTriggerSide.supplier'",
      },
      field: "triggerObjectTypeObject",
    },
    store: {
      description:
        "内部结算类型=跨组织交付且结算发起方=供方时，触发对象只能选择：工时记录单",
    },
  },
  {
    ruleId: "5c70f670-8607-4ec5-ae2e-0898a5cf1fb2",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "triggerObjectTypeObject",
      fragments: [
        {
          criteriaStr: "id = 'RevenueConfirmation'",
          fireImmediately: true,
          when: "$root.settleType.id === 'InnerSettleType.interOrgDeliver' && $root.triggerSide.id === 'SettleTriggerSide.demand'",
        },
      ],
    },
    store: {
      description:
        "内部结算类型=跨组织交付且结算发起方=需方时，触发对象只能选择：收入确认单",
    },
  },
  {
    ruleId: "5c70f670-8607-4ec5-ae2e-0898a5cf1fb2",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getObjectType('RevenueConfirmation')",
        fireImmediately: true,
        when: "$root.settleType.id === 'InnerSettleType.interOrgDeliver' && $root.triggerSide.id === 'SettleTriggerSide.demand'",
      },
      field: "triggerObjectTypeObject",
    },
    store: {
      description:
        "内部结算类型=跨组织交付且结算发起方=需方时，触发对象只能选择：收入确认单",
    },
  },
  {
    ruleId: "1d62ceac-cf36-4c1c-bc04-d05b75f73951",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "triggerObjectTypeObject",
      fragments: [
        {
          criteriaStr: "id = 'ApPayment'",
          fireImmediately: true,
          when: "$root.settleType.id === 'InnerSettleType.interOrgPurchase' && $root.triggerSide.id === 'SettleTriggerSide.supplier'",
        },
      ],
    },
    store: {
      description:
        "内部结算类型=跨组织采购且结算发起方=供方时，触发对象只能选择：应付单",
    },
  },
  {
    ruleId: "1d62ceac-cf36-4c1c-bc04-d05b75f73951",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getObjectType('ApPayment')",
        fireImmediately: true,
        when: "$root.settleType.id === 'InnerSettleType.interOrgPurchase' && $root.triggerSide.id === 'SettleTriggerSide.supplier'",
      },
      field: "triggerObjectTypeObject",
    },
    store: {
      description:
        "内部结算类型=跨组织采购且结算发起方=供方时，触发对象只能选择：应付单",
    },
  },
  {
    ruleId: "4e616d92-830e-411e-8108-72e976ea9ae0",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetObjectTypeObject",
      fragments: [
        {
          criteriaStr: "id = 'RevenueConfirmation'",
          fireImmediately: true,
          when: "$root.accountingMethod.id === 'AccountingMethod.revenueConfirmation'",
        },
      ],
    },
    store: {
      description:
        "供方立账方式=收入确认单立账时，供方业务对象 只能选择 收入确认单, 供方业务类型只能选择收入确认单立账",
    },
  },
  {
    ruleId: "4e616d92-830e-411e-8108-72e976ea9ae0",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getObjectType('RevenueConfirmation')",
        fireImmediately: true,
        when: "$root.accountingMethod.id === 'AccountingMethod.revenueConfirmation'",
      },
      field: "supplierTargetObjectTypeObject",
    },
    store: {
      description:
        "供方立账方式=收入确认单立账时，供方业务对象 只能选择 收入确认单, 供方业务类型只能选择收入确认单立账",
    },
  },
  {
    ruleId: "4e616d92-830e-411e-8108-72e976ea9ae0",
    actionIndex: 2,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetBusinessType",
      fragments: [
        {
          criteriaStr: "code = 'AR001'",
          fireImmediately: true,
          when: "$root.supplierTargetObjectTypeObject.id === 'RevenueConfirmation'",
        },
      ],
    },
    store: {
      description:
        "供方立账方式=收入确认单立账时，供方业务对象 只能选择 收入确认单, 供方业务类型只能选择收入确认单立账",
    },
  },
  {
    ruleId: "4e616d92-830e-411e-8108-72e976ea9ae0",
    actionIndex: 3,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getBusinessType('AR001')",
        fireImmediately: true,
        when: "$root.supplierTargetObjectTypeObject.id === 'RevenueConfirmation'",
      },
      field: "supplierTargetBusinessType",
    },
    store: {
      description:
        "供方立账方式=收入确认单立账时，供方业务对象 只能选择 收入确认单, 供方业务类型只能选择收入确认单立账",
    },
  },
  {
    ruleId: "d9d0f2be-102f-4218-8cfa-a1d2dc38d3c4",
    actionIndex: 0,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetObjectTypeObject",
      fragments: [
        {
          criteriaStr: "id = 'Invoice'",
          fireImmediately: true,
          when: "$root.accountingMethod.id === 'AccountingMethod.invoice'",
        },
      ],
    },
    store: {
      description:
        "【供方立账方式】=【发票立账】时，【供方业务对象】 只能选择 【发票】，【供方业务类型】 只能选择 【发票立账】",
    },
  },
  {
    ruleId: "d9d0f2be-102f-4218-8cfa-a1d2dc38d3c4",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getObjectType('Invoice')",
        fireImmediately: true,
        when: "$root.accountingMethod.id === 'AccountingMethod.invoice'",
      },
      field: "supplierTargetObjectTypeObject",
    },
    store: {
      description:
        "【供方立账方式】=【发票立账】时，【供方业务对象】 只能选择 【发票】，【供方业务类型】 只能选择 【发票立账】",
    },
  },
  {
    ruleId: "d9d0f2be-102f-4218-8cfa-a1d2dc38d3c4",
    actionIndex: 2,
    actionName: "ReactiveCriteria",
    params: {
      field: "supplierTargetBusinessType",
      fragments: [
        {
          criteriaStr: "code = 'AR002'",
          fireImmediately: true,
          when: "$root.supplierTargetObjectTypeObject.id === 'Invoice'",
        },
      ],
    },
    store: {
      description:
        "【供方立账方式】=【发票立账】时，【供方业务对象】 只能选择 【发票】，【供方业务类型】 只能选择 【发票立账】",
    },
  },
  {
    ruleId: "d9d0f2be-102f-4218-8cfa-a1d2dc38d3c4",
    actionIndex: 3,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getBusinessType('AR002')",
        fireImmediately: true,
        when: "$root.supplierTargetObjectTypeObject.id === 'Invoice'",
      },
      field: "supplierTargetBusinessType",
    },
    store: {
      description:
        "【供方立账方式】=【发票立账】时，【供方业务对象】 只能选择 【发票】，【供方业务类型】 只能选择 【发票立账】",
    },
  },
  {
    ruleId: "3eeff7d4-aac4-44c1-b703-edafbe91cfae",
    actionIndex: 0,
    actionName: "FieldComponentProps",
    params: {
      effect: {
        props: {
          numericProps: {
            decimalPlaces: 4,
            maximumValue: "100",
            minimumValue: "0",
          },
        },
      },
      field: "addPriceRate",
    },
    store: {
      description: "结算价格依据=供方成本加成时，才允许录入加成率",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
    actionIndex: 0,
    actionName: "ReactiveFieldValidator",
    params: {
      effect: {
        fireImmediately: true,
        isStruct: true,
        name: "required",
        when: "$root.triggerObjectTypeObject.id == 'RevenueConfirmation' || $root.triggerObjectTypeObject.id == 'ApPayment'",
      },
      field: "billIoType",
    },
    store: {
      description:
        "触发对象=收入确认单或者应付单，单据方向必填, 默认蓝单；触发对象=工时，置灰清空",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
    actionIndex: 1,
    actionName: "FieldValidatorRelations",
    params: {
      relations: [
        {
          source: "triggerObjectTypeObject",
          targets: ["billIoType"],
        },
      ],
    },
    store: {
      description:
        "触发对象=收入确认单或者应付单，单据方向必填, 默认蓝单；触发对象=工时，置灰清空",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
    actionIndex: 2,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: false,
        expr: "$fn.getEnumValue('BillIoType.blue')",
        fireImmediately: "$context.mode == 'Create'",
        when: "($root.triggerObjectTypeObject.id == 'RevenueConfirmation' || $root.triggerObjectTypeObject.id == 'ApPayment') ",
      },
      field: "billIoType",
    },
    store: {
      description:
        "触发对象=收入确认单或者应付单，单据方向必填, 默认蓝单；触发对象=工时，置灰清空",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
    actionIndex: 3,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: true,
        expr: "undefined",
        fireImmediately: true,
        when: "$root.triggerObjectTypeObject.id == 'Timesheet'",
      },
      field: "billIoType",
    },
    store: {
      description:
        "触发对象=收入确认单或者应付单，单据方向必填, 默认蓝单；触发对象=工时，置灰清空",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37b",
    actionIndex: 4,
    actionName: "ReactiveCriteria",
    params: {
      field: "billIoType",
      fragments: [
        {
          criteriaStr: "id in ('BillIoType.blue','BillIoType.red')",
          fireImmediately: true,
          when: "true",
        },
      ],
    },
    store: {
      description:
        "触发对象=收入确认单或者应付单，单据方向必填, 默认蓝单；触发对象=工时，置灰清空",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37c",
    actionIndex: 0,
    actionName: "ReactiveFieldValidator",
    params: {
      effect: {
        fireImmediately: true,
        isStruct: true,
        name: "required",
        when: "$root.accountingMethod.id == 'AccountingMethod.invoice'",
      },
      field: "revenueConfirmationBillType",
    },
    store: {
      description: "立账方式=发票立账，发票立账收入确认据类型必填",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37c",
    actionIndex: 1,
    actionName: "FieldValidatorRelations",
    params: {
      relations: [
        {
          source: "accountingMethod",
          targets: ["revenueConfirmationBillType"],
        },
      ],
    },
    store: {
      description: "立账方式=发票立账，发票立账收入确认据类型必填",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37c",
    actionIndex: 2,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        autoClear: true,
        expr: "undefined",
        fireImmediately: true,
        when: "$root.accountingMethod.id != 'AccountingMethod.invoice'",
      },
      field: "revenueConfirmationBillType",
    },
    store: {
      description: "立账方式=发票立账，发票立账收入确认据类型必填",
    },
  },
  {
    ruleId: "3abfe982-90dd-44b8-847e-0c9028d4e37c",
    actionIndex: 3,
    actionName: "ReactiveCriteria",
    params: {
      field: "revenueConfirmationBillType",
      fragments: [
        {
          autoClear: false,
          bindVars: {
            billIoTypeId:
              "$root.supplierTargetBillType.billIoType.id || 'blue'",
          },
          criteriaStr:
            "objectType in ('RevenueConfirmation') and billIoTypeId =: billIoTypeId",
          fireImmediately: true,
          when: "true",
        },
      ],
    },
    store: {
      description: "立账方式=发票立账，发票立账收入确认据类型必填",
    },
  },
  {
    ruleId: "0e27736e-f452-4010-a7b4-52e6fa856462",
    actionIndex: 0,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        expr: "$root.code",
        when: "$root.code",
      },
      field: "name",
    },
    store: {
      description: "测试规则",
    },
  },
  {
    ruleId: "0e27736e-f452-4010-a7b4-52e6fa856462",
    actionIndex: 1,
    actionName: "ReactiveAssignment",
    params: {
      effect: {
        expr: "$root.name",
        when: "$root.name",
      },
      field: "description",
    },
    store: {
      description: "测试规则",
    },
  },
  {
    ruleId: "abd71711-7fea-48c2-899d-29d824e4daab",
    actionIndex: 0,
    actionName: "Assignment",
    params: {
      expr: "undefined",
      field: "triggerCriteria",
    },
    store: {
      trigger: {
        event: "Change",
        target: "$root.triggerObjectTypeObject",
      },
      description: "触发对象改变时，清空触发条件",
    },
  },
];
