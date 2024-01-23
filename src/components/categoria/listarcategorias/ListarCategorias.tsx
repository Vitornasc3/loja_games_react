import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { listar } from "../../../services/Services";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function listarCategorias() {
        await listar('/categorias', setCategorias)
    }

    useEffect(() => {
        listarCategorias();
    }, [categorias.length])

    return (
        <>
        {categorias.length === 0}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategoria key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias