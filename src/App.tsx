import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioTema from "./components/formularioTema/FormularioTema";
import DeletarTemas from "./components/temas/deletarTemas/DeletarTemas";
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./components/Navbar/Navbar";
import FormularioPostagem from "./components/postagens/formularioPostagens/FormularioPostagens";
import DeletarPostagem from "./components/postagens/deletarPostagens/DeletarPostagem";
import ListaPostagens from "./components/ListaPostagens/listaPostagens/ListaPostagens";
import Footer from "./components/Footer/Footer";
import Perfil from "./pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTemas />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagens" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;