import React, { useEffect, useState } from 'react'
import './List.css'

import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ url }) => {

    const [list, setList] = useState([])

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`)

        if (response.data.success) {
            setList(response.data.data)
        } else {
            toast.error("Une erreur est survenue")
        }
    }

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
        await fetchList()

        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error("Une erreur est survenue")
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div className='list-container add-container flex-col'>
            {list.length !== 0 ?
                <>
                    <p>Liste de vos plats</p>

                    <div className="list-table">
                        <div className="list-table-format title">
                            <b>Image</b>
                            <b>Désignation</b>
                            <b>Catégorie</b>
                            <b>Prix</b>
                            <b>Retirer</b>
                        </div>

                        {list.map((item, index) => {
                            return (
                                <div key={index} className='list-table-format'>
                                    <img src={`${url}/images/` + item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>{item.category}</p>
                                    <p>{item.price}€</p>
                                    <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                                </div>
                            )
                        })}
                    </div>
                </>
                :
                <p>Votre carte est vide pour le moment... 😢</p>
            }
        </div>
    )
}

export default List