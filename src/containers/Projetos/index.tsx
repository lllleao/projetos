import Projeto from '../../components/Projeto'
import Title from '../../components/Title'
import { Lista } from './style'

const Projetos = () => (
    <section>
        <Title fontSize={16}>Projetos</Title>
        <Lista>
            <li>
                <Projeto
                    title="Calculadora"
                    desc="VueJS | JavaScript"
                    link="https://calculadora-flame-phi.vercel.app/"
                />
            </li>
            <li>
                <Projeto
                    title="Landing Page sobre cinefilia"
                    desc="Bootstrap | Gulp"
                    link="https://calculadora-flame-phi.vercel.app/"
                />
            </li>
        </Lista>
    </section>
)

export default Projetos
