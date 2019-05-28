interface features {
  [i: string]: string;
}

interface AnimalDetail {
  name: String;
  description: String;
  meal: String;
  kernel: String;
  features: Array<Object>; // features[]; this is madness!
}

class Animal {
  constructor(public _animalData: AnimalDetail) {
    this._animalData = _animalData;
  }

  /**
   * Do greeting
   */
  greet() {
    document.getElementById("app").innerHTML = `
    <h1>${this._animalData.name}</h1>
    <div>
      <p>${this._animalData.description}</p>
      <ul id="list"></ul>
    </div>
    `;

    this.makeList();
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

let newAnimal = new Animal({
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
});

/**
 * Play with
 */
newAnimal.greet();
