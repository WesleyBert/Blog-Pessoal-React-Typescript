import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { toastAlerta } from "../../util/toastAlerta"

function Navbar() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usúario deslogado com sucesso', 'sucesso')
        navigate('/login')
    }

    let navbarComponent

    if (usuario.token !== "") {
        navbarComponent = (
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

                    <div className='flex gap-4'>
                        <Link to="/postagens" className='hover:underline'>Postagens</Link>
                        <Link to="/temas" className='hover:underline'>Temas</Link>
                        <Link to="/cadastroTema" className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/login' className='hover:underline'>Login</Link>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to="" onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>)
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar