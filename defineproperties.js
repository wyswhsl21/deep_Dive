// 여러개의 프로퍼티 한번에 정의할 수 있음

const person = {};

Object.defineProperties(person, {
  firstName: {
    value: "jaewwo",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "kimm",
    writable: true,
    enumerable: true,
    configurable: true,
  },

  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});
person.fullName = "jaewoo Kim";
console.log(person);

//객체 변경 방지
Object.preventExtensions; // 객체 확장 금지 -> 프로퍼티 추가가 금지된다.
Object.seal; // 객체 밀봉 -> 객체를 읽기와 쓰기만 가능.
Object.freeze; // 객체 동결 -> 객체가 읽기만 가능하게 함.
