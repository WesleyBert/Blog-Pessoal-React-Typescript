import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Footer() {
    const { usuario, handleLogout } = useContext(AuthContext)

    let footerComponent

    let data = new Date().getFullYear()

    if (usuario.token !== "") {
        footerComponent = (
            <>
                <div className="flex justify-center bg-indigo-900 text-white mt-auto py-4">
                    <div className="container flex flex-col items-center">
                        <p className="text-xl font-bold">Blog pessoal Wesley Berto | Copyright: {data}</p>
                        <p className="text-lg">Acesse minhas redes sociais</p>
                        <div className="flex gap-2">
                            <LinkedinLogo size={48} weight="bold" />
                            <GithubLogo size={48} weight="bold" />
                        </div>
                    </div>
                </div>
            </>

        )
    }
    return (
        footerComponent 
    );
}

export default Footer;
