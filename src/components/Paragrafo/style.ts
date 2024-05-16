import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize : 14) + 'px'};
    color: ${(props) => (props.tipo === 'principal' ? '#fff' : '#eee')};
`
