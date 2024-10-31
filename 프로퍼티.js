const person = {};

Object.defineProperty(person, "firstName", {
  value: "jaewoo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Kim",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);

person.lastName = "lol";
delete person.lastName;

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
//접근자 프로퍼티
Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },

  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);
person.fullName = "Jaewoo Kim";
console.log(person);
