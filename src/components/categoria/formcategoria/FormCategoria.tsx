import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria"
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/Services";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await listar(`/categorias/${id}`, setCategoria)
    }

    function retornar() {
        navigate("/categorias")
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('Categoria atualizada')
            } catch (error: any) {
                alert('Erro ao atualizar categoria')
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('Categoria cadastrada com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar categoria')

            }
        }
        retornar()
    }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Atualizar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2">
                    <label>Descrição da categoria</label>
                    <input
                        id="descricao"
                        type="text"
                        placeholder="Descrição"
                        name="tipo"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                </button>
            </form>
        </div>
    )
}

export default FormCategoria