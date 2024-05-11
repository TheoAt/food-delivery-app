import React, { useContext } from 'react'
import './FoodList.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodList = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-list-container' id='food-list'>
            <h2>Nos meilleurs plats près de chez vous</h2>
            <div className="food-list-contents">
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category)
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default FoodList