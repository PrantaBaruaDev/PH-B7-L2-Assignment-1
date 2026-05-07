# How OOP Pillars Help Manage Complexity in TypeScript Projects
## Introduction
In large-scale TypeScript applications, managing complex logic can become difficult. The four pillars of Object-Oriented Programming OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation help organize code, improve maintainability, and reduce complexity.

## 1. Inheritance – Reuse and Reduce Duplication
Inheritance allows one class to reuse properties and methods from another class.

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  look() {
    console.log("Looking...");
  }
}
```

### How it helps:
- Eliminates duplicate code
- Promotes code reuse
- Makes structure more organized

**Note:** In large projects it's shared logic is written once and reused everywhere.

## 2. Polymorphism – Flexible and Scalable Behavior
Polymorphism allows the same method to behave differently depending on the object.

```ts
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}
```

### How it helps:
- Makes code flexible
- Allows easy feature extension
- Reduces conditional complexity

**Note:** We can add new behaviors without changing existing code.

## 3. Abstraction – Hide Complexity
Abstraction hides implementation details and shows only essential features.

```ts
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  area() {
    return Math.PI * 2 * 2;
  }
}
```

### How it helps:
- Focus on **what** the system does, not **how**.
- Reduces mental complexity.
- Improves readability.

**Note:** Developers interact with simple interfaces instead of complex logic.


## 4. Encapsulation – Protect and Control Data
Encapsulation restricts direct access to data and controls it using methods.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

### How it helps:
- Prevents unintended data modification
- Improves security
- Keeps logic controlled and predictable

**Note:** Only authorized parts of code can change important data.


## Conclusion
Inheritance, Polymorphism, Abstraction, and Encapsulation work together to structure complex systems into clean, maintainable, and scalable code. In TypeScript projects, they are essential tools for reducing complexity and managing large codebases effectively.
