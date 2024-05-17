import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './style'

type Props = {
    title: string
    desc: string
    link: string
}

const Projeto = ({ title, desc, link }: Props) => (
    <Card>
        <Title>{title}</Title>
        <Paragrafo tipo="secundario">{desc}</Paragrafo>
        <LinkBotao target="_blank" href={link}>
            Ver mais
        </LinkBotao>
    </Card>
)

export default Projeto
