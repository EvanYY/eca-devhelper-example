import { QueryResponse } from "./interfaces";

export const dsMock2 = (): QueryResponse[] => [
  {
    batchId: "f4aB4BAF-f63d-D11f-F533-1D96Ce6C02ec",
    trigger: {
      title: "果向所标则。",
      field: "gykpp",
      time: "2021-11-09 17:18:15 623",
    },
    fields: [
      { field: "gykpp", detail: {} },
      { field: "rcnfj", detail: {} },
      { field: "uhilt", detail: {} },
      { field: "hhrbf", detail: {} },
      { field: "cwtfw", detail: {} },
      { field: "xhxms", detail: {} },
      { field: "yluhu", detail: {} },
      { field: "xhhcv", detail: {} },
      { field: "mvdet", detail: {} },
      { field: "xljwg", detail: {} },
      { field: "gdssb", detail: {} },
      { field: "grcbk", detail: {} },
      { field: "keihj", detail: {} },
      { field: "ifmjw", detail: {} },
      { field: "knjzc", detail: {} },
      { field: "rjkwe", detail: {} },
      { field: "xostw", detail: {} },
      { field: "uygcu", detail: {} },
      // { field: 'yothg', detail: {} },
      // { field: 'obpoh', detail: {} },
    ],
    rules: [
      {
        dependent: "gykpp",
        target: "ifmjw",
        weight: 4,
        effect: [
          {
            ruleDefId: "fd8bC5Fc-50E9-bE5f-B8e4-d6Ffd8F2c57e",
            variables: { "$root.gykpp": 100 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "rcnfj",
        target: "gdssb",
        weight: 5,
        effect: [
          {
            ruleDefId: "C2Afd61D-eC3B-1e0d-95dd-2CD946Fe73BC",
            variables: { "$root.rcnfj": 200 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "uhilt",
        target: "gdssb",
        weight: 3,
        effect: [
          {
            ruleDefId: "829E07dF-55EA-80D2-bB5A-E2CCEEeeFdDD",
            variables: { "$root.uhilt": 300 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "hhrbf",
        target: "keihj",
        weight: 4,
        effect: [
          {
            ruleDefId: "19aD9fA1-1E7a-A3AC-3443-8Bab27165103",
            variables: { "$root.hhrbf": 400 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "cwtfw",
        target: "ifmjw",
        weight: 1,
        effect: [
          {
            ruleDefId: "B3fCcb20-1beC-FE2D-9AAD-CD1AD6dD8A9c",
            variables: { "$root.cwtfw": 500 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "xhxms",
        target: "xljwg",
        weight: 2,
        effect: [
          {
            ruleDefId: "ceCFBbd6-9427-8cC3-ce2e-4B5Ee0c42f1d",
            variables: { "$root.xhxms": 600 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "yluhu",
        target: "xhhcv",
        weight: 2,
        effect: [
          {
            ruleDefId: "bEC6bb7e-C2Af-A9Dc-E1fc-2eFABdc78385",
            variables: { "$root.yluhu": 700 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "xhhcv",
        target: "rjkwe",
        weight: 2,
        effect: [
          {
            ruleDefId: "0eB9eef6-43ca-3C44-A2Df-dADeAE9AbFfc",
            variables: { "$root.xhhcv": 800 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "mvdet",
        target: "knjzc",
        weight: 4,
        effect: [
          {
            ruleDefId: "e1E48d2B-ec95-c567-0d08-4B6777A80DAd",
            variables: { "$root.mvdet": 900 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "xljwg",
        target: "mvdet",
        weight: 1,
        effect: [
          {
            ruleDefId: "34Be4C01-CF23-1fe5-43f9-dcfBaEe4bBcf",
            variables: { "$root.xljwg": 1000 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "grcbk",
        target: "xostw",
        weight: 1,
        effect: [
          {
            ruleDefId: "eE79CF6F-789a-c92E-BCC2-dECCE2daEaec",
            variables: { "$root.grcbk": 1200 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "keihj",
        target: "uygcu",
        weight: 1,
        effect: [
          {
            ruleDefId: "CB23DFbd-e38B-32B1-654b-bF0AB621AC83",
            variables: { "$root.keihj": 1300 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
    ],
    ruleDefs: {
      "fd8bC5Fc-50E9-bE5f-B8e4-d6Ffd8F2c57e": {
        name: "ReactiveFieldStatus",
        params: {
          field: "ifmjw",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.gykpp == 100",
            fireImmediately: true,
          },
        },
      },
      "C2Afd61D-eC3B-1e0d-95dd-2CD946Fe73BC": {
        name: "ReactiveFieldStatus",
        params: {
          field: "gdssb",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.rcnfj == 200",
            fireImmediately: true,
          },
        },
      },
      "829E07dF-55EA-80D2-bB5A-E2CCEEeeFdDD": {
        name: "ReactiveFieldStatus",
        params: {
          field: "gdssb",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.uhilt == 300",
            fireImmediately: true,
          },
        },
      },
      "19aD9fA1-1E7a-A3AC-3443-8Bab27165103": {
        name: "ReactiveFieldStatus",
        params: {
          field: "keihj",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.hhrbf == 400",
            fireImmediately: true,
          },
        },
      },
      "B3fCcb20-1beC-FE2D-9AAD-CD1AD6dD8A9c": {
        name: "ReactiveFieldStatus",
        params: {
          field: "ifmjw",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.cwtfw == 500",
            fireImmediately: true,
          },
        },
      },
      "ceCFBbd6-9427-8cC3-ce2e-4B5Ee0c42f1d": {
        name: "ReactiveFieldStatus",
        params: {
          field: "xljwg",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.xhxms == 600",
            fireImmediately: true,
          },
        },
      },
      "bEC6bb7e-C2Af-A9Dc-E1fc-2eFABdc78385": {
        name: "ReactiveFieldStatus",
        params: {
          field: "xhhcv",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.yluhu == 700",
            fireImmediately: true,
          },
        },
      },
      "0eB9eef6-43ca-3C44-A2Df-dADeAE9AbFfc": {
        name: "ReactiveFieldStatus",
        params: {
          field: "rjkwe",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.xhhcv == 800",
            fireImmediately: true,
          },
        },
      },
      "e1E48d2B-ec95-c567-0d08-4B6777A80DAd": {
        name: "ReactiveFieldStatus",
        params: {
          field: "knjzc",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.mvdet == 900",
            fireImmediately: true,
          },
        },
      },
      "34Be4C01-CF23-1fe5-43f9-dcfBaEe4bBcf": {
        name: "ReactiveFieldStatus",
        params: {
          field: "mvdet",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.xljwg == 1000",
            fireImmediately: true,
          },
        },
      },
      "19Fd99d4-6eFA-D42e-f4dc-2c8fc4A6b6D2": {
        name: "ReactiveFieldStatus",
        params: {
          field: "rcnfj",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.gdssb == 1100",
            fireImmediately: true,
          },
        },
      },
      "eE79CF6F-789a-c92E-BCC2-dECCE2daEaec": {
        name: "ReactiveFieldStatus",
        params: {
          field: "xostw",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.grcbk == 1200",
            fireImmediately: true,
          },
        },
      },
      "CB23DFbd-e38B-32B1-654b-bF0AB621AC83": {
        name: "ReactiveFieldStatus",
        params: {
          field: "uygcu",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.keihj == 1300",
            fireImmediately: true,
          },
        },
      },
      "c591AfBc-6ed5-48AA-ebf3-75d64e9edFef": {
        name: "ReactiveFieldStatus",
        params: {
          field: "rcnfj",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.ifmjw == 1400",
            fireImmediately: true,
          },
        },
      },
      "12fBD8eB-AdAf-c5C2-43f3-876c8FBC8Fff": {
        name: "ReactiveFieldStatus",
        params: {
          field: "yothg",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.knjzc == 1500",
            fireImmediately: true,
          },
        },
      },
      "E3e1ba6D-54EB-bcfb-cAEe-1BA8AeDcdf55": {
        name: "ReactiveFieldStatus",
        params: {
          field: "hhrbf",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.rjkwe == 1600",
            fireImmediately: true,
          },
        },
      },
      "Bbc87a7D-55F1-34CC-57E1-edff7A8dd1Bf": {
        name: "ReactiveFieldStatus",
        params: {
          field: "xhxms",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.xostw == 1700",
            fireImmediately: true,
          },
        },
      },
      "77Bb89f5-365C-Bfd1-AE1b-E2dF14FAFADe": {
        name: "ReactiveFieldStatus",
        params: {
          field: "xljwg",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.uygcu == 1800",
            fireImmediately: true,
          },
        },
      },
      "bADEDECb-c18e-f3fD-E975-173197a1e5FE": {
        name: "ReactiveFieldStatus",
        params: {
          field: "hhrbf",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.yothg == 1900",
            fireImmediately: true,
          },
        },
      },
      "Eec2F7Cc-5ECa-CdDB-3A96-f5b1E3b29BDd": {
        name: "ReactiveFieldStatus",
        params: {
          field: "rcnfj",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.obpoh == 2000",
            fireImmediately: true,
          },
        },
      },
    },
    state: {
      oldValue: {
        gykpp: { value: "Bq4", readonly: true, require: false },
        rcnfj: { value: "宋超", readonly: true, require: true },
        uhilt: { value: "2004-10-03 01:28:24", readonly: false, require: true },
        hhrbf: { value: "1999-08-17 08:10:50", readonly: true, require: false },
        cwtfw: { value: "郑伟", readonly: true, require: false },
        xhxms: { value: true, readonly: true, require: true },
        yluhu: { value: "2006-11-13 16:16:16", readonly: true, require: true },
        xhhcv: { value: true, readonly: false, require: true },
        mvdet: { value: "彭秀英", readonly: false, require: true },
        xljwg: {
          value: "1971-03-07 23:13:09",
          readonly: false,
          require: false,
        },
        gdssb: { value: "1984-04-02 05:09:02", readonly: false, require: true },
        grcbk: { value: false, readonly: false, require: true },
        keihj: { value: true, readonly: false, require: true },
        ifmjw: {
          value: "2012-09-06 00:40:51",
          readonly: false,
          require: false,
        },
        knjzc: { value: "(0(", readonly: true, require: true },
        rjkwe: { value: "1993-03-26 19:08:05", readonly: false, require: true },
        xostw: {
          value: "1997-12-27 03:42:20",
          readonly: false,
          require: false,
        },
        uygcu: { value: "wl[", readonly: true, require: true },
        yothg: { value: "康磊", readonly: true, require: false },
        obpoh: { value: "蒋磊", readonly: true, require: false },
      },
      newValue: {
        gykpp: { value: "Bq4", readonly: true, require: true },
        rcnfj: { value: "宋超", readonly: true, require: true },
        uhilt: { value: "2004-10-03 01:28:24", readonly: true, require: false },
        hhrbf: { value: false, readonly: false, require: false },
        cwtfw: { value: "郑伟", readonly: true, require: true },
        xhxms: {
          value: "1971-03-09 14:45:35",
          readonly: false,
          require: false,
        },
        yluhu: { value: "2006-11-13 16:16:16", readonly: true, require: false },
        xhhcv: {
          value: "2002-06-11 05:25:11",
          readonly: false,
          require: false,
        },
        mvdet: { value: "彭秀英", readonly: false, require: true },
        xljwg: { value: "1971-03-07 23:13:09", readonly: true, require: false },
        gdssb: { value: "1984-04-02 05:09:02", readonly: false, require: true },
        grcbk: { value: false, readonly: true, require: true },
        keihj: { value: true, readonly: false, require: false },
        ifmjw: { value: false, readonly: false, require: false },
        knjzc: { value: true, readonly: true, require: false },
        rjkwe: { value: "陈勇", readonly: true, require: true },
        xostw: { value: "1997-12-27 03:42:20", readonly: false, require: true },
        uygcu: { value: "wl[", readonly: false, require: false },
        yothg: { value: "康磊", readonly: true, require: false },
        obpoh: { value: "蒋磊", readonly: true, require: true },
      },
    },
  },
];
