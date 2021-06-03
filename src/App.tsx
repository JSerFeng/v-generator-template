import "./App.css"
import RenderMain from "./components/RenderMain"

function App() {
  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    position: "relative"
  }}>
    <RenderMain />
  </div>
}

export default App
