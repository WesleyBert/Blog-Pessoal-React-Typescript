import { useContext, useEffect, useState } from "react"
import Postagem from "../../../models/Postagem"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"


function DeletarPostagem() {

    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar Logado')
            navigate('/login')
        }
    },[token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/postagens")
    }

    async function deletarPostagem() {
        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'authorization': token
                }
            })
            alert('Postagem apaga com sucesso')
        } catch (error) {
            alert('Error ao apagar a Postagem')
        }
        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar postagem</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Postagem</header>
                <div className="p-4">
                    <p className='text-xl h-full'>{ postagem.titulo}</p>
                    <p>{ postagem.texto}</p>
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={ deletarPostagem} >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem