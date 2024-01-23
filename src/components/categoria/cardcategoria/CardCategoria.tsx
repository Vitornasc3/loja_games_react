import Categoria from "../../../models/Categoria"

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-violet-600 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-6 text-2xl bg-slate-100 h-full font-semibold'>{categoria.tipo}</p>

            <div className="flex bg-slate-500 justify-center font-semibold">
                <div className="flex justify-center text-violet-600 bg-white border-white border-solid px-4 py-2 hover:bg-violet-600  hover:text-white w-full">
                    <button>Editar</button>
                </div>

                <div className="rounded text-white border-white border-solid px-4 py-2 hover:bg-violet-600
         w-full flex justify-center">
                    <button>Deletar</button>
                </div>
            </div>
        </div>
    )
}

export default CardCategoria