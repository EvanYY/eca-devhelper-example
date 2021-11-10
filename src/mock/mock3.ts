import { QueryResponse } from "./interfaces";
export const dsMock3 = (): QueryResponse[] => [
  {
    batchId: "bC84362e-CaD7-7F25-E647-F8eF7bC259F1",
    trigger: {
      title: "头现大可教。",
      field: "qbonh",
      time: "2021-11-09 17:19:00 602",
    },
    fields: [
      { field: "qbonh", detail: {} },
      { field: "bmsox", detail: {} },
      { field: "kbzmd", detail: {} },
      { field: "jrmll", detail: {} },
      { field: "qmode", detail: {} },
      { field: "tlxmo", detail: {} },
      { field: "racjv", detail: {} },
      { field: "rvrbq", detail: {} },
      { field: "yifgv", detail: {} },
      { field: "dttmw", detail: {} },
      { field: "fpehy", detail: {} },
      { field: "ptpdw", detail: {} },
      { field: "luxqe", detail: {} },
      { field: "ljhxq", detail: {} },
      { field: "ksjtm", detail: {} },
      { field: "drjce", detail: {} },
      { field: "smcrc", detail: {} },
      { field: "dagvx", detail: {} },
      { field: "enbmv", detail: {} },
    ],
    rules: [
      {
        dependent: "qbonh",
        target: "kbzmd",
        weight: 2,
        effect: [
          {
            ruleDefId: "f5ff12b6-d0d2-fA3E-4C59-C892b085759c",
            variables: { "$root.qbonh": 100 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "bmsox",
        target: "enbmv",
        weight: 2,
        effect: [
          {
            ruleDefId: "fdD4e96C-C3e3-bFF6-FFFe-Fcb20C9fcFe0",
            variables: { "$root.bmsox": 200 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "kbzmd",
        target: "smcrc",
        weight: 3,
        effect: [
          {
            ruleDefId: "69Aec19E-58b8-fb64-2Fe9-A7eE6CfD4eEC",
            variables: { "$root.kbzmd": 300 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "jrmll",
        target: "enbmv",
        weight: 3,
        effect: [
          {
            ruleDefId: "2F13de5E-b423-BeEA-4Ee7-B6CcEcE2487d",
            variables: { "$root.jrmll": 400 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "qmode",
        target: "dagvx",
        weight: 1,
        effect: [
          {
            ruleDefId: "B8Ad3db1-9B41-8Af8-b6ec-74efddEF5f52",
            variables: { "$root.qmode": 500 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "tlxmo",
        target: "racjv",
        weight: 2,
        effect: [
          {
            ruleDefId: "7aFe7fEC-d427-FAFD-9F1a-155582dedB9C",
            variables: { "$root.tlxmo": 600 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "racjv",
        target: "dagvx",
        weight: 1,
        effect: [
          {
            ruleDefId: "6B881b8B-4b6a-eFE1-EFd8-F2e5BaD14789",
            variables: { "$root.racjv": 700 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "rvrbq",
        target: "jrmll",
        weight: 4,
        effect: [
          {
            ruleDefId: "aaB6fE5A-47cc-1dCd-71d6-DD697F26Db9B",
            variables: { "$root.rvrbq": 800 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "yifgv",
        target: "rvrbq",
        weight: 2,
        effect: [
          {
            ruleDefId: "06Dba77a-CEC6-FB33-1bDA-9FbF4CCA9bBB",
            variables: { "$root.yifgv": 900 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "dttmw",
        target: "jrmll",
        weight: 4,
        effect: [
          {
            ruleDefId: "aFAfBaF9-8DAf-083d-8237-61A952879A75",
            variables: { "$root.dttmw": 1000 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "fpehy",
        target: "rvrbq",
        weight: 4,
        effect: [
          {
            ruleDefId: "DA2eD1F8-1efe-141D-D383-9831dfd35F11",
            variables: { "$root.fpehy": 1100 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "ptpdw",
        target: "fpehy",
        weight: 2,
        effect: [
          {
            ruleDefId: "DEE71e33-71AD-4B6d-D6f2-b2D414F32469",
            variables: { "$root.ptpdw": 1200 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "luxqe",
        target: "rvrbq",
        weight: 4,
        effect: [
          {
            ruleDefId: "AF783eAb-D99a-0Ce3-8CE5-79282358B383",
            variables: { "$root.luxqe": 1300 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "ljhxq",
        target: "ptpdw",
        weight: 5,
        effect: [
          {
            ruleDefId: "AD1a9d8A-AF77-e447-DBef-e94DfA7cc6E9",
            variables: { "$root.ljhxq": 1400 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "ksjtm",
        target: "smcrc",
        weight: 3,
        effect: [
          {
            ruleDefId: "8Dc80D5f-d191-C7eC-1362-f8483BBf79CC",
            variables: { "$root.ksjtm": 1500 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "drjce",
        target: "ljhxq",
        weight: 3,
        effect: [
          {
            ruleDefId: "7cFaFfbA-EABB-ECBF-Aa99-C38F7BDfA6ca",
            variables: { "$root.drjce": 1600 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "smcrc",
        target: "ljhxq",
        weight: 2,
        effect: [
          {
            ruleDefId: "8B5cB58A-1256-68dB-B7F1-ABFf7648D9c8",
            variables: { "$root.smcrc": 1700 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
    ],
    ruleDefs: {
      "f5ff12b6-d0d2-fA3E-4C59-C892b085759c": {
        name: "ReactiveFieldStatus",
        params: {
          field: "kbzmd",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.qbonh == 100",
            fireImmediately: true,
          },
        },
      },
      "fdD4e96C-C3e3-bFF6-FFFe-Fcb20C9fcFe0": {
        name: "ReactiveFieldStatus",
        params: {
          field: "enbmv",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.bmsox == 200",
            fireImmediately: true,
          },
        },
      },
      "69Aec19E-58b8-fb64-2Fe9-A7eE6CfD4eEC": {
        name: "ReactiveFieldStatus",
        params: {
          field: "smcrc",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.kbzmd == 300",
            fireImmediately: true,
          },
        },
      },
      "2F13de5E-b423-BeEA-4Ee7-B6CcEcE2487d": {
        name: "ReactiveFieldStatus",
        params: {
          field: "enbmv",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.jrmll == 400",
            fireImmediately: true,
          },
        },
      },
      "B8Ad3db1-9B41-8Af8-b6ec-74efddEF5f52": {
        name: "ReactiveFieldStatus",
        params: {
          field: "dagvx",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.qmode == 500",
            fireImmediately: true,
          },
        },
      },
      "7aFe7fEC-d427-FAFD-9F1a-155582dedB9C": {
        name: "ReactiveFieldStatus",
        params: {
          field: "racjv",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.tlxmo == 600",
            fireImmediately: true,
          },
        },
      },
      "6B881b8B-4b6a-eFE1-EFd8-F2e5BaD14789": {
        name: "ReactiveFieldStatus",
        params: {
          field: "dagvx",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.racjv == 700",
            fireImmediately: true,
          },
        },
      },
      "aaB6fE5A-47cc-1dCd-71d6-DD697F26Db9B": {
        name: "ReactiveFieldStatus",
        params: {
          field: "jrmll",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.rvrbq == 800",
            fireImmediately: true,
          },
        },
      },
      "06Dba77a-CEC6-FB33-1bDA-9FbF4CCA9bBB": {
        name: "ReactiveFieldStatus",
        params: {
          field: "rvrbq",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.yifgv == 900",
            fireImmediately: true,
          },
        },
      },
      "aFAfBaF9-8DAf-083d-8237-61A952879A75": {
        name: "ReactiveFieldStatus",
        params: {
          field: "jrmll",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.dttmw == 1000",
            fireImmediately: true,
          },
        },
      },
      "DA2eD1F8-1efe-141D-D383-9831dfd35F11": {
        name: "ReactiveFieldStatus",
        params: {
          field: "rvrbq",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.fpehy == 1100",
            fireImmediately: true,
          },
        },
      },
      "DEE71e33-71AD-4B6d-D6f2-b2D414F32469": {
        name: "ReactiveFieldStatus",
        params: {
          field: "fpehy",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.ptpdw == 1200",
            fireImmediately: true,
          },
        },
      },
      "AF783eAb-D99a-0Ce3-8CE5-79282358B383": {
        name: "ReactiveFieldStatus",
        params: {
          field: "rvrbq",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.luxqe == 1300",
            fireImmediately: true,
          },
        },
      },
      "AD1a9d8A-AF77-e447-DBef-e94DfA7cc6E9": {
        name: "ReactiveFieldStatus",
        params: {
          field: "ptpdw",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.ljhxq == 1400",
            fireImmediately: true,
          },
        },
      },
      "8Dc80D5f-d191-C7eC-1362-f8483BBf79CC": {
        name: "ReactiveFieldStatus",
        params: {
          field: "smcrc",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.ksjtm == 1500",
            fireImmediately: true,
          },
        },
      },
      "7cFaFfbA-EABB-ECBF-Aa99-C38F7BDfA6ca": {
        name: "ReactiveFieldStatus",
        params: {
          field: "ljhxq",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.drjce == 1600",
            fireImmediately: true,
          },
        },
      },
      "8B5cB58A-1256-68dB-B7F1-ABFf7648D9c8": {
        name: "ReactiveFieldStatus",
        params: {
          field: "ljhxq",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.smcrc == 1700",
            fireImmediately: true,
          },
        },
      },
      "ccb1E2f4-f5BD-C6A6-f7FE-DefFD9C41e0c": {
        name: "ReactiveFieldStatus",
        params: {
          field: "ljhxq",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.dagvx == 1800",
            fireImmediately: true,
          },
        },
      },
      "FE82BfaB-B5ef-57FF-Bbcf-EAbdb1DFb446": {
        name: "ReactiveFieldStatus",
        params: {
          field: "kbzmd",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.enbmv == 1900",
            fireImmediately: true,
          },
        },
      },
      "f2AC2dD3-cca4-1BCa-e7cF-10Ee47C71C9F": {
        name: "ReactiveFieldStatus",
        params: {
          field: "luxqe",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.buhvo == 2000",
            fireImmediately: true,
          },
        },
      },
      "bE60d52a-a8D3-beAC-5fa4-a7176Fc8CA4e": {
        name: "ReactiveFieldStatus",
        params: {
          field: "dttmw",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.osyhx == 2100",
            fireImmediately: true,
          },
        },
      },
    },
    state: {
      oldValue: {
        qbonh: {
          value: "2011-05-28 06:01:04",
          readonly: false,
          require: false,
        },
        bmsox: {
          value: "1985-07-21 00:37:50",
          readonly: false,
          require: false,
        },
        kbzmd: { value: false, readonly: false, require: true },
        jrmll: { value: "1987-05-23 09:14:03", readonly: true, require: true },
        qmode: { value: "范娟", readonly: true, require: false },
        tlxmo: { value: false, readonly: false, require: false },
        racjv: { value: "1970-11-13 05:17:46", readonly: false, require: true },
        rvrbq: { value: "2000-07-20 01:04:35", readonly: true, require: false },
        yifgv: { value: true, readonly: false, require: true },
        dttmw: { value: "TLv", readonly: true, require: true },
        fpehy: {
          value: "1971-11-03 15:46:25",
          readonly: false,
          require: false,
        },
        ptpdw: { value: "1988-08-01 00:49:50", readonly: true, require: false },
        luxqe: { value: "董娟", readonly: false, require: true },
        ljhxq: { value: "康勇", readonly: false, require: false },
        ksjtm: { value: "Mm9", readonly: true, require: false },
        drjce: { value: true, readonly: false, require: false },
        smcrc: { value: true, readonly: false, require: true },
        dagvx: { value: "1986-05-21 22:36:33", readonly: true, require: true },
        enbmv: { value: true, readonly: false, require: false },
        buhvo: { value: "2003-02-22 05:50:50", readonly: false, require: true },
        osyhx: { value: "曹涛", readonly: false, require: true },
      },
      newValue: {
        qbonh: { value: "2011-05-28 06:01:04", readonly: true, require: false },
        bmsox: { value: "1985-07-21 00:37:50", readonly: false, require: true },
        kbzmd: { value: false, readonly: false, require: true },
        jrmll: {
          value: "1987-05-23 09:14:03",
          readonly: false,
          require: false,
        },
        qmode: { value: "范娟", readonly: true, require: false },
        tlxmo: { value: false, readonly: false, require: true },
        racjv: { value: false, readonly: false, require: false },
        rvrbq: { value: "Z)[", readonly: false, require: false },
        yifgv: { value: true, readonly: false, require: true },
        dttmw: { value: "1973-09-07 02:02:17", readonly: true, require: true },
        fpehy: { value: "1971-11-03 15:46:25", readonly: false, require: true },
        ptpdw: {
          value: "2005-02-24 13:59:27",
          readonly: false,
          require: false,
        },
        luxqe: { value: "董娟", readonly: true, require: true },
        ljhxq: { value: "康勇", readonly: false, require: false },
        ksjtm: { value: "Mm9", readonly: true, require: false },
        drjce: { value: true, readonly: false, require: true },
        smcrc: { value: true, readonly: true, require: true },
        dagvx: { value: "1986-05-21 22:36:33", readonly: false, require: true },
        enbmv: { value: true, readonly: true, require: true },
        buhvo: { value: "2003-02-22 05:50:50", readonly: true, require: true },
        osyhx: { value: "曹涛", readonly: true, require: true },
      },
    },
  },
  {
    batchId: "6e4F8f02-D92F-abfc-14aC-9CDFCb5ef524",
    trigger: {
      title: "价养斯当型。",
      field: "grsmc",
      time: "2021-11-09 17:19:00 607",
    },
    fields: [
      { field: "grsmc", detail: {} },
      { field: "orzmc", detail: {} },
      { field: "imbsk", detail: {} },
      { field: "mooew", detail: {} },
      { field: "jafhc", detail: {} },
      { field: "fjibq", detail: {} },
      { field: "fzxue", detail: {} },
      { field: "cbmvf", detail: {} },
      { field: "nwfvg", detail: {} },
      { field: "noyym", detail: {} },
      { field: "ylfwn", detail: {} },
      { field: "lpmps", detail: {} },
      { field: "zqpec", detail: {} },
      { field: "wuqvh", detail: {} },
      { field: "urfdj", detail: {} },
      { field: "pgiss", detail: {} },
      { field: "qqxji", detail: {} },
      { field: "sdyfx", detail: {} },
      { field: "zjwou", detail: {} },
    ],
    rules: [
      {
        dependent: "grsmc",
        target: "orzmc",
        weight: 4,
        effect: [
          {
            ruleDefId: "c9DdcfdF-623A-5EA8-EA3b-cE7E2CF2FED1",
            variables: { "$root.grsmc": 2200 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "imbsk",
        target: "fjibq",
        weight: 2,
        effect: [
          {
            ruleDefId: "9E8fF46a-9561-c1B5-5fEb-b88Ae24fe9Cd",
            variables: { "$root.imbsk": 2400 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "mooew",
        target: "pgiss",
        weight: 3,
        effect: [
          {
            ruleDefId: "f5EfB117-0Ae9-09fE-96bE-dDBCEf5cec7C",
            variables: { "$root.mooew": 2500 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "jafhc",
        target: "wuqvh",
        weight: 2,
        effect: [
          {
            ruleDefId: "d8b144f5-46fd-72aE-c4DE-4BF1EdE4EdD9",
            variables: { "$root.jafhc": 2600 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "fjibq",
        target: "sdyfx",
        weight: 4,
        effect: [
          {
            ruleDefId: "d9fB4fCD-E78C-Ff57-1219-bB6dAebB8AeA",
            variables: { "$root.fjibq": 2700 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "fzxue",
        target: "imbsk",
        weight: 3,
        effect: [
          {
            ruleDefId: "45fE5D87-AA4f-c46E-dC83-cCDC2f3dD6d8",
            variables: { "$root.fzxue": 2800 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "cbmvf",
        target: "imbsk",
        weight: 3,
        effect: [
          {
            ruleDefId: "4B0de817-d6EF-6DaB-FFA3-cc58D9ADEA84",
            variables: { "$root.cbmvf": 2900 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "nwfvg",
        target: "wuqvh",
        weight: 2,
        effect: [
          {
            ruleDefId: "34aCee98-c55D-2fD6-6CaB-F54D5F0c966b",
            variables: { "$root.nwfvg": 3000 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "noyym",
        target: "orzmc",
        weight: 5,
        effect: [
          {
            ruleDefId: "27C4A7fD-15d0-A2c8-4E69-353eC561CbAe",
            variables: { "$root.noyym": 3100 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "ylfwn",
        target: "zqpec",
        weight: 1,
        effect: [
          {
            ruleDefId: "431EeF95-8E7F-c2cB-11F5-7C81fbA2B367",
            variables: { "$root.ylfwn": 3200 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "lpmps",
        target: "vxyum",
        weight: 2,
        effect: [
          {
            ruleDefId: "DCdcbF9f-19B4-Ab19-8d08-6BC86c00026a",
            variables: { "$root.lpmps": 3300 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "zqpec",
        target: "sdyfx",
        weight: 3,
        effect: [
          {
            ruleDefId: "BeAA45f4-1Afe-C646-b78D-bD4DC7E7c4bB",
            variables: { "$root.zqpec": 3400 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "wuqvh",
        target: "urfdj",
        weight: 4,
        effect: [
          {
            ruleDefId: "acAdf5A7-fB8A-1A74-D7d3-AE9b9EA62f5C",
            variables: { "$root.wuqvh": 3500 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "urfdj",
        target: "zqpec",
        weight: 4,
        effect: [
          {
            ruleDefId: "f2C5b84b-5F1b-7aEb-92aE-D5E6fCBb589c",
            variables: { "$root.urfdj": 3600 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "pgiss",
        target: "wuqvh",
        weight: 1,
        effect: [
          {
            ruleDefId: "fC8c9FC9-2BAe-BAF9-78B1-43bF37a75BD9",
            variables: { "$root.pgiss": 3700 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
      {
        dependent: "qqxji",
        target: "urfdj",
        weight: 4,
        effect: [
          {
            ruleDefId: "089a4bC5-b8Cd-69a2-0d3A-4DB4Eb3f2b25",
            variables: { "$root.qqxji": 3800 },
            result: { type: "Readonly", oldValue: false, newValue: true },
          },
        ],
      },
    ],
    ruleDefs: {
      "c9DdcfdF-623A-5EA8-EA3b-cE7E2CF2FED1": {
        name: "ReactiveFieldStatus",
        params: {
          field: "orzmc",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.grsmc == 2200",
            fireImmediately: true,
          },
        },
      },
      "d69fbd0c-639a-FE72-e0cB-A246bB9B3CEb": {
        name: "ReactiveFieldStatus",
        params: {
          field: "grsmc",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.orzmc == 2300",
            fireImmediately: true,
          },
        },
      },
      "9E8fF46a-9561-c1B5-5fEb-b88Ae24fe9Cd": {
        name: "ReactiveFieldStatus",
        params: {
          field: "fjibq",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.imbsk == 2400",
            fireImmediately: true,
          },
        },
      },
      "f5EfB117-0Ae9-09fE-96bE-dDBCEf5cec7C": {
        name: "ReactiveFieldStatus",
        params: {
          field: "pgiss",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.mooew == 2500",
            fireImmediately: true,
          },
        },
      },
      "d8b144f5-46fd-72aE-c4DE-4BF1EdE4EdD9": {
        name: "ReactiveFieldStatus",
        params: {
          field: "wuqvh",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.jafhc == 2600",
            fireImmediately: true,
          },
        },
      },
      "d9fB4fCD-E78C-Ff57-1219-bB6dAebB8AeA": {
        name: "ReactiveFieldStatus",
        params: {
          field: "sdyfx",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.fjibq == 2700",
            fireImmediately: true,
          },
        },
      },
      "45fE5D87-AA4f-c46E-dC83-cCDC2f3dD6d8": {
        name: "ReactiveFieldStatus",
        params: {
          field: "imbsk",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.fzxue == 2800",
            fireImmediately: true,
          },
        },
      },
      "4B0de817-d6EF-6DaB-FFA3-cc58D9ADEA84": {
        name: "ReactiveFieldStatus",
        params: {
          field: "imbsk",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.cbmvf == 2900",
            fireImmediately: true,
          },
        },
      },
      "34aCee98-c55D-2fD6-6CaB-F54D5F0c966b": {
        name: "ReactiveFieldStatus",
        params: {
          field: "wuqvh",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.nwfvg == 3000",
            fireImmediately: true,
          },
        },
      },
      "27C4A7fD-15d0-A2c8-4E69-353eC561CbAe": {
        name: "ReactiveFieldStatus",
        params: {
          field: "orzmc",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.noyym == 3100",
            fireImmediately: true,
          },
        },
      },
      "431EeF95-8E7F-c2cB-11F5-7C81fbA2B367": {
        name: "ReactiveFieldStatus",
        params: {
          field: "zqpec",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.ylfwn == 3200",
            fireImmediately: true,
          },
        },
      },
      "DCdcbF9f-19B4-Ab19-8d08-6BC86c00026a": {
        name: "ReactiveFieldStatus",
        params: {
          field: "vxyum",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.lpmps == 3300",
            fireImmediately: true,
          },
        },
      },
      "BeAA45f4-1Afe-C646-b78D-bD4DC7E7c4bB": {
        name: "ReactiveFieldStatus",
        params: {
          field: "sdyfx",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.zqpec == 3400",
            fireImmediately: true,
          },
        },
      },
      "acAdf5A7-fB8A-1A74-D7d3-AE9b9EA62f5C": {
        name: "ReactiveFieldStatus",
        params: {
          field: "urfdj",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.wuqvh == 3500",
            fireImmediately: true,
          },
        },
      },
      "f2C5b84b-5F1b-7aEb-92aE-D5E6fCBb589c": {
        name: "ReactiveFieldStatus",
        params: {
          field: "zqpec",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.urfdj == 3600",
            fireImmediately: true,
          },
        },
      },
      "fC8c9FC9-2BAe-BAF9-78B1-43bF37a75BD9": {
        name: "ReactiveFieldStatus",
        params: {
          field: "wuqvh",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.pgiss == 3700",
            fireImmediately: true,
          },
        },
      },
      "089a4bC5-b8Cd-69a2-0d3A-4DB4Eb3f2b25": {
        name: "ReactiveFieldStatus",
        params: {
          field: "urfdj",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.qqxji == 3800",
            fireImmediately: true,
          },
        },
      },
      "DfB0Aa82-40e9-d7F4-3356-DF28Da4BAB3b": {
        name: "ReactiveFieldStatus",
        params: {
          field: "fzxue",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.sdyfx == 3900",
            fireImmediately: true,
          },
        },
      },
      "A26CBA55-e99E-EC8A-FcD6-CCA45eDDD99D": {
        name: "ReactiveFieldStatus",
        params: {
          field: "pgiss",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.zjwou == 4000",
            fireImmediately: true,
          },
        },
      },
      "77f6Bbed-fc9C-E70f-a2e8-AbbBEAC5C5D8": {
        name: "ReactiveFieldStatus",
        params: {
          field: "nwfvg",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.vxyum == 4100",
            fireImmediately: true,
          },
        },
      },
      "34dE36bf-18fa-aAAA-60bD-Be0719B14033": {
        name: "ReactiveFieldStatus",
        params: {
          field: "vxyum",
          effect: {
            expr: "true",
            status: "Readonly",
            when: "$root.jkjsi == 4200",
            fireImmediately: true,
          },
        },
      },
    },
    state: {
      oldValue: {
        grsmc: { value: true, readonly: false, require: true },
        orzmc: { value: "2018-12-23 16:26:15", readonly: true, require: true },
        imbsk: { value: true, readonly: false, require: true },
        mooew: { value: "王明", readonly: false, require: true },
        jafhc: {
          value: "2018-08-15 08:33:03",
          readonly: false,
          require: false,
        },
        fjibq: { value: "sZy", readonly: true, require: false },
        fzxue: { value: "何静", readonly: true, require: false },
        cbmvf: { value: "马芳", readonly: true, require: true },
        nwfvg: { value: "2013-08-03 16:22:01", readonly: true, require: false },
        noyym: { value: false, readonly: true, require: true },
        ylfwn: {
          value: "2019-09-11 13:22:30",
          readonly: false,
          require: false,
        },
        lpmps: { value: false, readonly: false, require: false },
        zqpec: { value: "1985-11-09 05:49:47", readonly: false, require: true },
        wuqvh: { value: true, readonly: false, require: false },
        urfdj: { value: "2009-03-21 00:37:01", readonly: true, require: true },
        pgiss: { value: false, readonly: true, require: true },
        qqxji: { value: false, readonly: true, require: true },
        sdyfx: { value: false, readonly: true, require: true },
        zjwou: { value: "石超", readonly: false, require: true },
        vxyum: { value: "1984-05-15 11:51:19", readonly: true, require: false },
        jkjsi: { value: false, readonly: false, require: false },
      },
      newValue: {
        grsmc: { value: false, readonly: false, require: false },
        orzmc: { value: "2018-12-23 16:26:15", readonly: true, require: true },
        imbsk: { value: true, readonly: false, require: false },
        mooew: { value: "王明", readonly: true, require: false },
        jafhc: { value: true, readonly: true, require: false },
        fjibq: { value: "1988-06-28 19:55:22", readonly: false, require: true },
        fzxue: { value: "何静", readonly: false, require: false },
        cbmvf: { value: "马芳", readonly: false, require: false },
        nwfvg: { value: "2013-08-03 16:22:01", readonly: true, require: true },
        noyym: { value: false, readonly: false, require: true },
        ylfwn: { value: "2014-03-14 06:26:40", readonly: true, require: false },
        lpmps: { value: false, readonly: true, require: true },
        zqpec: {
          value: "1985-11-09 05:49:47",
          readonly: false,
          require: false,
        },
        wuqvh: { value: true, readonly: false, require: true },
        urfdj: { value: "2009-03-21 00:37:01", readonly: true, require: true },
        pgiss: { value: false, readonly: false, require: false },
        qqxji: { value: false, readonly: true, require: true },
        sdyfx: { value: false, readonly: true, require: false },
        zjwou: { value: "石超", readonly: false, require: false },
        vxyum: {
          value: "1984-05-15 11:51:19",
          readonly: false,
          require: false,
        },
        jkjsi: { value: true, readonly: false, require: true },
      },
    },
  },
];
