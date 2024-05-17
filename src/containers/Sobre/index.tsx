import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
    <section>
        <Title fontSize={16}>Sobre mim</Title>
        <Paragrafo tipo="principal">
            Cresci cuidando de uma pequena e clássica lan house que era mantida
            pela minha mãe na nossa casa. Talvez essa seja a razão pela qual sou
            tão apaixonado pelo mundo da tecnologia.
        </Paragrafo>
        <br />
        <Paragrafo tipo="principal">
            Tenho forte senso crítico, que vem da minha formação em filosofia, e
            uma enorme vontade de resolver problemas complicados – amo um bom
            desafio. Portanto, sou aberto ao aprendizado de tudo, uma vez que,
            quanto mais ferramentas dominamos, mais somos resilientes a
            percalços.
        </Paragrafo>
        <GithubSecao>
            <img
                className="img1"
                src="https://github-readme-stats.vercel.app/api?username=lllleao&show_icons=true&theme=radical"
            />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lllleao&layout=compact&theme=radical" />
        </GithubSecao>
    </section>
)

export default Sobre
