import { Animal } from "../src";

/**
 * if it works ;)
 */
describe("Is 22 equal to 21", () => {
  it("equals", function() {
    expect(22).toEqual(22);
  });
});

/**
 * test can create animal
 */
describe("it should create a geeting", () => {
  let animal = {
    name: "Donkey",
    description: "Some long description",
    meal: "Some meal",
    kernel: "Some kernel",
    features: [
      { name: "eyes", value: "brown" },
      { name: "ears", value: "grey,ugly" },
      { name: "tail.", value: "1 meters" },
      { name: "mouth", value: "grey" }
    ]
  };

  let created = new Animal(animal);

  it("shows correct greeting", () => {
    expect(created.greet()).toEqual(`Hello ${animal.name}!`);
  });
});
