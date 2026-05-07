# Type Safety in TypeScript: Why `any` is Dangerous and `unknown` is Safer

## Introduction
The TypeScript is design for provide type safety, but some features can weaken our coding experience. One Such features is the `any` type we called a type safety hole. In contrast, `unknown` safer alternative when dealing with unpredictable data.

## Why `any` is type safety hole?

Because the `any` type completely disables the TypeScript's type checking features.

**Example:**
```js
let value: any = "Hello";
value = 42;
value.toUpperCase(); // No error but will crash at runtime
```

The Problems on `any` type:
- TypeScript allows any operation.
- It's don't show the error on compile time.
- For that reason there are high risk of runtime bugs.
- 
Because it bypasses all type checks and it creates a “hole” in the type safety system. That's why it's called a "type safety hole" and breaks the safety system.

## Why `unknown` is safer?
The `unknown` type is a safer alternative because it requires type checking before usage.

**Example of code:**
```ts
let value: unknown = "Hello";
value.toUpperCase(); // Error

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}
```

The benefits of the `unknown` type:
-  Prevent unsafe operation during runtime.
-  It forces you to validation before usage.
-  Maintains type safety for no further issue.

## Type Narrowing Explained
Type narrowing is the process of refining a variable's type using runtime checks. 

The common narrowing techniques:
- `typeof` is common narrowing techniques. it's used for primitive types like (string, number, etc.).
- `instanceof` is used when working with Classes and Objects create using constructor. It's useful in OOP-based code, and helps distinguish between different object types.
- Custom type guards by using conditional logic. it's user-defined checks logical guards.

## Conclusion

The `any` type removes type safety, making it very risky to use because it allows any operation without compile-time checks. In contrast, `unknown` enforces type checking before usage, making it a much safer option for handling uncertain data. Type narrowing further ensures the correct and safe use of dynamic values by refining their types through runtime checks. Therefore, it is always better to use `unknown` instead of `any` when working with unpredictable inputs.
