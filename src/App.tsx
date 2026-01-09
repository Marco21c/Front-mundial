import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./pages/components/Navbar";

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-app-gradient pt-4">
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
      </div>
    </>
  )
}

export default App
