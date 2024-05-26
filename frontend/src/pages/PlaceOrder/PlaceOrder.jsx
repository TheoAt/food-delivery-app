import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

import axios from 'axios'

const PlaceOrder = () => {

    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        zipcode: '',
        city: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (event) => {
        event.preventDefault()

        let orderItems = []
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item
                itemInfo['quantity'] = cartItems[item._id]
                orderItems.push(itemInfo)
            }
        })

        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 5
        }

        let response = await axios.post(url + '/api/order/place', orderData, {
            headers: {
                token
            }
        })

        if (response.data.success) {
            const { session_url } = response.data
            window.location.replace(session_url)
        } else {
            alert('Une erreur est survenue...')
        }
    }

    return (
        <>
            {getTotalCartAmount() === 0 ?
                <div className="empty-container">
                    <h2 className="title-empty">Votre panier est vide... 🛒😢</h2>
                </div>
                :
                <form className="place-order-container" onSubmit={placeOrder}>
                    <div className="place-order-left">
                        <p className='title'>Information de livraison</p>

                        <div className="multi-fields">
                            <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Votre nom' required />
                            <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Votre prénom' required />
                        </div>

                        <input name='email' onChange={onChangeHandler} value={data.email} type="mail" placeholder='Votre mail' className='input-lrg' required />
                        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Rue' className='input-lrg' required />

                        <div className="multi-fields">
                            <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Code postal' className='input-postal' required />
                            <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Ville' required />
                        </div>

                        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Téléphone' className='input-lrg' required />
                    </div>

                    <div className="place-order-right">
                        <div className="cart-total">
                            <h2>Total de votre pannier</h2>

                            <div>
                                <div className="cart-total-details">
                                    <p>Sous-total</p>
                                    <p>{getTotalCartAmount().toFixed(2)}€</p>
                                </div>

                                <hr />

                                <div className="cart-total-details">
                                    <p>Frais de livraison/service</p>
                                    <p>{getTotalCartAmount() === 0 ? '0' : '5.00'}€</p>
                                </div>

                                <hr />

                                <div className="cart-total-details">
                                    <b>Montant total</b>
                                    <b>{getTotalCartAmount() === 0 ? '0' : (getTotalCartAmount() + 5).toFixed(2)}€</b>
                                </div>
                            </div>

                            <button className='btn-pay' type='submit'>Procéder au paiement</button>
                        </div>
                    </div>
                </form >
            }
        </>
    )
}

export default PlaceOrder