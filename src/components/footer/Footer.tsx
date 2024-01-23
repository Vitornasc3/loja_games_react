import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-950 text-violet-600 p-2 gap-1">
        <h1 className="text-lg font-semibold">Loja de Games Generation | Copyright: 2024</h1>
        <p>Acesse nossas redes</p>
        <div className="flex gap-4">
            <Link to={`https://www.linkedin.com/in/vitor-do-nascimento-ferreira/`}><LinkedinLogo size={40} weight="bold"></LinkedinLogo></Link>
            <Link to={`https://github.com/Vitornasc3`}><GithubLogo size={40} weight="bold"></GithubLogo></Link>
            <Link to={`#`}><InstagramLogo size={40} weight="bold"></InstagramLogo></Link>
        </div>
    </div>
  )
}

export default Footer