import React from 'react'
import "../css/coins.css"
function Coin({name,image, percentage , price,rank,cap}) {

    
    return (
        <tr className="border-5 text-center  bg-stone-700 rounded-md text-stone-200">
            <td className="">{rank}</td>
            <td><img src={image} alt={name}className="max-h-10 m-auto"/></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{percentage}%</td>
            <td>{cap}</td>
        </tr>
    )
}

export default Coin
