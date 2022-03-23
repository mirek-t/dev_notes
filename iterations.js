const data = [1, 2, 3];

const result = data.map((item) => item * 2);
// console.log(result);

const fn = (item, id, array) => {
  return item * id;
};

const result2 = data.map(fn);
// console.log(result2);

const result3 = data.map(Boolean);
// console.log(result3);

const result4 = ["10", "10", "10"].map(parseInt);
// console.log(result4);

const people = [
  {
    name: "Pawel",
    age: 36,
    city: "Wegierska Górka",
    hobbies: ["python", "javascript", "drugs"],
  },
  {
    name: "Szymon",
    age: 30,
    city: "Czestochowa",
    hobbies: ["kebab", "multikebab"],
  },
  {
    name: "Mirek",
    age: 31,
    city: "Krakow",
    hobbies: ["cars", "food", "js"],
  },
  {
    name: "Dominika",
    age: 23,
    city: "Cracow",
    hobbies: ["singing", "sport", "thriller books/films"],
  },
  {
    name: "Monika",
    age: 34,
    city: "Kraków",
    hobbies: ["python", "psychology", "books"],
  },
  {
    name: "Lukasz",
    age: 32,
    city: "Krakow",
    hobbies: ["computer games", "books", "js"],
  },
  {
    name: "Marcin",
    age: 33,
    city: "Krakow",
    hobbies: ["no_hobbies"],
  },
  {
    name: "Maciek",
    age: 26,
    city: "Kraków",
    hobbies: ["tenis", "python", "music"],
  },
  {
    name: "Oliver",
    age: 19,
    city: "Krakow",
    hobbies: ["music prod", "skateboard", "technology"],
  },
  {
    name: "Anita",
    age: 30,
    city: "Cracow",
    hobbies: ["graphic design", "skateboarding", "art"],
  },
  {
    name: "Remik",
    age: 27,
    city: "Krakow",
    hobbies: ["coding", "games", "kebabs"],
  },
  {
    name: "Przemek",
    age: 29,
    city: "Krakow",
    hobbies: ["python", "js", "it"],
  },
  {
    name: "Andrzej",
    age: 30,
    city: "Wrocław",
    hobbies: ["cooking", "drinking", "python"],
  },
];

const sum =
  people.map((person) => person.age).reduce((acc, age) => acc + age) /
  people.length;
// console.log(sum);

const result5 = people.flatMap((person) => person.hobbies);
const result6 = result5.reduce((acc, hobby) => acc + hobby.length, 0);
// console.log(result6 / result5.length);

const jsLike = people
  .filter((person) => person.hobbies.includes("js"))
  .map((person) => person.name);
// console.log(jsLike);

const hobbiesList = new Set(
  people.reduce((acc, person) => [...acc, ...person.hobbies], [])
);
// console.log(hobbiesList);

const underYear = people.some((person) => person.age === 19);
// console.log(underYear);

const overYear = people.every((person) => person.age < 40);
// console.log(overYear);

// console.log([1, 1, 3].filter(item => item === 1));
