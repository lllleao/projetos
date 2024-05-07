import styled from 'styled-components'

type BotoesProps = {
    principal: boolean
    tamanhoFont?: string
}

const Botao = styled.button<BotoesProps>`
    background-color: ${(props) => (props.principal ? 'green' : 'red')};
    color: #fff;
    padding: 8px;
    font-size: ${(props) => props.tamanhoFont || '16px'};
`

const Input = styled.input`
    padding: 8px;
`

const BotaoPerigo = styled(Botao)`
    background-color: purple;
    color: #fff;
    cursor: pointer;
    .fontLa {
        font-family: serif;
    }
`

function Teste() {
    return (
        <>
            <Input />
            <Botao tamanhoFont="22px" principal>
                Enviar
            </Botao>
            <br /> <br />
            <Botao principal={false}>Cancelar</Botao>
            <BotaoPerigo principal>
                <span className="fontLa">Não clique aqui</span>
            </BotaoPerigo>
            <h1>Teste de coisa</h1>
        </>
    )
}

export default Teste
