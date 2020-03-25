import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
    height: 100px;
`
const Logo = Styled.div`
    font-size: 40px;
    position: relative;
    top: 70%;
`

const Footer = props => {
    return(
        <Container>
            <Logo>Logo</Logo>
        </Container>
    )
}

export default Footer;