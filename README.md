# Angular TypeScript 5.1 Issues

```console
yarn start
```

## Context

TypeScript 5.1 change the way they transpile `enum` to JavaScript

[TS 5.0](https://www.typescriptlang.org/play?module=1&ts=5.0.4#code/KYDwDg9gTgLgBMAdgVwLZwNIEtEBM4DeAUHKXAGoCGANssHALxwBEAbjXc0QL5EDGERAGcI1YADpqEAOYAKbHgCUQA)

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_TS_5_0 = void 0;
var Enum_TS_5_0;
(function (Enum_TS_5_0) {
  Enum_TS_5_0["Value"] = "Value";
})((Enum_TS_5_0 = exports.Enum_TS_5_0 || (exports.Enum_TS_5_0 = {})));
```

[TS 5.1](https://www.typescriptlang.org/play?module=1&ts=5.1.6#code/KYDwDg9gTgLgBMAdgVwLZwNIEtEBM4DeAUHKXAGoCGANssHALxwBEAbjXc0QL5FA)

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_TS_5_1 = void 0;
var Enum_TS_5_1;
(function (Enum_TS_5_1) {
  Enum_TS_5_1["Value"] = "Value";
})(Enum_TS_5_1 || (exports.Enum_TS_5_1 = Enum_TS_5_1 = {}));
```

## Problem

Enable `"buildOptimizer": true` in you `angular.json` file will break the way enum is loaded in your angular application.

```ts
import { Enum_TS_5_0 } from "./Enum_TS_5_0";
import { Enum_TS_5_1 } from "./Enum_TS_5_1";

console.log("Enum_TS_5_0", Enum_TS_5_0);
console.log("Enum_TS_5_1", Enum_TS_5_1);
```

```console
Enum_TS_5_1 undefined
Enum_TS_5_0 { "Value": "Value" }
```
