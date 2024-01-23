import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-950 text-violet-600 p-2 gap-1">
        <h1 className="text-lg font-semibold">Loja de Games Generation | Copyright: 2024</h1>
        <p>Acesse nossas redes</p>
        <div className="flex gap-4">
            <LinkedinLogo size={40} weight="bold"></LinkedinLogo>
            <GithubLogo size={40} weight="bold"></GithubLogo>
            <InstagramLogo size={40} weight="bold"></InstagramLogo>
        </div>
    </div>
  )
}

export default Footer