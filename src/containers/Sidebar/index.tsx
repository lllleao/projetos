import { FotoPerfil } from '../../components/Avatar/style'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { BotaoTema, Descricao, SidebarContainer } from './style'

type Props = {
    trocaTema: () => void
}

const Sidebar = ({ trocaTema }: Props) => (
    <aside>
        <SidebarContainer>
            <FotoPerfil src="http://github.com/lllleao.png" />
            <Title fontSize={20}>Lucas Leão</Title>
            <Paragrafo tipo="secundario" fontSize={16}>
                lllleao
            </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>
                Desenvolvedor Front End
            </Descricao>
            <BotaoTema onClick={trocaTema}>Trocar Tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar
