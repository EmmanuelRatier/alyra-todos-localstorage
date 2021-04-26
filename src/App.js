import Todos from "./components/Todos"
import { useEffect, useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const handleCheckboxChange = (e) => {
    setDarkMode(e.target.checked)
  }
  const modeClasses = darkMode ? "bg-dark text-white" : "bg-light"

  useEffect(() => {
    darkMode ? localStorage.setItem("darkModePreference", true) : localStorage.setItem("darkModePreference", false)
  })
  return (
    <div className="container my-4" className={modeClasses}>
      <div class="form-check form-switch" >
        <input class="form-check-input" type="checkbox" id="activate" onChange={handleCheckboxChange} />
        <label class="form-check-label" for="activate" > Mode Sombre </label>
      </div>
      <h1 className="text-center">ToDos App</h1>
      <Todos />
    </div>
  )
}

export default App
