import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-violet-600 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-6 text-2xl bg-slate-800 text-white h-full font-semibold'>{categoria.tipo}</p>

            <div className="flex bg-slate-500 justify-center font-semibold">
                <Link to={`/editarcategoria/${categoria.id}`} className="flex justify-center text-violet-600 bg-white border-white border-solid px-4 py-2 hover:bg-violet-700 hover:text-white w-full">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className="rounded text-white border-white border-solid px-4 py-2 hover:bg-violet-700
         w-full flex justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria