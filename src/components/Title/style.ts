import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    font-wight: bold;
    margin-bottom: 16px;
    color: ${(proprs) => proprs.theme.corPrincipal};
`
