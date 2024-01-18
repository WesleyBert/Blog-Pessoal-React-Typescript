import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./components/Login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import Navbar from "./components/Navbar/Navbar"
import { AuthProvider } from "./contexts/AuthContext"
import Footer from "./components/Footer/Footer"


function App() {



  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/cadastro" element={<Cadastro />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
