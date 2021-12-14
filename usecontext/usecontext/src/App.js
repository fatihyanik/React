import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content";

const themes = {
  dark: {
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

//1. Context Olustur
export const ThemeContext = React.createContext(themes.light);

//2. Provider Olustur Line 25

//3 Bunu consume etmek icin export yapiyoruz line 17'de ve Content.js'e gidiyoruz
function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <div className="App container">
      <button onClick={toggleTheme}>
        {theme === themes.dark ? "Dark" : "Light"}
      </button>
      <ThemeContext.Provider value={theme}>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
