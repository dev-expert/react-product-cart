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
const data = [
    {
        id: '1',
        name: "Managed Security Services",
        price: 2549.99,
        image: "https://www.bgr.in/wp-content/uploads/2019/05/Oppo-A3.jpg"
    },
    {
        id: '2',
        name: "Engineering & Integration",
        price: 1025.50,
        image: "https://www.bgr.in/wp-content/uploads/2019/05/Oppo-A3.jpg"
    },
    {
        id: '3',
        name: "Training",
        price: 100,
        image: "https://www.bgr.in/wp-content/uploads/2019/05/Oppo-A3.jpg"
    }
]

const Checkout = props => {
    const [cartData, updateCartData] = useState([])

    useLayoutEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))

        if (cartItems) {
            updateCartData(cartItems)
        }
    }, [])

    const addToCart = (element) => {
        const contains = cartData.filter((itm) => itm.id === element.id)
        let finalData = cartData

        if (contains.length > 0) {
            const final = finalData.filter((itms) => itms.id !== element.id)
            finalData = final.concat({ id: element.id, name: element.name, price: element.price, count: contains[0].count + 1 })
        } else {
            finalData = cartData.concat({ id: element.id, name: element.name, price: element.price, count: 1 })
        }
        localStorage.setItem('cartItems', JSON.stringify(finalData))
        updateCartData(finalData)
        window.alert("Product added sucessfully")
    }

    return(
        <Container>
            {data.map((element)=> {
                return (<Product>
                    <ProductImage src={element.image} />
                    <Detail>
                        <div>{element.name}</div>
                        <div>${element.price}</div>
                    </Detail>
                    <AddButton
                        onClick={() => addToCart(element)}
                    >
                        Add to Cart
                    </AddButton>
                </Product>)
            })}
            <Link to="/payment">
                <button>Go To Payment</button>
            </Link>
        </Container>
    )
}

export default Checkout;