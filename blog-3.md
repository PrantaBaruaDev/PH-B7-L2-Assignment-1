# Generics in TypeScript: Building Reusable and Type-Safe Code

## Introduction
Generics in TypeScript allow developers to create flexible yet strongly typed functions and components that can work with any data type while maintaining type safety.

## Problem Without Generics
Without generics, developers often use the `any` type, which removes type safety.

**Example of Code:**
```ts
function identity(value: any): any {
  return value;
}
```
Problem:
- No type checking.
- No IntelliSense support.
- Can cause runtime errors.

## Solution: Generics
Generics allow us to define a placeholder type that is determined when the function is called.

**Example of Code:**
```ts
function identity<T>(value: T): T {
  return value;
}
```
Here:
- `T` represents a type.
- TypeScript captures the type and reuses it.

After using `Generics`, TypeScript remembers the type and does not allow incorrect types.

```ts
const num = identity<number>(10); // number
const str = identity<string>("hello"); // string
```

## Real Example: Generic Function for Object Property Access
```ts
const getProperty = <T, K extends keyof T>(userObj: T, key: K): T[K] => userObj[key];

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name")); // string
```

## Benefits
- Ensures only valid keys are used.
- Returns the exact type of the property.
- Reusable the functional logic.

## Generic Interfaces

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<string> = {
  data: "Success",
  status: 200
};
```
Benefits of Generics
- Reusable logic.
- Strong type safety.
- Works with any data structure.
- Prevents use of unsafe `any`.
- Improves scalability and maintainability.

## Conclusion
Generics allow developers to write reusable and flexible code while preserving strict type safety. By capturing and reusing types, generics ensure that functions and components behave consistently regardless of the data passed to them.

**Note:** Always use generics when building reusable utilities and components.