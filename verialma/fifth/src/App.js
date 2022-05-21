import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
      );
      const data = await response.json();
      setDataInfo(data);
    };
    fetchData();
  }, []);
  console.log(dataInfo);

  return (
    <div className="App">
      {dataInfo.map((post) => (
        <p>
       {post.authors[0]}
       {post.publisher}
       {post.isbn}
        </p>
      ))}
    </div>
  );
}
export default App;
