
function DeletarTemas() {
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4x1 text-center my-4'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2x1 overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2x1'>Tema</header>
                <p className='p-8 text-3x1 bg-slate-200 g-full'>tema</p>
                <div className='flex'>
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center'>sim</button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTemas