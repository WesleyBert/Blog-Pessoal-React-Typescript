import { useContext, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import CardPostagem from "../../postagens/postagens/CardPostagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Dna } from "@phosphor-icons/react";

function ListaPostagens() {
    const [postagens, setPostagens] = useState<Postagem[]>([]);

    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('você precisa esta logado');
            navigate('/');
         }
    }, [token]);
    
    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarPostagens();
    }, [postagens.length]);
    return (
        <>
            {postagens.length === 0 && (
                <Dna
                    visible={ true }
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto" />
            )}
            <div className="cintainer mx-auto my-4 grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-4">
                {postagens.map((postagem) => (
                    <CardPostagem key={postagem.id} post={ postagem } />
                )) }
                
            </div>
        </>
)
}

export default ListaPostagens;