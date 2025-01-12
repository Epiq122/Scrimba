let message = "welcome to my nightmare";
console.log(typeof message);

// 1) Explicit type conversion
console.log(String(42));
console.log(Boolean(message));

// 2) Implicit type conversion (coercion)
console.log("10" * "10"); // 100
