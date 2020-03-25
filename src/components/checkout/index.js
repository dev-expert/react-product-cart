import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom';
import Styled from 'styled-components'

const Container = Styled.div`
    display: flex;
    justify-content: space-around;
`
const Product = Styled.div`
    padding: 10px;
    border: 1px solid black;
`

const Detail = Styled.div`
display: flex;
justify-content: space-between;
`

const ProductImage = Styled.img`

`

const AddButton = Styled.button`
    width:100%;
`

const Checkout = props => {
    const [cartData, updateCartData] = useState([])

    useLayoutEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))

        if (cartItems) {
            updateCartData(cartItems)
        }
    }, [])

    return(
        <Container>
            <Product>
                <ProductImage src="https://www.bgr.in/wp-content/uploads/2019/05/Oppo-A3.jpg" />
                <Detail>
                    <div>Managed Security Services</div>
                    <div>$2549.99</div>
                </Detail>
                <AddButton
                    onClick={() => {
                        const contains = cartData.filter((itm) => itm.id === '1')
                        let finalData = cartData

                        if (contains.length > 0) {
                            const final = finalData.filter((itms) => itms.id !== '1')
                            finalData = final.concat({ id: '1', name: 'Managed Security Services', price: '$2549.99', count: contains[0].count + 1 })
                        } else {
                            finalData = cartData.concat({ id: '1', name: 'Managed Security Services', price: '$2549.99', count: 1 })
                        }
                        localStorage.setItem('cartItems', JSON.stringify(finalData))
                        updateCartData(finalData)
                        window.alert("Product added sucessfully")
                    }}
                >
                    Add to Cart
                </AddButton>
            </Product>

            <Product>
                <ProductImage src="https://www.bgr.in/wp-content/uploads/2019/05/Oppo-A3.jpg" />
                <Detail>
                    <div>Engineering & Integration</div>
                    <div>$1025.50</div>
                </Detail>
                <AddButton
                    onClick={() => {
                        const contains = cartData.filter((itm) => itm.id === '2')
                        let finalData = cartData

                        if (contains.length > 0) {
                            const final = finalData.filter((itms) => itms.id !== '2')
                            finalData = final.concat({ id: '2', name: 'Engineering & Integration', price: '$1025.50', count: contains[0].count + 1 })
                        } else {
                            finalData = cartData.concat({ id: '2', name: 'Engineering & Integration', price: '$1025.50', count: 1 })
                        }
                        localStorage.setItem('cartItems', JSON.stringify(finalData))
                        updateCartData(finalData)
                        window.alert("Product added sucessfully")
                    }}
                >
                    Add to Cart
                </AddButton>
            </Product>
            
            <Product>
                <ProductImage src="https://www.bgr.in/wp-content/uploads/2019/05/Oppo-A3.jpg" />
                <Detail>
                    <div>Training</div>
                    <div>$100</div>
                </Detail>
                <AddButton
                     onClick={() => {
                        const contains = cartData.filter((itm) => itm.id === '3')
                        let finalData = cartData

                        if (contains.length > 0) {
                            const final = finalData.filter((itms) => itms.id !== '3')
                            finalData = final.concat({ id: '3', name: 'Training', price: '$100', count: contains[0].count + 1 })
                        } else {
                            finalData = cartData.concat({ id: '3', name: 'Training', price: '$100', count: 1 })
                        }

                        console.log('finalData', finalData)
                        localStorage.setItem('cartItems', JSON.stringify(finalData))
                        updateCartData(finalData)
                        window.alert("Product added sucessfully")
                    }}
                >
                    Add to Cart
                </AddButton>
            </Product>
            <Link to="/payment">
                <button>Go To Payment</button>
            </Link>
        </Container>
    )
}

export default Checkout;