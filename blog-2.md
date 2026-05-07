# Using Pick and Omit in TypeScript to Keep Code DRY
## Introduction
When working with large interfaces, repeating code can become messy. TypeScript provides utility types like Pick and Omit to create smaller versions of existing types without duplication.

## Problem: Code Duplication
```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```
Now if you need a type without password:
```ts
// Repeating structure
interface PublicUser {
  id: number;
  name: string;
  email: string;
}
```
This violates DRY (Don't Repeat Yourself).

## Using Pick

Pick selects specific fields:
```ts
type PublicUser = Pick<User, "id" | "name" | "email">;
```
Only chosen fields are included.

## Using Omit

Omit removes specific fields:
```ts
type PublicUser = Omit<User, "password">;
```
Everything except password is included.

## Benefits
- No duplication
- Easy maintenance
- Centralized structure

If User changes, all derived types update automatically.

Real Example
```ts
type UserLogin = Pick<User, "email" | "password">;
type UserProfile = Omit<User, "password">;
```
## Conclusion
`Pick` and `Omit` utility types help keep TypeScript code clean and DRY by avoiding repetition of interface structures. Instead of rewriting similar types, we derive new ones from a single master interface. `Pick` allows us to select only the required fields, while `Omit` removes unnecessary fields. This ensures that all related types stay consistent with the original interface, making the code easier to maintain and less error-prone. By using these utilities, developers follow the DRY principle effectively and improve the scalability of their applications.
