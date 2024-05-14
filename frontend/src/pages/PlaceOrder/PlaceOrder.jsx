import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <>
            {getTotalCartAmount() === 0 ?
                <div className="empty-container">
                    <h2 className="title-empty">Votre panier est vide... 🛒😢</h2>
                </div>
                :
                <form className="place-order-container" >
                    <div className="place-order-left">
                        <p className='title'>Information de livraison</p>

                        <div className="multi-fields">
                            <input type="text" placeholder='Votre nom' />
                            <input type="text" placeholder='Votre prénom' />
                        </div>

                        <input type="mail" placeholder='Votre mail' className='input-lrg' />
                        <input type="text" placeholder='Rue' className='input-lrg' />

                        <div className="multi-fields">
                            <input type="text" placeholder='Ville' />
                            <input type="text" placeholder='Région' />
                        </div>

                        <div className="multi-fields">
                            <input type="text" placeholder='Code postal' />
                            <input type="text" placeholder='Pays' />
                        </div>

                        <input type="text" placeholder='Téléphone' className='input-lrg' />
                    </div>

                    <div className="place-order-right">
                        <div className="cart-total">
                            <h2>Total de votre pannier</h2>

                            <div>
                                <div className="cart-total-details">
                                    <p>Sous-total</p>
                                    <p>{getTotalCartAmount()}€</p>
                                </div>

                                <hr />

                                <div className="cart-total-details">
                                    <p>Frais de livraison/service</p>
                                    <p>{getTotalCartAmount() === 0 ? '0' : '4.99'}€</p>
                                </div>

                                <hr />

                                <div className="cart-total-details">
                                    <b>Montant total</b>
                                    <b>{getTotalCartAmount() === 0 ? '0' : (getTotalCartAmount() + 4.99).toFixed(2)}€</b>
                                </div>
                            </div>

                            <button className='btn-pay'>Procéder au paiement</button>
                        </div>
                    </div>
                </form >
            }
        </>
    )
}

export default PlaceOrder