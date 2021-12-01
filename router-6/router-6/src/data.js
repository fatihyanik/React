import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";

let dogs = [
  {
    id: 1,
    name: "Whiskey",
    age: 1,
    detail: "Amet quia repellat asperiores repellat!",
    img: whiskey,
  },
  {
    id: 2,
    name: "Hazel",
    age: 2,
    detail: "Hello there! My name is Hazel",
    img: hazel,
  },
  {
    id: 3,
    name: "Tubby",
    age: 3,
    detail: "My name is tubby not Tuba",
    img: tubby,
  },
];

export function getDogs() {
  return dogs;
}

export function getDog(name) {
  return dogs.find((dog) => dog.name === name);
}