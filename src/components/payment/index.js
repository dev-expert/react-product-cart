import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom';
import Styled from 'styled-components'

const Container = Styled.div`
    padding: 0 20px;
`

const Outer = Styled.div`
    padding: 20px 0;
    display: flex;
    fontSize: 16px;
    border-bottom: 1px solid #dadada;
    justify-content: space-between;
    align-items: center;
`

const Inner = Styled.div`
    display: flex ;
    align-items: center ;
`

const Count = Styled.span`
    margin-right: 15px ;
`

const Div = Styled.span`
    display: flex;
    flex-direction: column;
`

const Name = Styled.span`
    margin-bottom: 10px;
    text-transform: capitalize;
    font-weight: 600;
    color: #8a8a8a;
`

const Price = Styled.span`
    text-transform: capitalize;
    font-weight: 600;
    color: #8a8a8a;
`

const Button = Styled.button`
    background: transparent;
    border: 1px solid #ff0033;
    padding: 5px 15px;
    borderRadius: 5px;
    color: #ff0033;
    cursor: pointer;
`

const promo = [
    {
        id: '1',
        name: 'OFF-20',
        percent: 20
    },
    {
        id: '2',
        name: 'OFF-30',
        percent: 30
    }
]

const Products = props => {
    const [cartItems, updateCartItems] = useState([])
    const [pay, updatePay] = useState(0)

    useLayoutEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))

        if (cartItems) {
            updateCartItems(cartItems)
        }
    }, [])

    const deleteItem = obj => {
        const contains = cartItems.filter((itm) => itm.id === obj.id)
        let finalData = cartItems

        if (contains[0].count > 1) {
            const final = finalData.filter((itms) => itms.id !== obj.id)
            finalData = final.concat({ ...obj, count: contains[0].count - 1 })
        } else {
            finalData = finalData = cartItems.filter((itm) => itm.id !== obj.id)
        }
        localStorage.setItem('cartItems', JSON.stringify(finalData))
        updateCartItems(finalData)
    }

    const addPromo = promo => {
        if(sum >= 5000){
            sum = (sum*(100 - promo.percent))/100
            updatePay(sum)
            window.alert("Promo-code Applied Successfully")
        }else(
            window.alert("Amount must be more than 5000")
        )
    }

    let sum = 0;
    const Calculate = item => {
        sum += item.price * item.count;
    }

    return(
        <Container>
            {cartItems.length > 0 && cartItems.map((obj) => (
                <Outer>
                    <Inner>
                        <Count>{`${obj.count} x`}</Count>
                        <Div>
                            <Name>
                                Name: <span style={{ color: '#2a2a2a' }}>{obj.name}</span>
                            </Name>
                            <Price>
                                Price: <span style={{ color: '#2a2a2a' }}>{obj.price}</span>
                            </Price>
                        </Div>
                    </Inner>
                    <div>
                        <Button
                            onClick={() => deleteItem(obj)}
                        >
                            Remove
                        </Button>
                    </div>
                </Outer>
            ))}
            <Link to="/products">
                <button>Go To Products</button>
            </Link>
            <div>
                {
                cartItems.forEach(item => {
                    Calculate(item)
                })}
                Price: {sum}
            </div>
            <div>
                {
                    promo.map((element) => {
                        return <button onClick={() => addPromo(element)}>
                            {element.name}
                        </button>
                    })
                }
            </div>
            <div>
                After Discounts: {pay === 0 ? 'No Promo-code Applied' : pay}
            </div>
        </Container>
    )
}

export default Products;