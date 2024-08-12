class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    console.log("Static");
  }
  animalName() {
    return this.name;
  }
  speak() {
    return this.speaks;
  }
  legs() {
    return this.legCount;
  }
}
console.log(Animal.myType());
let dog = new Animal("Bruno", 4, "Bhow Bhow");
let cat = new Animal("Mini", 4, "Meow Meow");
console.log(
  dog.animalName() +
    ": " +
    dog.speak() +
    " " +
    cat.animalName() +
    ": " +
    cat.speak()
);
