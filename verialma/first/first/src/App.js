import "./App.css";
import "./styles.css"


const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 32,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png",
};

function App() {

  console.log("hello");

  const url = `https://twitter.com/${user.twitterUsername}`;

  return (
    <div className="App">
      <div className="user-info">

        <img src={user.avatar} alt={user.name}/>
        <h3><a href={url}>{user.name}</a></h3>

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
          <a href={url}>@{user.twitterUsername}</a>
        </p>
      </div>
    </div>
  );
}

export default App;
