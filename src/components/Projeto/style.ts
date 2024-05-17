import styled from 'styled-components'

export const Card = styled.div`
    border: 2px solid ${(props) => props.theme.corDaBorda};
    padding: 16px;
`
export const LinkBotao = styled.a`
    display: inline-block;
    text-decoration: none;
    background-color: ${(props) => props.theme.corDeFundoBotao};
    font-size: 14px;
    padding: 8px;
    cursor: pointer;
    margin-top: 24px;
    color: #fff;
`
