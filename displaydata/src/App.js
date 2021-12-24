import "./App.css";
const user = {
  name: "Fatih",
  location: "Leipzig",
  foodType: "Vegan",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "fatih_twitter",
  avatar:
    "https://i1.trekearth.com/photos/22441/a08011_0440.jpg",
};


export default function App() {
  
  const url = `https://twitter.com/${user.twitterUsername}`;

  return (
    <div className="App">

    <div className="user-deets">
      <img src={user.avatar} alt={user.name} />
      <h3><a href={url}>{user.name}</a></h3>
      <p><strong>Location</strong>{user.location}</p>
      <p><strong>Eats</strong>{user.foodType}</p>
      <p><strong>Age</strong>{user.age}</p>
      <p><strong>Likes</strong>{user.likes}</p>
      <p><strong>Twitter</strong><a href={url}>@{user.twitterUsername}</a></p>
    </div>

    </div>
  );
}
