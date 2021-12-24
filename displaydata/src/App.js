import "./App.css";

const user = {
  name: "Fatih",
  location: "Leipzig",
  foodType: "Vegan",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "fatih_twitter",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png",
};

function App() {
  return (
    <div className="App">
      <div className="user-deets">
        <h3>{user.name}</h3>

        <p>
          <strong>Location</strong>
          {user.location}
        </p>
        <p>
          <strong>Eats</strong>
          {user.foodType}
        </p>
        <p>
          <strong>Age</strong>
          {user.age}
        </p>
        <p>
          <strong>Likes</strong>
          {user.likes}
        </p>
        <p>
          <strong>Twitter</strong>
          <a href={`https://twitter.com/${user.twitterUsername}`}>@{user.twitterUsername}</a>
        </p>
      </div>
    </div>
  );
}

export default App;
