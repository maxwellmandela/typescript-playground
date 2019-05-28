interface features {
  [i: string]: string;
}

/**
 * Animal interface
 * Test sample:
 * {
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
  }
 */
interface AnimalDetail {
  name: String;
  description: String;
  meal: String;
  kernel: String;
  features: Array<Object>;
}

export class Animal {
  constructor(public _animalData: AnimalDetail) {
    this._animalData = _animalData;
  }

  /**
   * Do greeting
   */
  greet() {
    return `Hello ${this._animalData.name}!`;
  }

  /**
   * Make features list
   */
  makeList() {
    let list = "";
    this._animalData.features.forEach(element => {
      list += `<li>${element["name"]}: ${element["value"]}</li>`;
    });
    document.getElementById("list").innerHTML = list;
  }
}
