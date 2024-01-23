import home from '/Users/Vitor/Desktop/React/lojagames/src/assets/home.svg'

function Home() {
  return (
    <div className="grid grid-cols-2 bg-gray-800 text-gray-200">
        <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-5xl">Seja bem vindo!</h1>
            <p className="text-lg">Aqui você encontra os melhores jogos!</p>
            <button className="rounded border-solid border-2 w-1/5 py-2 hover:border-purple-600">Novo Produto</button>
        </div>
        <div id="imagem" className='flex justify-center'>
            <img src={home}
             alt="Logo Jogo"
             className="w-2/3"
             />
        </div>

    </div>
  )
}

export default Home