import { GameController } from "@phosphor-icons/react/dist/ssr"

function Navbar() {
    return (
        <div className="px-6 py-4 text-lg bg-gray-950 text-violet-600 font-semibold">
            <div className="flex justify-between">
                
                <h1 className="text-lg flex gap-5"> <GameController size={40}></GameController> Loja dos Games</h1>
                <input className="border w-1/3 rounded px-2 py-1 font-normal" type="text" placeholder="Pesquisar" />
                <div className="flex gap-4">
                    <div className="cursor-pointer hover:underline">Produtos</div>
                    <div className="cursor-pointer hover:underline">Categorias</div>
                    <div className="cursor-pointer hover:underline">Nova Categoria</div>
                    <div className="cursor-pointer hover:underline">Perfil</div>
                    <div className="cursor-pointer hover:underline">Carrinho</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar