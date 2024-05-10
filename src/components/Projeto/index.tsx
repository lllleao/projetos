import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './style'

const Projeto = () => (
    <Card>
        <Title>Projeto Calculadora</Title>
        <Paragrafo tipo="secundario">Calculadora com VueJS</Paragrafo>
        <LinkBotao>Ver mais</LinkBotao>
    </Card>
)

export default Projeto
