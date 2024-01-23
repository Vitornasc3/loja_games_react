import { GameController } from "@phosphor-icons/react/dist/ssr"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="px-6 py-4 text-lg bg-gray-950 text-violet-600 font-semibold">
            <div className="flex justify-between">
                
                <Link to={'/'} className="text-lg flex gap-5"> <GameController size={40}></GameController> Loja dos Games</Link>
                <input className="border w-1/3 rounded px-2 py-1 font-normal text-black" type="text" placeholder="Pesquisar" />
                <div className="flex gap-4">
                    <div className="cursor-pointer hover:underline">Produtos</div>
                    <Link to={`/categorias`} className="hover:underline">Categorias</Link>
                    <Link to={`/cadastrarcategoria`} className="hover:underline">Nova Categoria</Link>
                    <div className="cursor-pointer hover:underline">Perfil</div>
                    <div className="cursor-pointer hover:underline">Carrinho</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar