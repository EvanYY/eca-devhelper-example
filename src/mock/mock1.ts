import { QueryResponse } from "./interfaces";
export const dsMock1 = (): QueryResponse[] => {
  return [
    {
      batchId: "abc123",
      trigger: {
        title: "噜啦啦啦",
        field: "11111",
        time: "2017-01-01",
      },
      fields: [
        {
          field: "Liquid",
          detail: {
            store: { aaa: "aaaa", bbb: "bbb" },
          },
        },
        {
          field: "Gas",
          detail: {
            store: { ccc: "ccc", ddd: "ddd" },
          },
        },
        {
          field: "Oil imports",
          detail: {
            store: { eee: "eee", vvv: "vvv" },
          },
        },
      ],
      rules: [
        {
          dependent: "Liquid",
          target: "Gas",
          weight: 1,
          effect: [
            {
              ruleDefId: "el5ka2kpw1ww",
              variables: {
                k: "$current.project.id: PROJECT001",
              },
              result: {
                type: "value",
                oldValue: null,
                newValue: null,
              },
            },
            {
              ruleDefId: "0bv4s9i4e5mr",
              variables: {
                k: "$current.project.id: PROJECT002",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
            {
              ruleDefId: "0bv4s9i4e5mr1",
              variables: {
                k: "$current.project.id: PROJECT003",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
          ],
        },
        {
          dependent: "Liquid",
          target: "Oil imports",
          weight: 1,

          effect: [
            {
              ruleDefId: "0bv4s9i4e5mr",
              variables: {
                k: "$current.project.id: PROJECT002",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
            {
              ruleDefId: "0bv4s9i4e5mr1",
              variables: {
                k: "$current.project.id: PROJECT003",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
          ],
        },
        {
          dependent: "Gas",
          target: "Oil imports",
          weight: 1,

          effect: [
            {
              ruleDefId: "0bv4s9i4e5mr1",
              variables: {
                k: "$current.project.id: PROJECT002",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
            {
              ruleDefId: "0bv4s9i4e5mr",
              variables: {
                k: "$current.project.id: PROJECT002",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
          ],
        },
      ],
      ruleDefs: {
        el5ka2kpw1ww: {
          name: "ReactiveFieldStatus",
          params: {
            field: "name",
            effect: {
              expr: "true",
              status: "Readonly",
              when: "$root.code == 2",
              fireImmediately: true,
            },
          },
        },
        "0bv4s9i4e5mr": {
          name: "ReactiveTablesToMaster",
          params: {
            field: "contract",
          },
        },
        "0bv4s9i4e5mr1": {
          name: "ReactiveTablesToMaster",
          params: {
            field: "contract",
          },
        },
      },
      state: {
        oldValue: { sss: 222, qq: 111 },
        newValue: { sss: 222 },
      },
    },
    {
      batchId: "abc123222",
      trigger: {
        title: "11111",
        field: "11111",
        time: "2018-01-03",
      },
      fields: [
        {
          field: "Liquid",
          detail: {
            store: { aaa: "aaaa", bbb: "bbb" },
          },
        },
        {
          field: "Solid",
          detail: {
            store: { ccc: "ccc", ddd: "ddd" },
          },
        },
        {
          field: "Wave",
          detail: {
            store: { eee: "eee", vvv: "vvv" },
          },
        },
      ],
      rules: [
        {
          dependent: "Liquid",
          target: "Solid",
          weight: 1,

          effect: [
            {
              ruleDefId: "aaaaaaa",
              variables: {
                k: "$current.project.id: PROJECT001",
              },
              result: {
                type: "value",
                oldValue: null,
                newValue: null,
              },
            },
          ],
        },
        {
          dependent: "Liquid",
          target: "Wave",
          weight: 1,

          effect: [
            {
              ruleDefId: "3333",
              variables: {
                k: "$current.project.id: PROJECT002",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
          ],
        },
        {
          dependent: "Wave",
          target: "Solid",
          weight: 1,

          effect: [
            {
              ruleDefId: "3333222",
              variables: {
                k: "$current.project.id: PROJECT002",
              },
              result: {
                type: "props",
                oldValue: null,
                newValue: null,
              },
            },
          ],
        },
      ],
      ruleDefs: {
        aaaaaaa: {
          name: "aaaaaaa",
          params: {
            field: "name",
            effect: {
              expr: "true",
              status: "Readonly",
              when: "$root.code == 2",
              fireImmediately: true,
            },
          },
        },
        3333: {
          name: "33333",
          params: {
            field: "name",
            effect: {
              expr: "true",
              status: "Readonly",
              when: "$root.code == 2",
              fireImmediately: true,
            },
          },
        },
        3333222: {
          name: "3333222",
          params: {
            field: "name",
            effect: {
              expr: "true",
              status: "Readonly",
              when: "$root.code == 2",
              fireImmediately: true,
            },
          },
        },
      },
      state: {
        oldValue: { a: 1, b: 2, c: 3 },
        newValue: { a: 2, b: 2, c: 3, d: 4 },
      },
    },
  ];
};
