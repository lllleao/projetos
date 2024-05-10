import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
    <section>
        <Title teste={'ola'} fontSize={16}>
            Sobre mim
        </Title>
        <Paragrafo tipo="principal">
            Lorem iParagrafosum, dolor sit amet consectetur adipisicing elit.
            Laborum Laborum sint nam obcaecati veniam? Tempore debitis sunt
            quasi exercitationem dolor hic mollitia, deserunt iusto voluptas
            corrupti, architecto eos dignissimos.
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
