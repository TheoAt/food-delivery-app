import React from 'react'
import './Orders.css'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Orders = ({ url }) => {

    const [orders, setOrders] = useState([])

    const fetchAllOrders = async () => {
        const response = await axios.get(url + '/api/order/list')
        if (response.data.success) {
            setOrders(response.data.data)
        } else {
            toast.error('Une erreur est survenue')
        }
    }

    useEffect(() => {
        fetchAllOrders()
    }, [])

    return (
        <div className='order add-container'>
            <h3>Commandes</h3>

            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={index} className="order-item">
                        <img src={assets.parcel_icon} alt="parcel_icon" />

                        <div>
                            <p className="order-item-food">
                                {order.items.map((item, index) => {
                                    if (index === order.items.length - 1) {
                                        return item.name + ' x ' + item.quantity
                                    } else {
                                        return item.name + ' x ' + item.quantity + ', '
                                    }
                                })}
                            </p>

                            <p className="order-item-name">{order.address.firstName + ' ' + order.address.lastName}</p>

                            <div className="order-item-address">
                                <p>{order.address.street}</p>
                                <p>{order.address.city + ', ' + order.address.zipcode}</p>
                            </div>

                            <p className="order-item-phone">{order.address.phone}</p>
                        </div>

                        <p>{order.items.length === 1 ? 'Plat : ' : 'Plats : '}{order.items.length}</p>
                        <p>{order.amount}€</p>

                        <select>
                            <option value="En cours de traitement">En cours de traitement</option>
                            <option value="Livraison en attente">Livraison en attente</option>
                            <option value="Commande livrée">Commande livrée</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders