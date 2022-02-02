export default function DoSomething() {}

export const DoSomething = () => {};

const MyComponent = () => {
  return <div></div>;
};

<button onClick={() => {console.log("hello world");}} >click</button>;

let age = 10;
let name = "Fatih";

if (age > 10) {
  name = "Fatih";
} else {
  name = "Murat";
}

//ternary operator
let name = age > 10 ? "Fatih" : "Murat";

const Component = () => {
  return age > 10 ? <div>Fatih</div> : <div>Murat</div>;
};


const person = {
    name: "Fatih",
    age: 28,
    isMarried: false
};

const  {name, age, isMarried} = person;

const name = person.name;
const age = person.age;
const isMarried = person.isMarried;

const name = "Fatih";
const age = 20;

const person = {
    name,
    age,
    isMarried: false,
};

const person2 = {...person, name:"Ahmet"};

const names = ["Ahmet", "Mehmet", "Mustafa"];
const names2 = [...names, "Mahmut"];

names.map((name) => {
        console.log(name);
})

names.map((name) => {
    return (name + "1");
})


names.map((name) => {
    return <h1>{name}</h1>
})

const names3 = ["Ahmet", "Mehmet", "Mustafa", "Mehmet", "Mustafa" ];
names.filter((name)=> {
    return name !== "Mehmet"
})

