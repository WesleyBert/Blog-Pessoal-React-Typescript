import homeLogo from '../assets/home.png';
import ListaPostagens from '../components/ListaPostagens/listaPostagens/ListaPostagens';
import ModalPostagens from '../components/postagens/modalPostagens/ModalPostagens'

function Home() {

    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja bem vinde!</h2>
                        <p className="text-x1"> Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagens />
                            <button className="rounded bg-white text-blue-800 py-2 px-4"> Ver postangens</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={homeLogo} alt="" className="w-2/3" />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;