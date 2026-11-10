import React, { useState } from 'react'

const ThemeChanger = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
     <div

    style={{
      backgroundColor: darkMode ? "#222" : "#fff",
      color: darkMode ? "#fff" : "#222",
      padding: "50px",
      minHeight: "200px"
    }}
  >
    <h2>
      {darkMode ? "Dark Mode" : "Light Mode"}
    </h2>
    <button onClick={() => setDarkMode(!darkMode)}>
      Change Theme
    </button>
  </div>
  )
}

export default ThemeChanger