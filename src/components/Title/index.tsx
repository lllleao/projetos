import { Titulo as TituloEstilo } from './style'

export type Props = {
    children: string //Se fosse uma propriedade com outro nome, não daria para colocar o valor dela por dentro da tag ao invés de colocar o valor como se fosse um atribuo.
    fontSize?: number
}

const Title = (props: Props) => (
    <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Title
