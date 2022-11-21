import { AbiItem } from 'web3-utils'

export const gelato: AbiItem[] = [
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          {
            internalType: "address",
            name: "userProxy",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "module",
                type: "address",
              },
            ],
            internalType: "struct Provider",
            name: "provider",
            type: "tuple",
          },
          { internalType: "uint256", name: "index", type: "uint256" },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "inst",
                    type: "address",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct Condition[]",
                name: "conditions",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "addr",
                    type: "address",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                  {
                    internalType: "enum Operation",
                    name: "operation",
                    type: "uint8",
                  },
                  {
                    internalType: "enum DataFlow",
                    name: "dataFlow",
                    type: "uint8",
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "termsOkCheck",
                    type: "bool",
                  },
                ],
                internalType: "struct Action[]",
                name: "actions",
                type: "tuple[]",
              },
              {
                internalType: "uint256",
                name: "selfProviderGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "selfProviderGasPriceCeil",
                type: "uint256",
              },
            ],
            internalType: "struct Task[]",
            name: "tasks",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "expiryDate",
            type: "uint256",
          },
          { internalType: "uint256", name: "cycleId", type: "uint256" },
          {
            internalType: "uint256",
            name: "submissionsLeft",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct TaskReceipt[]",
        name: "taskReceipt",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogMultiCancelTasks",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "conditions",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceCeil",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct TaskSpec[]",
        name: "taskspecs",
        type: "tuple[]",
      },
      {
        indexed: true,
        internalType: "address[]",
        name: "modules",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethToDeposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogMultiProvide",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "conditions",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceCeil",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct TaskSpec[]",
        name: "taskspecs",
        type: "tuple[]",
      },
      {
        indexed: true,
        internalType: "address[]",
        name: "modules",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethToWithdraw",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogMultiUnprovide",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "address", name: "module", type: "address" },
        ],
        indexed: true,
        internalType: "struct Provider",
        name: "provider",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "inst",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct Condition[]",
            name: "conditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasPriceCeil",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct Task",
        name: "task",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "expiryDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogSubmitTask",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "address", name: "module", type: "address" },
        ],
        indexed: true,
        internalType: "struct Provider",
        name: "provider",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "inst",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct Condition[]",
            name: "conditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasPriceCeil",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct Task[]",
        name: "tasks",
        type: "tuple[]",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "expiryDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogSubmitTaskChain",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "address", name: "module", type: "address" },
        ],
        indexed: true,
        internalType: "struct Provider",
        name: "provider",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "inst",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct Condition[]",
            name: "conditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasPriceCeil",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct Task[]",
        name: "tasks",
        type: "tuple[]",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "expiryDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogSubmitTaskCycle",
    type: "event",
  },
  {
    inputs: [],
    name: "connectorID",
    outputs: [
      { internalType: "uint256", name: "_type", type: "uint256" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          {
            internalType: "address",
            name: "userProxy",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "address",
                name: "module",
                type: "address",
              },
            ],
            internalType: "struct Provider",
            name: "provider",
            type: "tuple",
          },
          { internalType: "uint256", name: "index", type: "uint256" },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "inst",
                    type: "address",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct Condition[]",
                name: "conditions",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "addr",
                    type: "address",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                  {
                    internalType: "enum Operation",
                    name: "operation",
                    type: "uint8",
                  },
                  {
                    internalType: "enum DataFlow",
                    name: "dataFlow",
                    type: "uint8",
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "termsOkCheck",
                    type: "bool",
                  },
                ],
                internalType: "struct Action[]",
                name: "actions",
                type: "tuple[]",
              },
              {
                internalType: "uint256",
                name: "selfProviderGasLimit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "selfProviderGasPriceCeil",
                type: "uint256",
              },
            ],
            internalType: "struct Task[]",
            name: "tasks",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "expiryDate",
            type: "uint256",
          },
          { internalType: "uint256", name: "cycleId", type: "uint256" },
          {
            internalType: "uint256",
            name: "submissionsLeft",
            type: "uint256",
          },
        ],
        internalType: "struct TaskReceipt[]",
        name: "_taskReceipts",
        type: "tuple[]",
      },
    ],
    name: "multiCancelTasks",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_executor", type: "address" },
      {
        components: [
          {
            internalType: "address[]",
            name: "conditions",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceCeil",
            type: "uint256",
          },
        ],
        internalType: "struct TaskSpec[]",
        name: "_taskSpecs",
        type: "tuple[]",
      },
      {
        internalType: "address[]",
        name: "_modules",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_ethToDeposit",
        type: "uint256",
      },
      { internalType: "uint256", name: "_getId", type: "uint256" },
      { internalType: "uint256", name: "_setId", type: "uint256" },
    ],
    name: "multiProvide",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_withdrawAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "conditions",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceCeil",
            type: "uint256",
          },
        ],
        internalType: "struct TaskSpec[]",
        name: "_taskSpecs",
        type: "tuple[]",
      },
      {
        internalType: "address[]",
        name: "_modules",
        type: "address[]",
      },
      { internalType: "uint256", name: "_getId", type: "uint256" },
      { internalType: "uint256", name: "_setId", type: "uint256" },
    ],
    name: "multiUnprovide",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "address", name: "module", type: "address" },
        ],
        internalType: "struct Provider",
        name: "_provider",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "inst",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct Condition[]",
            name: "conditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasPriceCeil",
            type: "uint256",
          },
        ],
        internalType: "struct Task",
        name: "_task",
        type: "tuple",
      },
      { internalType: "uint256", name: "_expiryDate", type: "uint256" },
    ],
    name: "submitTask",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "address", name: "module", type: "address" },
        ],
        internalType: "struct Provider",
        name: "_provider",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "inst",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct Condition[]",
            name: "conditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasPriceCeil",
            type: "uint256",
          },
        ],
        internalType: "struct Task[]",
        name: "_tasks",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "_expiryDate", type: "uint256" },
      {
        internalType: "uint256",
        name: "_sumOfRequestedTaskSubmits",
        type: "uint256",
      },
    ],
    name: "submitTaskChain",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "address", name: "module", type: "address" },
        ],
        internalType: "struct Provider",
        name: "_provider",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "inst",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            internalType: "struct Condition[]",
            name: "conditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "enum Operation",
                name: "operation",
                type: "uint8",
              },
              {
                internalType: "enum DataFlow",
                name: "dataFlow",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "termsOkCheck",
                type: "bool",
              },
            ],
            internalType: "struct Action[]",
            name: "actions",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "selfProviderGasPriceCeil",
            type: "uint256",
          },
        ],
        internalType: "struct Task[]",
        name: "_tasks",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "_expiryDate", type: "uint256" },
      { internalType: "uint256", name: "_cycles", type: "uint256" },
    ],
    name: "submitTaskCycle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
]
