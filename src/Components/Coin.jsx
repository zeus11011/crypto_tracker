import React from 'react'
import "../css/coins.css"
function Coin({name,image, percentage , price,rank,cap}) {

    
    return (
        <tr className="">
            <td className="">{rank}</td>
            <td><img src={image} alt={name}className=""/></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{percentage}%</td>
            <td>{cap}</td>
        </tr>
    )
}

export default Coin
