import React, { useContext } from 'react'
import './Cart.css'

import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

    const navigate = useNavigate()

    return (
        <div className='cart-container'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Plats</p>
                    <p>Désignation</p>
                    <p>Prix</p>
                    <p>Quantité</p>
                    <p>Total</p>
                    <p>Supprimer</p>
                </div>

                <br />
                <hr className='hr-items-title' />

                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index} >
                                <div className="cart-items-title cart-items-item">
                                    <img src={url + '/images/' + item.image} alt="item_img" />
                                    <p>{item.name}</p>
                                    <p>{item.price}€</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]}€</p>
                                    <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                                </div>

                                <hr />
                            </div>
                        )
                    }
                })}
            </div>

            <div className="cart-bottom">
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

                    {getTotalCartAmount() === 0 ?
                        <p className="cart-empty">Laissez-vous tenter par l'une de nos délicieuses propositions !</p>
                        :
                        <button onClick={() => navigate('/commande')}>Vérifier ma commande</button>
                    }
                </div>

                <div className="cart-promocode">
                    <p>Un code de réduction ? Entrez-le ici !</p>

                    <div className="cart-promocode-input">
                        <input type="text" placeholder='#Jaifaim' />
                        <button>Valider</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart