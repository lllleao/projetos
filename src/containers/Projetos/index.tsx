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
                    title="Landing Page sobre Cinefilia"
                    desc="Bootstrap | Gulp | JavaScript"
                    link="https://site-cinefilia.vercel.app/"
                />
            </li>
            <li>
                <Projeto
                    title="Landing Page Amélie Poulain"
                    desc="SASS | Gulp | JavaScript"
                    link="https://landing-page-amelie.vercel.app/"
                />
            </li>
            <li>
                <Projeto
                    title="Landing Page Restaurante Fictício"
                    desc="Bootstrap | CSS | JavaScript"
                    link="https://site-doctor-who-6mc4.vercel.app/"
                />
            </li>
            <li>
                <Projeto
                    title="Lista de Tarefas"
                    desc="JQuery | CSS | JavaScript"
                    link="https://lista-tarefas-ebac.vercel.app/"
                />
            </li>
            <li>
                <Projeto
                    title="Agenda de Contatos"
                    desc=" CSS | JavaScript"
                    link="https://agenda-de-contatos-roan.vercel.app/"
                />
            </li>
            <li>
                <Projeto
                    title="Calculadora de Médias"
                    desc=" CSS | JavaScript"
                    link="https://leao-projeto-calculadora-media.vercel.app/"
                />
            </li>
            <li>
                <Projeto
                    title="Landing Page sobre Doctor Who"
                    desc=" CSS | JavaScript"
                    link="https://site-doctor-who.vercel.app/"
                />
            </li>
        </Lista>
    </section>
)

export default Projetos
