import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
    Height: 100px;
    display: flex;
    font-size: 40px;
    justify-content: space-between;
`

const Logo = Styled.div`
    
`

const Name = Styled.div`
    
`

const Logout = Styled.div`
    
`

const Header = props => {
    return(
        <Container>
            <Logo>Logo</Logo>
            <Name>Name</Name>
            <Logout>Logout</Logout>
        </Container>
    )
}

export default Header;